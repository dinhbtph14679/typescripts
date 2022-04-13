import React, { useEffect  } from 'react'
import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, NavLink, useNavigate , useParams} from 'react-router-dom'
import { read } from '../../../api/product'

type ProductEdit = {
  onUpdate : (products: ProducType) => void
}

type InputForm = {
  name: string,
  price: number,
  description: string,
  categoryName: string
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

  const onSumit :SubmitHandler<InputForm> = data => {
    onUpdate(data);
    navigate('/admin/products');
  }

  return (
    <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="py-2 h3 mb-0 text-black-800">Sửa danh mục</h1>
        </div>
        <form onSubmit={handleSubmit(onSumit)}>
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input className='form-control' type="text" {...register('name', {required:true})} />
              {errors.name && <span className='text-danger'>Bạn chưa điền tên sản phẩm</span>}
            </div>
            <div className="form-group">
              <label>Gía sản phẩm</label>
                <input className="form-control" type="number" {...register('price', {required:true})} />
                {errors.price && <span className='text-danger'>Bạn chưa sửa giá sản phẩm</span>}
            </div>
            <div className="form-group">
              <label>Mô tả sản phẩm</label>
                <input className="form-control" type="text" {...register('description', {required:true})} />
                {errors.description && <span className='text-danger'>Mô tả không được để trống</span>}
            </div>
            <NavLink className='btn btn-dark' to="/admin/products">Trở lại</NavLink>
            <button type="submit" className="btn btn-primary">Cập nhật</button>
        </form>
    </div>
  )
}

export default ProductEdit