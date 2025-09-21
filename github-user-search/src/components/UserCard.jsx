export default function UserCard({ user }) {
  return (
    <div style={{ marginTop: 20, border: '1px solid #ddd', padding: 12, borderRadius: 8, display: 'flex', gap: 12 }}>
      <img src={user.avatar_url} alt={user.login} width="96" height="96" style={{ borderRadius: 8 }} />
      <div>
        <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
        <p style={{ margin: '6px 0' }}>{user.bio}</p>
        <p style={{ margin: '6px 0' }}>Followers: {user.followers} · Following: {user.following}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}
