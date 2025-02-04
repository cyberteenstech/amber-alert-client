"use client";
import { useEffect, useState, useRef } from "react";
import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import Letter from "@/components/home/Letter";
import Organizations from "@/components/home/Organizations";
import VideoSection from "@/components/home/VideoSection";
import Supporters from "@/components/home/Supporters";
import LatestVoters from "@/components/home/LatestVoters";
import News from "@/components/home/News";
import YourVoiceMatters from "@/components/home/YourVoiceMatters";
import Connect from "@/components/home/Connect";
import Comments from "@/components/home/Comments";
import AlertBanner from "@/components/shared/AlertModal";
import Navbar from "@/components/shared/Navbar";
import axios from 'axios';

const Home = () => {
  const [alertBannerVisible, setAlertBannerVisible] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
  const alertBannerRef = useRef(null);
    const [voters, setVoters] = useState([]);
    const [votes, setVotes] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

   const getVotersData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/voter?limit=10`);
            setIsLoading(false)
            setVoters(res.data.data.voters);
            setVotes(res.data.data.totalVotes);
        } catch (e) {
            console.log(e);
        } finally {
        }
    };
    useEffect(() => {
        getVotersData();
    }, []);

  // Initially, set the alert banner to visible after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (alertBannerRef.current) {
        alertBannerRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the banner
      }
    }, 5000); // 5 seconds delay
   const visibilityTimeout = setTimeout(() => {
      setAlertBannerVisible(true); 
    }, 5000); // 10 seconds delay

    // Clean up the timers when the component unmounts
    return () => {
      clearTimeout(timer);
      clearTimeout(visibilityTimeout);
    };
  }, []);

  // Use IntersectionObserver to detect when AlertBanner is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setAlertBannerVisible(entry.isIntersecting); // Update state when banner is in view
      },
      { threshold: 0.5 } // Trigger when 50% of the banner is visible
    );

    if (alertBannerRef.current) {
      observer.observe(alertBannerRef.current);
    }

    return () => {
      if (alertBannerRef.current) {
        observer.unobserve(alertBannerRef.current); // Clean up observer on component unmount
      }
    };
  }, []);

  // Log the state after it changes
  useEffect(() => {
  }, [alertBannerVisible]);

  return (
    <div>
      <AlertBanner ref={alertBannerRef} setIsOpen={setIsOpen} isOpen={isOpen}/>
      <div className={isOpen ? "mt-[100vh]" : ""}>
        <Navbar />
      </div>
      <Banner voters={voters}
        setVoters={setVoters}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        votes={votes}
        setVotes={setVotes} />
       <div className="md:hidden block">
        <YourVoiceMatters />
      </div>
      <div className="md:hidden block">
        <LatestVoters voters={voters}
                            setVoters={setVoters} 
                             isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            votes={votes}
                            setVotes={setVotes} />
      </div>
      <News />
       <div className="md:block hidden">
        <YourVoiceMatters />
      </div>
      <VideoSection />
      <Comments />
      <Letter />
      <Organizations />
      {/* <Events /> */}
      <FAQ />
      <Supporters />
      <Connect />
    </div>
  );
};

export default Home;
