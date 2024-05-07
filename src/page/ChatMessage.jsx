import React from 'react'
import { VideoLogo } from '../utils/constant'
import { FaUserCircle } from 'react-icons/fa'


const ChatMessage = ({name,msg}) => {

  // const {snippet} = data;
  //   const {authorDisplayName,authorProfileImageUrl} = snippet.topLevelComment.snippet;

  // const {name,message,thumbnail} = data;


  return (
    <div>
        <div className='flex items-center px-2 pt-1 ' >
        <FaUserCircle className="text-[2rem]" />
            <div className=' text-sm  ml-2 italic'>
                <p className='font-semibold'>{name}</p>
                <p>{msg}</p>
            </div>            

         </div>
    </div>

  )
}

export default ChatMessage