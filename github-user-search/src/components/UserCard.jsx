export default function UserCard({ user }) {
  return (
    <div className="flex items-center space-x-4 border p-4 rounded shadow-sm">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
        {user.bio && <p className="text-sm text-gray-600">{user.bio}</p>}
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}
