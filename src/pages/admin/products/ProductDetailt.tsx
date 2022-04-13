import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { read } from '../../../api/product'

type Props = {}
type ProductType = {
  _id: number,
  name: string,
  price: number
}

const ProductDetailt = (props: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    const getProductDetail = async () => {
        const { data } = await read(id)
        setProduct(data);
    }
    getProductDetail();
  }, []);
  console.log(product);
  
  return (
    <main className="mt-5 pt-4">
    <div className="container dark-grey-text mt-5">
      <div className="row wow fadeIn">
        <div className="col-md-6 mb-4">
          <img src="../../../public/image/bg_1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 mb-4">
          <div className="p-4">
          <p className="lead">
              <span className='font-weight-bold'>Name:</span>
              <span> {product?.name}</span>
            </p>
            <p className="lead">
              <span className='font-weight-bold'>Giá:</span>
              <span> {product?.price}</span>
            </p>
            <p className="lead font-weight-bold">Description</p>
            <p>{product?.description}</p>
            <form className="d-flex justify-content-left">
              <input type="number" defaultValue={1} aria-label="Search" className="form-control" style={{width: '100px'}} />
              <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i className="fas fa-shopping-cart ml-1" />
              </button>
            </form>
          </div>
          {/*Content*/}
        </div>
        {/*Grid column*/}
      </div>
    </div>
  </main>
  
  )
}

export default ProductDetailt