import Banner from '@/components/home/Banner';
import Events from '@/components/home/Events';
import Letter from '@/components/home/Letter';
import VideoSection from '@/components/home/VideoSection';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <VideoSection />
      <Letter />
      <Events/>
    </div>
  );
};

export default Home;