import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// css
import './App.css'
// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
// components
import Navbar from './components/Navbar/Navbar'
// React


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
