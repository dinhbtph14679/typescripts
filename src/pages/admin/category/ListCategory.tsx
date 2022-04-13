
import React from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { CategoryType } from '../../../types/Category'

type ListCategory = {
    category: CategoryType[],
    ondelete: (id: number) => void
}

const ListCategory = ({category, ondelete}: ListCategory) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="py-2 h3 mb-0 text-black-800">Quản lý danh mục</h1>
        </div>
        <NavLink className="nav-link text-center bg-success text-light mb-5" to="/admin/categorys/add">Thêm</NavLink>
        <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên danh mục</th>
                                            <th colSpan={2}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {category?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index +1}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={() => {navigate(`/admin/categorys/${item._id}/edit`)}}>Sửa</button>
                                                    <button className='btn btn-danger' onClick={() => ondelete(id)}>Xóa</button>
                                                </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
    </div>
  )
}

export default ListCategory
