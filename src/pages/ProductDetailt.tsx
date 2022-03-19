import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        const response = await fetch('http:/localhost:8000/api/products/' + id);
        const data = await response.json();
        setProduct(data);
    }
    getProductDetail();
  }, []);
  return (
    <div>{product?.name}</div>
  )
}

export default ProductDetailt