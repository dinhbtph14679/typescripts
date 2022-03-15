import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import ProductPage from './pages/productpage'
import AboutPage from './pages/aboutpage'

function App() {

  

  return (
    <div className="container">
        <header>
            <ul>
                <li><NavLink to='/'>Home Page</NavLink></li>
                <li><NavLink to='/product'>Product Page</NavLink></li>
                <li><NavLink to='/about'>About Page</NavLink></li>
            </ul>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/product' element={<ProductPage />}></Route>
                <Route path='/about' element={<AboutPage />}></Route>
            </Routes>
        </main>
    </div>
  )
    
  
}
export default App
