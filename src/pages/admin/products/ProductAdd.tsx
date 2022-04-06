import { ProducType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

type ProductAdd = {
    onAdd : (products: ProducType) => void,
    product: ProducType[]
}

type FormInput = {
    name: string,
    price: number,
    categoryid: string
}

const ProductAdd = ({onAdd, product}: ProductAdd) => {

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
                <label >Name Product</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" {...register('name',{required:true})}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Price</label>
                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Price"{...register('price', {required:true})}/>
            </div>
            <div className="form-group">
                <label>Danh mục</label>
                <select>
                    {product?.map(item => {
                        return <option value="">{item.categoryid.name}</option>
                    })}
                </select>
            </div>
            <button type="submit" className="btn btn-success">Add</button>
            <NavLink className="btn btn-warning" to="/admin/products">Back</NavLink>
        </form>
    </div>
  )
}

export default ProductAdd