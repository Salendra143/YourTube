import React from 'react';
import { Link } from 'react-router-dom';

const ResultPageVideo = ({ data }) => {
  console.log(data);
  const { snippet, id } = data;
  const { channelTitle, description, thumbnails, publishedAt, title } = snippet;
  const { videoId, channelId, playlistId } = id;

  return (
    <div className='flex flex-col sm:flex-row shadow-lg w-full'>
      <div className='w-full md:w-[50%] shadow-lg'>
        <Link to={videoId ? '/watch?v=' + videoId : (playlistId ? '/playlist?list=' + playlistId : '/channel/' + channelId)}>
          <img className='rounded-lg w-full h-auto md:w-[600px] md:h-[350px]' src={thumbnails.high.url} alt="" />
        </Link>
      </div>
      <div className='italic w-full md:w-[50%] flex flex-col gap-1 pl-4 '>
        <p className='text-[1.5rem]'>{title}</p>
        <p className='text-[1.2rem]'>{channelTitle}</p>
        <p>1000K Views <span>1 year ago</span></p>
        <p className='text-gray-500 text-[1.2rem]'>{description}</p>
      </div>
    </div>
  );
};

export default ResultPageVideo;
