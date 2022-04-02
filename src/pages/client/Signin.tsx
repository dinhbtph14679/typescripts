import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signin } from '../../api/auth'
import { authenticated } from '../../utils/localstorage'


type InputForm = {
    name: string,
    email: string,
    password: string
}

const Signin = () => {
    const { handleSubmit, formState: {errors}, register } = useForm<InputForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm> = async data => {
        const {data : response} = await signin(data);
        
        // console.log(response);
        
        authenticated(response.user, () => {    
        navigate('/admin/dashboard')
        })
        navigate('/')
    }
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Xin chào</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." {...register('email', {required:true})}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"{...register('password', {required:true})}/>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button className='btn btn-primary w-100'>
                                            Đăng nhập
                                        </button>
                                    </form>
                                    <div className="text-center">
                                        <NavLink className="small" to="/signup">Create an Account!</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Signin