import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  const {snippet, id , statistics} = data;
  const {channelTitle,title,thumbnails,} = snippet;
  const {likeCount,viewCount}= statistics;    



return (

 <div className=' sm:pl-3 w-48  sm:w-[32%]  '>
  <Link to={'/watch?v='+ id}> <img className=' w-96 rounded-lg' src={thumbnails.medium.url} alt="" /></Link> 
  <p className=' text-xs sm:text-sm italic font-semibold ' >{title}</p>
  <p className='text-xs italic'>{channelTitle}</p>
  <div className='italic text-sm'><span>{Math.round( viewCount/1000).toFixed()+'k'} Views </span></div>

</div>
)
}

export default Card

