import React, { useEffect  } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate , useParams} from 'react-router-dom'
import { readCT } from '../../../api/category'
import { CategoryType } from '../../../types/Category'

type CategoryEdit = {
  onUpdateCT: (category: CategoryType) => void
}

type InputForm = {
  name: string,
}

const CategoryEdit = (props : CategoryEdit) => {
  const { register, handleSubmit, formState: {errors},  reset} = useForm<InputForm>()
  const navigate = useNavigate();
  const { id } = useParams();
  

  useEffect(()=>{
    const getCategory =  async () =>{
      const { data } = await readCT(id); 
      reset(data.category)
      // console.log(reset(data));
      
    }
    getCategory();
  },[])

  
  const onSumit:SubmitHandler<InputForm> = data  => {
     props.onUpdateCT(data);
     console.log(data);
    navigate('/admin/categorys')
  }

  return (
    <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="py-2 h3 mb-0 text-black-800">Sửa danh mục</h1>
        </div>
        <form onSubmit={handleSubmit(onSumit)}>
            <div className="form-group">
              <label>Tên danh mục</label>
              <input className='form-control' type="text" {...register('name', {required:true})} />
             {errors.name && <span className='text-danger'>Bạn chưa điền tên danh mục</span>}
            </div>
            <NavLink className='btn btn-dark' to="/admin/categorys">Trở lại</NavLink>
            <button type="submit" className="btn btn-primary">Cập nhật</button>
        </form>
    </div>
  )
}

export default CategoryEdit