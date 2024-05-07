import React, { useEffect, useState } from 'react';
import { YouTube_VIDEO_API_KEY } from '../utils/constant';
import Card from './Card';

const Cards = () => {
    
  const [data,setData] = useState([])

  const fetchApi = async () =>{
      const data = await fetch(YouTube_VIDEO_API_KEY)
      const json = await data.json();
      setData(json.items)
      

}

  useEffect(() => {
    fetchApi();
  }, []);

  if(data.length === 0) return <div>Loading</div> 
  return(

            <div className=' mx-10  w-full flex flex-wrap sm:mx-auto gap-3'>
                {
                  data.map((item) =>  <Card key={item.id} data={item}/> )
                }
                
            </div>


)
};

export default Cards;
