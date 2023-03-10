import React from 'react'
import { Outlet } from 'react-router-dom'
import "./components/Home.css"
import Header from './components/Header'




const Mainheader = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

export default Mainheader


