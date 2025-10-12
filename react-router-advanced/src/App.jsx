import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profile, { ProfileDetails, ProfileSettings } from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function User() {
  return <h1>Dynamic User Route Example</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/1">Profile</Link>
        <Link to="/user/JohnDoe">Dynamic User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Nested Route */}
        <Route
          path="/profile/:id/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
