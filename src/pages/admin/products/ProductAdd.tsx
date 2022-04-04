import React from 'react'
import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { CategoryType } from '../../../types/Category';

type ProductAdd = {
    onAdd : (products: ProducType) => void,
    categorys: CategoryType[]
}

type FormInput = {
    name: string,
    price: number,
    category: string
}

const ProductAdd = ({onAdd, categorys}: ProductAdd) => {

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
                <label >Name Product</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" {...register('name',{required:true})}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Price</label>
                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Price"{...register('price', {required:true})}/>
            </div>
            <div className="form-group">
                <label>Danh mục</label>
                <select>
                    {categorys?.map(item => {
                        return <option value="">{item.name}</option>
                    })}
                </select>
            </div>
            <button type="submit" className="btn btn-success">Add</button>
            <NavLink className="btn btn-primary" to="/admin/products">Back</NavLink>
        </form>
    </div>
  )
}

export default ProductAdd