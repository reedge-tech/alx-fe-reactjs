import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';
import UserCard from './UserCard';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setUsers([]);
    setLoading(true);

    try {
      // Advanced search if location or repos given
      if (location || minRepos) {
        const results = await searchUsers({ username, location, minRepos });
        if (results.length === 0) {
          setError("Looks like we cant find the user");
        }
        setUsers(results);
      } else {
        // Single user fetch
        const user = await fetchUserData(username);
        setUsers([user]);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4 bg-white shadow-md p-4 rounded-md">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub Username"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repos (optional)"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <UserCard key={user.id || user.login} user={user} />
        ))}
      </div>
    </div>
  );
}
