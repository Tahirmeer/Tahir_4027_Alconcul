import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Signup from './components/Signup'
import Login from './components/Login'

const App=()=> {
  return(
  <>
  <Navbar/>
  <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>
    <Route path='/ContactUs' element='ContactUs'/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
     </>
  )
}
export default App