import { useState } from 'react'
import Home from './Components/Home/Home'
import About from './Components/About Us/About'
import Products from './Components/Products/Products'
import Reviews from './Components/Reviews/Reviews'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Products />
        <Reviews />
        <Contact />
        <p>Hi</p>
      </div>
     
    </>
  )
}

export default App
