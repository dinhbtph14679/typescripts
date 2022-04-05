import React, { useEffect  } from 'react'
import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate , useParams} from 'react-router-dom'
import { readCT } from '../../../api/category'
import { CategoryType } from '../../../types/Category'

type ProductEdit = {
  onUpdate : (products: ProducType) => void
}

type InputForm = {
  name: string,
}

const CategoryEdit = ({onUpdate}: ProductEdit) => {
  const { register, handleSubmit, formState: {errors},  reset} = useForm<CategoryType>()
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    const getProduct =  async () =>{
      const { data } = await readCT(id);
      reset(data)
    }
    getProduct();
  },[])

  const onSumit:SubmitHandler<InputForm> = data => {
    onUpdate(data);
    navigate('/admin/products')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSumit)}>
          <input type="text" {...register('name', {required:true})} />
          {errors.name && <span>K duoc de trong</span>}
          <input type="number" {...register('price')} />
          <button>Update</button>
      </form>
    </div>
  )
}

export default CategoryEdit