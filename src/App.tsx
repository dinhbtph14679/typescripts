import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import WebsiteLayouts from './pages/layouts/WebsiteLayouts'
import HomePage from './pages/homepage'
import ProductDetailt from './pages/ProductDetailt'
import AdminLayouts from './pages/layouts/AdminLayouts'
import { ProducType } from './types/product'
import { list, remove } from './api/product'
import ProductManager from './pages/ProductManager'

function App() {

  const [products, setProducts] = useState<ProducType[]>([]);

  useEffect(() => { // 3 c
    const getProducts = async () =>{
        const { data } = await list();
        setProducts(data);
    }

    getProducts();
}, []);

  const removeItem = (id: number) => {
      remove(id);
      setProducts(products.filter(item => item.id !== id ));
  }

  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<WebsiteLayouts />}>
                  <Route index element={<HomePage />} />
                  <Route path='products'>
                      <Route index element={<h1>Products Page</h1>} />
                      <Route path=':id' element={<ProductDetailt />} />
                  </Route>             
                  <Route path='*' element={<h1>NOT FOUND</h1>} />
            </Route>
            <Route path="admin" element={<AdminLayouts />}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<h1>Dashboard page</h1>} />
                  <Route path="products" element={<ProductManager products={products} onRemove={removeItem}/>} />
            </Route>
        </Routes>
    </div>
  )
}
export default App