import Banner from '@/components/home/Banner';
import Events from '@/components/home/Events';
import FAQ from '@/components/home/FAQ';
import Letter from '@/components/home/Letter';
// import OrganizedBy from '@/components/home/OrganizedBy';
import Organizations from '@/components/home/Organizations';
import VideoSection from '@/components/home/VideoSection';
import React from 'react';
import Supporters from '@/components/home/Supporters';
import LatestVoters from '@/components/home/LatestVoters';
import News from '@/components/home/News';
// import OrganizedBy from '@/components/home/OrganizedBy';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="md:hidden block">
        <LatestVoters/>
      </div>
      <News/>
      <VideoSection />
      <Letter />
      <Organizations />
      <Events />
      <FAQ />
      <Supporters/>
      {/* <OrganizedBy/> */}
    </div>
  );
};

export default Home;