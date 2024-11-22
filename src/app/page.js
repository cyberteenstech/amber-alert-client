import Banner from '@/components/home/Banner';
import Events from '@/components/home/Events';
import FAQ from '@/components/home/FAQ';
import Letter from '@/components/home/Letter';
import OrganizedBy from '@/components/home/OrganizedBy';
import Organizations from '@/components/home/Organizations';
import VideoSection from '@/components/home/VideoSection';
import React from 'react';
import Supporters from '@/components/home/Supporters';

const Home = () => {
  return (
    <div>
      <Banner />
      <VideoSection />
      <Letter />
      <Organizations />
      <Supporters/>
      <Events />
      <FAQ />
      <OrganizedBy/>
    </div>
  );
};

export default Home;