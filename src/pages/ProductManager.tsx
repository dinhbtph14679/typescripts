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
        <NavLink className="nav-link active" to="/admin/products/add">Add</NavLink>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>NAME</th>
                    <th>Price</th>
                    <th>Function</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((item, index) => {
                    return <tr key={index}>
                        <td>{index +1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => onRemove(item.id)}>Remove</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductManager