import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useParams,
} from "react-router-dom";

// Components for demonstration
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function ProfileDetails() {
  return <h2>Profile Details Section</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings Section</h2>;
}

function UserProfile() {
  const { id, username } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id || "None"}</p>
      <p>Username: {username || "Anonymous"}</p>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

// Protected route component
function ProtectedRoute({ children }) {
  const isAuthenticated = true; // set to false to test redirect
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/1">Profile</Link>
        <Link to="/user/Reedge">User (Dynamic)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route with Nested Routes */}
        <Route
          path="/profile/:id/*"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route Example */}
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
