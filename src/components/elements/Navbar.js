import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-center">
      <Link to="/contacts/add" className="btn btn-outline-primary">
        ➕ Contact
      </Link>
    </div>
  );
}
