import React from 'react'
import { NavLink } from 'react-router-dom';
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-2">
            <div className="container">
              <NavLink className="navbar-brand" to="/">ReactJS</NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

              <div className="nav justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link text-white px-3" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white px-3" to="/products">Product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white px-3" to="/blog">Blog</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white px-3" to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <NavLink className="nav-link text-white px-3" to="/signin">Sign in</NavLink>
              </div>
            </div>
          </nav>
    </div>   
  )
}

export default Navbar