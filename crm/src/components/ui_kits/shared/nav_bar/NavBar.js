import React from "react";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <header>
        <nav className  ="navbar navbar-expand-lg bg-body-tertiary">
          <div className    ="container-fluid">
            <ol className   ="breadcrumb ms-3">
              <li className ="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className ="breadcrumb-item active" >
                Library
              </li>
            </ol>
            <div className  ="logout me-3">
              <button type="button"  className   ="btn btn-outline-dark">
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
