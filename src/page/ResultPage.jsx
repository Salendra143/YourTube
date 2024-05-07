import React, { useState } from 'react'

import { useEffect } from 'react'
import { searchAPI } from '../utils/constant';
import ResultPageVideo from './ResultPageVideo';
import { useSelector } from 'react-redux';

const ResultPage = () => {

    const query = useSelector(state => state.cart.query) 
    console.log(query);
        const [videos,setvideos] = useState([])

        const fatchApi = async () => {
        const data = await fetch(searchAPI + query)       
        const json = await data.json();
        console.log(json);
        setvideos(json.items)
    }   

    useEffect(()=>{
        fatchApi();
    },[query])


  return (
   
    <>
       
        
         <div className=' md:mx-20  m-5'>
             <div className='flex flex-wrap gap-5  '>
                 {videos.map((video,index) => (
                     <ResultPageVideo key={index} data={video} />
                 ))}
             </div>
         </div>
         </>   
  )
}

export default ResultPage