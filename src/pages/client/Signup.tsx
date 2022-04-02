import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { signup} from '../../api/auth'


type InputForm = {
    name: string,
    email: string,
    password: string 
}

const Signup = () => {
    const { handleSubmit, formState: {errors}, register } = useForm<InputForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm> = data => {
        signup(data);
        navigate('/')
    }
  return (
 <div className="container">

 <div className="card o-hidden border-0 shadow-lg my-5">
     <div className="card-body p-0">
         <div className="row">
             <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
             <div className="col-lg-7">
                 <div className="p-5">
                     <div className="text-center">
                         <h1 className="h4 text-gray-900 mb-4">Tạo tài khoản</h1>
                     </div>
                     <form className="user" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                             <input type="text" className="form-control form-control-user" id="exampleInputEmail"
                                 placeholder="Nhập tên của bạn...." {...register('name', {required:true})}/>
                         </div>
                         <div className="form-group">
                             <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                 placeholder="Email Address"{...register('email', {required:true})}/>
                         </div>
                         <div className="form-group row">
                             <div className="col-sm-6 mb-3 mb-sm-0">
                                 <input type="password" className="form-control form-control-user"
                                     id="exampleInputPassword" placeholder="Password" {...register('password', {required:true})}/>
                             </div>
                             <div className="col-sm-6">
                                 <input type="password" className="form-control form-control-user"
                                     id="exampleRepeatPassword" placeholder="Repeat Password"/>
                             </div>
                         </div>
                         <button className='btn btn-primary w-100 py-2'>
                             Đăng ký
                         </button>
                     </form>
                     <div className="text-center">
                         <NavLink className="small" to="/signin">Already have an account? Login!</NavLink>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>

</div>

  )
}

export default Signup