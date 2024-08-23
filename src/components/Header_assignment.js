import React from "react";
import { Link } from "react-router-dom";
function Header_assignment() {
    return (     
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to='/' className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/add_assignment' className="nav-link active">Add assignment</Link>
        </li>
        <li className="nav-item">
          <Link to='/view_assignments' className="nav-link active">View assignments</Link>
        </li>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default Header_assignment;