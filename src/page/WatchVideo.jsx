import React, { useEffect, useState } from 'react';
import { VIDEO_CARD_DATA } from '../utils/constant';
import { useSearchParams } from 'react-router-dom';
import ChannelData from './ChannelData';
import CommentData from './CommentData';

const WatchVideo = () => {
  const [videoData, setVideoData] = useState({});
  const { channelTitle, channelId, title } = videoData.snippet || {};

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const fetchApi = async () => {
    const data = await fetch(VIDEO_CARD_DATA + videoId);
    const json = await data.json();
    setVideoData(json.items[0] || {});
  };

  useEffect(() => {
    fetchApi();
  }, [videoId]);

  if (!videoId) return <div>No video ID provided</div>;
  if (!videoData.snippet) return <div>Loading</div>;

  return (
    <div className='px-1  xl:px-20 pt-3 xl:w-[800px]  lg:w-[650px]  mx-2 lg:mx-1'>
      <div className="w-full">
        <div className="flex justify-center flex-1 overflow-hidden">
          <iframe
            className="rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen="allowfullscreen"
            style={{ width: '100%', aspectRatio: '16/9' }}
          ></iframe>
        </div>
      </div>
      <div className='max-w-[650px] italic'>
        {title && <p className='font-semibold'>{title}</p>}
        {channelTitle && <p className='font-semibold text-gray-600'>{channelTitle}</p>}
      </div>
      <ChannelData id={channelId} />
      <CommentData id={videoId} />
    </div>
  );
};

export default WatchVideo;
