import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {signin} from '../api/auth'
import { authenticated } from '../utils/localstorage'


type InputForm = {
    name: string,
    email: string,
    password: string
}

const Signin = () => {
    const { handleSubmit, formState: {errors}, register } = useForm<InputForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm> = async data => {
        const {data: user} = await signin(data);
        console.log(user);
        
        authenticated(user, () => {
            navigate('/')
        })
        // navigate('/admin/products')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email', {required:true})} />
            <input type="text" {...register('password', {required:true})} />
            <button>Dang nhap</button>
        </form>
    </div>
  )
}

export default Signin