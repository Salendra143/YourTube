import React from 'react'
import { Link, Navigate } from 'react-router-dom';

const SuggestionVideo = ({data}) => {
  const {snippet, id , statistics} = data;
  const {channelTitle,title,thumbnails,} = snippet;
  const {likeCount,viewCount}= statistics;    




return (
<div className='  flex px-4 '>   
   
  <img className=' w-48   rounded-lg' src={thumbnails.high.url} alt="" />
 <div className=' '> 
     <p className='text-sm italic'>{title}</p>
     <p className='text-xs italic'>{channelTitle}</p>
     <p><span>{Math.round( viewCount/1000).toFixed()+'k'} Views </span></p>
     </div>

</div>


)
}

export default SuggestionVideo

