import React from 'react'
import { CategoryType } from '../../../types/Category'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

type Props = {
  onAddCT : (category: CategoryType) => void
}

type InputForm = {
    name: string
}

const CategoryAdd = ({onAddCT}: Props) => {
  const { register, formState: {errors}, handleSubmit } = useForm<InputForm>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<CategoryType> = data => {
    onAddCT(data)
    navigate('/admin/categorys');
  }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label >Tên danh mục</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Categoy Name" {...register('name',{required:true})}/>
        </div>
        <button type="submit" className="btn btn-success">Add</button>
        <NavLink className="btn btn-primary" to="/admin/categorys">Back</NavLink>
    </form>
</div>
  )
}

export default CategoryAdd