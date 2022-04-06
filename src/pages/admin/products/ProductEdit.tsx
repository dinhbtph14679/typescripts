import React, { useEffect  } from 'react'
import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate , useParams} from 'react-router-dom'
import { read } from '../../../api/product'

type ProductEdit = {
  onUpdate : (products: ProducType) => void
}

type InputForm = {
  name: string,
  price: number
}

const ProductEdit = ({onUpdate}: ProductEdit) => {
  const { register, handleSubmit, formState: {errors},  reset} = useForm<ProducType>()
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    const getProduct =  async () =>{
      const { data } = await read(id);
      reset(data)
    }
    getProduct();
  },[])

  const onSumit:SubmitHandler<InputForm> = data => {
    onUpdate(data);
    navigate('/admin/categorys')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSumit)}>
          <input type="text" {...register('name', {required:true})} />
          {errors.name && <span>K duoc de trong</span>}
          <button>Update</button>
      </form>
    </div>
  )
}

export default ProductEdit