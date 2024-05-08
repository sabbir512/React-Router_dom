import React from 'react'
import Navbar from './header/Navbar'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root