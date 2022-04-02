import React from 'react'
import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

type ProductAdd = {
    onAdd : (products: ProducType) => void
}

type FormInput = {
    name: string,
    price: number
}

const ProductAdd = ({onAdd}: ProductAdd) => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormInput>()
    const navigate = useNavigate();

    const onSumit : SubmitHandler<FormInput> = data => {
        onAdd(data)
        navigate('/admin/products')
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSumit)}>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-success">Chỉnh sửa</button>
            <NavLink className="btn btn-" to="/admin/products">Trở lại</NavLink>
        </form>
    </div>
  )
}

export default ProductAdd