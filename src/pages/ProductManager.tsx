import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProducType } from '../types/product'

type ProductManager = {
    products : ProducType[],
    onRemove: (id: number) => void
}

const ProductManager = ({products, onRemove}: ProductManager) => {
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
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => onRemove(item.id)}>Remove</button>
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