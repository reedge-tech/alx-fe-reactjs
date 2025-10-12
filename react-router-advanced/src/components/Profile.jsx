import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

function ProfileDetails() {
  return <h2>Profile Details Section</h2>;
}

function ProfileSettings() {
  return <h2>Profile Settings Section</h2>;
}

export default function Profile() {
  const { id } = useParams();

  return (
    <div>
      <h1>Profile Page for User ID: {id}</h1>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* ✅ Nested routes implemented directly here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
