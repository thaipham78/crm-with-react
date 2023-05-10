import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <nav className="nav flex-column text-white">
          <Link to="/" className="navbar-brand text-white fw-bold fs-5 px-3">
            Contact management
          </Link>
          <Link to="/users" className="nav-link text-light">
            Users
          </Link>
          <Link to="/contacts" className="nav-link text-light">
            Contacts
          </Link>
          <Link to="/companies" className="nav-link text-light">
            Companies
          </Link>
        </nav>
      </div>
    </>
  );
}
