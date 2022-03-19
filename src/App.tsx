import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import WebsiteLayouts from './pages/layouts/WebsiteLayouts'
import HomePage from './pages/homepage'
import ProductDetailt from './pages/ProductDetailt'
import AdminLayouts from './pages/layouts/AdminLayouts'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => { // 3 c
    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products/');
        const data = await response.json();
        setProducts(data);
    }   
    getProducts();
}, []);
  return (
    <div className="container">
      {products.map(item => <div>{item.name}</div>)}
        <Routes>
          <Route path="/" element={<WebsiteLayouts />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<h1>Product Page</h1>}/>
              <Route path="/products/:id" element={<ProductDetailt />} />
              <Route path='*' element={<h1>NOT FOUND</h1>} />
          </Route>
          <Route path="admin" element={<AdminLayouts />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
          </Route>
        </Routes>
    </div>
  )
}
export default App