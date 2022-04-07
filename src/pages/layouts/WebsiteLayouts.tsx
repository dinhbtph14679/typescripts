import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayouts = (props: Props) => {
  return (
    <div>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <NavLink to="/"><img src="../../public/image/done.png"/></NavLink>   
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className=""><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/products">Product</NavLink></li>
                                <li><NavLink to="/blogs">Blog</NavLink></li>
                                <li><NavLink to="/contacts">Contact</NavLink></li>
                                <li><NavLink to="/abouts">About</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><NavLink to="/signin"><i className="fa-solid fa-user"></i></NavLink></li>
                                <li><NavLink to="/carts"><i className="fa fa-shopping-bag"></i> <span>3</span></NavLink></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className="footer-07 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">
                <h2 className="footer-heading"><NavLink to="/" className="logo text-dark">Bùi Tiến Đình</NavLink></h2>
                <p className="menu pt-2">
                  <NavLink className="text-dark" to="/">Home</NavLink>
                  <NavLink className="text-dark" to="/products">Products</NavLink>
                  <NavLink className="text-dark" to="/blogs">Blog</NavLink>
                  <NavLink className="text-dark" to="/contacts">Contact</NavLink>
                  <NavLink className="text-dark" to="/abouts">About</NavLink>
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default WebsiteLayouts