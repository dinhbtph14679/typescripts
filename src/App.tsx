import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import WebsiteLayouts from './pages/layouts/WebsiteLayouts'
import HomePage from './pages/homepage'
import ProductDetailt from './pages/ProductDetailt'
import AdminLayouts from './pages/layouts/AdminLayouts'
import { ProducType } from './types/product'
import { add, list, remove } from './api/product'
import ProductManager from './pages/ProductManager'
import ProductAdd from './pages/layouts/ProductAdd'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PrivateRouter from './components/PrivateRouter'

function App() {

  const [products, setProducts] = useState<ProducType[]>([]);

  useEffect(() =>{

    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts()

  })

  const removeItem = (id: number) => {
    remove(id);
    setProducts( products.filter(item => item.id !== id));
  }

  const onHandlerAdd = (data: ProducType) => {
    add(data)
    setProducts([...products, data])
  }



  return (
    <div>
        <Routes>
            <Route path="/" element={<WebsiteLayouts />}>
                  <Route index element={<HomePage />} />
                  <Route path='products'>
                      <Route index element={<h1>Products Page</h1>} />
                      <Route path=':id' element={<ProductDetailt />} />
                  </Route>             
                  <Route path='*' element={<h1>NOT FOUND</h1>} />
            </Route>
            <Route path="admin" element={<PrivateRouter chlidren={undefined}><AdminLayouts /></PrivateRouter>}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<h1>Dashboard page</h1>} />
                  <Route path="products" element={<ProductManager products={products} onRemove={removeItem} />} />
                  <Route path="/admin/products/add" element={<ProductAdd  onAdd={onHandlerAdd} />}/>
            </Route>
            <Route path='signin' element={<Signin />}/>
            <Route path='signup' element={<Signup />}/>
        </Routes>
    </div>
  )
}
export default App