import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constant';
import { Link } from 'react-router-dom';

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <div className="w-full sm:w-[358px] md:w-[320px] shadow-none rounded-none">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          className="h-[180px] w-full sm:w-[358px] object-cover"
        />
      </Link>
      <div className="bg-[#1E1E1E] h-[106px] px-3">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div className="line-clamp-2 mb-4 text-white">
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </div>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <div className="flex text-gray-200 items-center gap-4">
            {snippet?.channelTitle || demoChannelTitle}
            <CiCircleCheck className="text-sm text-gray-50 dark:text-gray-500 ml-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}
