import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { CategoryType } from '../../../types/Category';
import Select from 'react-select'

type ProductAdd = {
    onAdd : (products: ProducType) => void,
    products: ProducType[],
    onList: (products: ProducType) => void
}

type FormInput = {
    name: string,
    price: number,
    description: string,
    category: string
}

const ProductAdd = ({onAdd, products,onList}: ProductAdd) => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormInput>()
    const navigate = useNavigate();

    const onSumit : SubmitHandler<FormInput> = data => {
        onAdd(data)
        navigate('/admin/products')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSumit)}>
            <div className="form-group">
                <label>Tên sản phẩm</label>
                <input type="text" className="form-control" placeholder="Tên sản phẩm" {...register('name',{required:true})}/>
            </div>
            <div className="form-group">
                <label>Giá</label>
                <input type="number" className="form-control" placeholder="Giá sản phẩm"{...register('price', {required:true})}/>
            </div>
            <div className="form-group">
                <label>Mô tả sản phẩm</label>
                <input type="text" className="form-control" placeholder="Mô tả sản phẩm"{...register('description', {required:true})}/>
            </div>
            <button type="submit" className="btn btn-success">Add</button>
            <NavLink className="btn btn-warning" to="/admin/products">Back</NavLink>
        </form>
    </div>
  )
}

export default ProductAdd