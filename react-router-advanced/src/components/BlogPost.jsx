import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Post #{id}</h1>
      <p>This is the detailed view for blog post with ID: {id}.</p>
    </div>
  );
}
