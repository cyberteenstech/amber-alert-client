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
import Connect from '@/components/home/Connect';
import Comments from '@/components/home/Comments';
import AlertBanner from '@/components/shared/AlertModal';
// import OrganizedBy from '@/components/home/OrganizedBy';
import Navbar from "@/components/shared/Navbar";
const Home = () => {
  return (
    <div>
      <AlertBanner />
      <div className="mt-[100vh]">
      <Navbar />
      </div>
      <Banner />
      <div className="md:hidden block">
        <LatestVoters/>
      </div>
      <News/>
      <VideoSection />
      <Comments/>
      <Letter />
      <Organizations />
      <Events />
      <FAQ />
      <Supporters />
      <Connect/>
      {/* <OrganizedBy/> */}
    </div>
  );
};

export default Home;