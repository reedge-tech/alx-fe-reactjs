import { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const searchUser = async (e) => {
    e.preventDefault();
    setError('');
    setUser(null);
    if (!query.trim()) return setError('Please enter a username.');
    try {
      const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
      const headers = token ? { Authorization: `token ${token}` } : {};
      const res = await axios.get(`https://api.github.com/users/${encodeURIComponent(query)}`, { headers });
      setUser(res.data);
    } catch (err) {
      if (err.response?.status === 404) setError('User not found.');
      else setError('Error fetching user. Check network or token.');
    }
  };

  return (
    <div>
      <form onSubmit={searchUser} style={{ display: 'flex', gap: 8 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username (e.g. torvalds)"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}
