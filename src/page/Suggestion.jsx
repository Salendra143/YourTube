import React, { useEffect, useState } from 'react'
import { YouTube_VIDEO_API_KEY } from '../utils/constant'
import SuggestionVideo from './SuggestionVideo';
import { Link } from 'react-router-dom';
import LiveChat from './LiveChat';

const Suggestion = () => {

  const [Video, setVideo] = useState([]);

    const fetchAPI = async () => {
        const data = await fetch(YouTube_VIDEO_API_KEY);
        const json = await data.json();
        setVideo(json.items);
  }

  useEffect(()=>{
    fetchAPI();
  },[])
  if(Video.length === 0) return <div>Loading</div> 
  return (
    <>    

           <div className='  flex flex-wrap gap-4  pt-4 '>
               {
                  Video.map((item) =>  <Link to={"/watch?v=" + item.id} key={item.id}><SuggestionVideo  data={item}/></Link> )
                }
        </div>
        </>

  )
}

export default Suggestion