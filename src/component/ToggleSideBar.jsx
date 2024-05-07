import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from 'react-router-dom';

const ToggleSideBar = () => {
  return (
     <div className='absolute bg-white z-10 rounded-r-lg'>
     <div className='h-screen shadow-lg' style={{ transition: 'transform 0.3s', transform: 'translateX(0)' }}>
     <Link to={'/'}><div className=' cursor-pointer flex item-center py-2 px-3 mx-2 rounded-2xl gap-5 hover:bg-slate-600 w-52  ' style={{ transition: 'transform 0.3s' }}>
             <IoHomeOutline className='text-[1.5rem]' />
             <p className='font-semibold'>Home</p>
         </div></Link>
         <div className='flex item-center py-2 px-3 m-2 rounded-2xl gap-5 hover:bg-slate-600 w-52' style={{ transition: 'transform 0.3s' }}>
             <SiYoutubeshorts className='text-[1.5rem]' />
             <p className='font-semibold'>Shorts</p>
         </div>
         <div className='flex item-center py-2 px-3 m-2 rounded-2xl gap-5 hover:bg-slate-600 w-52' style={{ transition: 'transform 0.3s' }}>
             <SlSocialYoutube className='text-[1.5rem]' />
             <p className='font-semibold'>Subscription</p>
         </div>
         <div className='flex item-center py-2 px-3 m-2 rounded-2xl gap-5 hover:bg-slate-600 w-52' style={{ transition: 'transform 0.3s' }}>
             <FaRegUser className='text-[1.5rem]' />
             <p className='font-semibold'>You</p>
         </div>
     </div>
 </div>

 
 
  )
}

export default ToggleSideBar