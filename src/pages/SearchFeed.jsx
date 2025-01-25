import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Videos from '../Components/Videos';
import { $api } from '../utils';
import Loader from '../Components/loader';
export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchTerm } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $api.get(
         ` /search?part=snippet&q=${searchTerm}&maxResults=50`
        );
        if (response.status === 200) {
          setVideos(response.data.items);
          setLoading(false);
        }
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, [searchTerm]);
  if (loading) {
    return (
      <div className='flex bg-black justify-center items-center h-screen'>
<Loader/>
      </div>
    )
  }
  return (
    <div className='min-h-[92vh] bg-black'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-white text-5xl font-bold'>Search results <span className='text-cherry'> 
          {searchTerm}</span> videos</h1>
      </div>
      <div className='p-4 flex mx-auto px-4 lg:px-[100px]'>
        <Videos videos={videos} />
      </div>
    </div>
  )
}