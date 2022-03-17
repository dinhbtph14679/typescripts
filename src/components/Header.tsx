import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Navbar />
                    <Search />
                </div>
            </div>
    </nav>

  )
}

export default Header;