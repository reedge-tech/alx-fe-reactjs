import { useParams, Link, Outlet } from "react-router-dom";

export default function UserProfile() {
  const { id, username } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {id || "N/A"}</p>
      <p>Username: {username || "Guest"}</p>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}
