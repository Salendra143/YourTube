import React, { useEffect, useState } from 'react'
import { CHANNEL_INFO } from '../utils/constant';


const ChannelData = ({id}) => {

    const [videoData, setVideoData] = useState([]);
    const fetchApi = async () => {
        const data = await fetch(CHANNEL_INFO + id);
        const json = await data.json();
        setVideoData(json);
      };
    
      useEffect(() => {
        fetchApi();
      }, []);
    

      if(videoData.length === 0) return <div>loading</div>
  return (
    <div className=' flex flex-col sm:flex-row italic pt-2  '>
        <div className='flex '>
        <img className='w-12 rounded-full' src={videoData.items[0].snippet.thumbnails.default.url} alt="" />
        <div className='flex ml-2  flex-col'>
        <p className='font-semibold'>{videoData.items[0].snippet.title}</p>
        <p className='text-gray-900 font-semibold'>{videoData.items[0].statistics.subscriberCount} <span>Subscribe</span></p>
        
        </div>
        </div>

        
            <div className='flex italic gap-4 pl-5 items-center '>
            <button className=' font-semibold italic bg-slate-300 hover:bg-slate-200 active:bg-slate-500 px-3 h-10 -py-2  rounded-2xl'>Subscribe</button>
                <button className=' font-semibold italic bg-slate-300 hover:bg-slate-200 active:bg-slate-500 px-2 h-10 -py-2  rounded-2xl'>👍Like </button>
                <button className=' font-semibold italic bg-slate-300 hover:bg-slate-200 active:bg-slate-500 px-3 h-10 -py-2  rounded-2xl'>Share</button>
                <button className=' font-semibold italic bg-slate-300 hover:bg-slate-200 active:bg-slate-500 px-3 h-10 -py-2  rounded-2xl'>Download</button>
                <button className=' font-semibold italic bg-slate-300 hover:bg-slate-200 active:bg-slate-500 px-3 h-10 -py-2  rounded-2xl'>....</button>

            </div>


</div>
  )
}

export default ChannelData