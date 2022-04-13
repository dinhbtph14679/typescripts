import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ProducType } from '../../../types/product'

type ProductManager = {
    products : ProducType[],
    onRemove: (id: number) => void
}

const ProductManager = ({products, onRemove}: ProductManager) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="py-2 h3 mb-0 text-black-800">Quản lý sản phẩm</h1>
        </div>
        <NavLink className="nav-link text-center bg-success text-light mb-5" to="/admin/products/add">Add</NavLink>
        <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Mô tả</th>
                                            <th>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <button className='btn btn-dark' onClick={() => navigate(`/admin/products/${item._id}/edit`)}>Edit</button>
                                                    <a className='btn btn-danger' onClick={() => onRemove(item._id)}>Delete</a>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
    </div>
  )
}

export default ProductManager