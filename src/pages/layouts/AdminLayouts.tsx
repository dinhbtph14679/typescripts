import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const AdminLayouts = (props: Props) => {
  return (
    <div>
      <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="#">
                        <div className="sidebar-brand-icon">
                        </div>
                        <i className="fa-solid fa-user-tie fs-1"></i>
                        <div className="sidebar-brand-text mx-3">Hi Admin</div>
                    </NavLink>



                    <div className="sidebar-heading">
                    Chức Năng
                    </div>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/dashboard">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Thống Kê</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/categorys">
                            <i className="fa-solid fa-align-justify"></i>
                            <span>Quản lý danh mục</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/products">
                            <i className="fa-solid fa-shirt"></i>
                            <span>Quản lý sản phẩm</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/page">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Quản lý bài viết</span></NavLink>
                    </li>


                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/order">
                        <i className="fa-solid fa-cart-shopping"></i>
                            <span>Đơn hàng</span></NavLink>
                    </li>


                </ul>
                <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                </a>
                            </li>

                        </ul>

                    </nav>
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
                  <footer className="sticky-footer bg-white">
                      <div className="container my-auto">
                          <div className="copyright text-center my-auto">
                              <span>Copyright &copy; Your Website 2021</span>
                          </div>
                      </div>
                  </footer>
                </div>
        </div>
    </div>
  )
}

export default AdminLayouts