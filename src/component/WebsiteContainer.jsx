import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const WebsiteContainer = () => {
  return (
    <div className='w-full'>
     <Navbar/> 
     <Outlet/>
      <Footer/>

        


    </div>
  )
}

export default WebsiteContainer