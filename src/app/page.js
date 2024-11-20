import Banner from '@/components/home/Banner';
import Events from '@/components/home/Events';
import FAQ from '@/components/home/FAQ';
import Letter from '@/components/home/Letter';
import Organizations from '@/components/home/Organizations';
import VideoSection from '@/components/home/VideoSection';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <VideoSection />
      <Letter />
      <Organizations/>
      <Events />
      <FAQ />
    </div>
  );
};

export default Home;