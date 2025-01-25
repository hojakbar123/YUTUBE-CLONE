import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/sideBar";
import Loader from "../Components/loader";
import Videos from "../Components/Videos";




function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false); 
      try {
        const response = await axios.get(
          `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}&maxResults=50`,
          {
            headers: {
              "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
              "X-RapidAPI-Key": "6b119f4d14mshe9fed886bb280fap1245b2jsne5a3f269f11d", // API kalitini o'zgartiring
            },
          }
        );

        if (response.status === 200 && response.data.items) {
          setVideos(response.data.items);
          setLoading(false)
        } 
      
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="bg-black h-[90vh] text-white flex flex-col lg:flex-row gap-5">
      {/* Sidebar */}
      <div>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Content */}
      <div className="h-[90vh] overflow-y-scroll w-full px-4">
        <h1 className="text-4xl font-bold mb-3">
          {selectedCategory} <span className="text-cherry">videos</span>
        </h1>
        {loading ? (
          <Loader />
        ) : (
          <Videos videos={videos} />
        )}
      </div>
    </div>
  );
}

export default Feed;
