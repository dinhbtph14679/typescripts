import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {signin, signup} from '../api/auth'


type InputForm = {
    name: string,
    email: string,
    password: string | number
}

const Signup = () => {
    const { handleSubmit, formState: {errors}, register } = useForm<InputForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm> = async data => {
        signup(data);
        // navigate('/admin/products')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required:true})} />
            <input type="email" {...register('email', {required:true})} />
            <input type="number" {...register('password', {required:true})} />
            <button>Dang ky</button>
        </form>
    </div>
  )
}

export default Signup