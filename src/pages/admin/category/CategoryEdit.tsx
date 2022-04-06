import React, { useEffect  } from 'react'
import { ProducType } from '../../../types/product'
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
      reset(data)
    }
    getCategory();
  },[])

  const onSumit:SubmitHandler<InputForm> = data  => {
     props.onUpdateCT(data);
    navigate('/admin/categorys')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSumit)}>
          <input type="text" {...register('name', {required:true})} />
          {errors.name && <span>K duoc de trong</span>}
          <NavLink className='btn btn-dark' to="/admin/categorys">Back</NavLink>
          <button className='btn btn-success'>Update</button>
      </form>
    </div>
  )
}

export default CategoryEdit