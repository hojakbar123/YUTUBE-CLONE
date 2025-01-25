import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  console.log(videos);
  return (
    <div className="flex justify-start gap-4 mx-auto flex-wrap">
      {videos.length > 0 &&
        videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
    </div>
  );
}
