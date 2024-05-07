import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const SideBarButton = () => {

     const cart = useSelector((store) => store.app.showSideBar)
     console.log(cart);


    
     

  return (
    <div>
          

          {
               cart ? (<div className='  h-screen md:pr-6 pr-1  '>
               <div className='flex md:px-1 flex-col items-center pt-3  '>
                    <Link to={'/'}><IoHomeOutline className=' text-lg md:text-[1.5rem]' /></Link>
                    <p className=' text-xs' >Home</p>
               </div>
               <div className='flex md:px-1 flex-col items-center pt-3 ' >
                   <SiYoutubeshorts className='text-lg md:text-[1.5rem]' />
                    <p className=' text-xs' >Shorts</p>
               </div>
               <div className='flex md:px-1 flex-col items-center pt-3 '>
                    <SlSocialYoutube className='text-lg md:text-[1.5rem]' />
                    <p className=' text-xs '>Subscription</p>
               </div>
               <div className='flex md:px-1 flex-col items-center pt-3 '>
                   <FaRegUser className='text-lg md:text-[1.5rem]' />
                    <p className=' text-xs'>You</p>
               </div>
          </div>) :

               (
                    <div className='  h-screen  shadow-lg  '>
                         <Link to={'/'}><div className='cursor-pointer flex item-center py-2 px-3 mx-2 rounded-2xl gap-5 hover:bg-slate-600 w-48 '>
                              <IoHomeOutline className='text-[1.5rem]' />
                              <p className=' font-semibold ' >Home</p>
                         </div></Link>
                         <div className='flex item-center py-2 px-3 m-2 rounded-2xl gap-5 hover:bg-slate-600 w-48 ' >
                             <SiYoutubeshorts className='text-[1.5rem]' />
                              <p className=' font-semibold' >Shorts</p>
                         </div>
                         <div className='flex item-center py-2 px-3 m-2 rounded-2xl gap-5 hover:bg-slate-600 w-48 '>
                              <SlSocialYoutube className='text-[1.5rem]' />
                              <p className=' font-semibold'>Subscription</p>
                         </div>
                         <div className='flex item-center py-2 px-3 m-2 rounded-2xl gap-5 hover:bg-slate-600 w-48 '>
                             <FaRegUser className='text-[1.5rem]' />
                              <p className=' font-semibold'>You</p>
                         </div>
                    </div>)
          }
        


</div>
  )
}

export default SideBarButton