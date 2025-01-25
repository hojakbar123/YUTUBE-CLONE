import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaEye, FaHeart } from "react-icons/fa";

function Videos() {
  return <div className="text-white">Related videos will appear here.</div>;
}

export default function VideoDetail() {
  const { id } = useParams();

  if (!id) {
    return <div className="text-white">Video ID not found!</div>;
  }

  return (
    <div className="flex flex-col xl:flex-row gap-4 max-h-[90vh] overflow-y-scroll bg-black px-4 lg:px-12 py-4">
   
      <div className="flex-1 bg-black">
        <div className="lg:w-[1100px] md:w-[650px] sm:w-[450px] w-full lg:h-[550px] md:h-[400px] sm:h-[350px] h-[280px]">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        <div className="p-4 bg-black">
          <h2 className="text-lg md:text-xl text-white">Lorem ipsum dolor sit.</h2>
          <div className="flex justify-between items-center flex-wrap mt-2">
            <h2 className="text-lg text-gray-400 flex items-center gap-2">
              Lorem ipsum dolor sit amet. <FaCheckCircle className="text-green-600" />
            </h2>
            <div className="flex gap-6">
              <h3 className="flex items-center gap-1 text-red-500 font-bold text-xl">
                <FaHeart /> 45
              </h3>
              <h3 className="flex items-center gap-1 text-blue-500 font-bold text-xl">
                <FaEye /> 1234
              </h3>
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full lg:w-[300px] bg-black h-auto lg:overflow-y-auto">
        <Videos />
      </div>
    </div>
  );
}
