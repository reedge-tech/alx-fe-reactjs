import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();

  return (
    <div>
      <h1>Profile Page for User ID: {id}</h1>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export function ProfileDetails() {
  return <h2>Profile Details Section</h2>;
}

export function ProfileSettings() {
  return <h2>Profile Settings Section</h2>;
}
