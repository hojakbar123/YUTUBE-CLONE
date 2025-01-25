import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../Components/loader';
import Videos from '../Components/Videos';
import ChannelCard from '../Components/channel-card';
export default function ChannelDetail() {
  const [channelDetail, setCHannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    const fetchChannelDetail = async () => {
      try {
        const response = await $api.get(`/channels?part=snippet&id=${id}`);
        if (response.status === 200) {
          setCHannelDetail(response.data?.items[0]);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChannelDetail();

    const fetchData = async () => {
      try {
        const response = await $api.get(`/search?channelsId=${id}&part=snippet%2Cid&Border=date`
        );
        if (response.status === 200) {
          setVideos(response.data.items);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }

    };
    fetchData();
  }, [])

  if (loading) {
    return (
      <div className='flex bg-black justify-center items-center h-screen'>
        <loader />
      </div>
    )

  }
  return (
    <div class="min-h-[92vh] bg-black">
      <div>
        <div class="h-[300px] bg-custom-gradient z-10">
        <div class="relative -top-32">
          <ChannelCard channelDetail={channelDetail} />
        </div>
        </div>
      </div>
      <div class="p-4 flex mx-auto w-full relative -top-32 px-4 lg:px-[100px]">
        {loading ? <Loader /> : <Videos videos={videos} />}
      </div>
    </div>

  )
}

