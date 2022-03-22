import React from 'react'
import { ProducType } from '../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProductAdd = {
    onAdd : (products: ProducType) => void
}

type FormInput = {
    name: string,
    price: number
}

const ProductAdd = ({onAdd}: ProductAdd) => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormInput>()
    const naviget = useNavigate();

    const onSumit : SubmitHandler<FormInput> = data => {
        onAdd(data)
        naviget('/admin/products')
    }

  return (
    <div>
        <form onSubmit={handleSubmit<FormInput>(onSumit)}>
            <input type="text" placeholder='name' {...register('name' , {required:true})} />
            <input type="number" placeholder='number' {...register('price' , {required:true})}/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd