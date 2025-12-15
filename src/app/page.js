"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

// Dynamic imports to avoid SSR issues
const Banner = dynamic(() => import("@/components/home/Banner"), { ssr: false });
const FAQ = dynamic(() => import("@/components/home/FAQ"), { ssr: false });
const Letter = dynamic(() => import("@/components/home/Letter"), { ssr: false });
const Organizations = dynamic(() => import("@/components/home/Organizations"), { ssr: false });
const VideoSection = dynamic(() => import("@/components/home/VideoSection"), { ssr: false });
const Supporters = dynamic(() => import("@/components/home/Supporters"), { ssr: false });
const LatestVoters = dynamic(() => import("@/components/home/LatestVoters"), { ssr: false });
const News = dynamic(() => import("@/components/home/News"), { ssr: false });
const YourVoiceMatters = dynamic(() => import("@/components/home/YourVoiceMatters"), { ssr: false });
const Connect = dynamic(() => import("@/components/home/Connect"), { ssr: false });
const Comments = dynamic(() => import("@/components/home/Comments"), { ssr: false });
const AlertBanner = dynamic(() => import("@/components/shared/AlertModal"), { ssr: false });
const Navbar = dynamic(() => import("@/components/shared/Navbar"), { ssr: false });

const Home = () => {
  const [alertBannerVisible, setAlertBannerVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const alertBannerRef = useRef(null);
  const [voters, setVoters] = useState([]);
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const getVotersData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/voter?limit=10`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // Secure API key
            "Content-Type": "application/json",
          },
        }
      );
      setIsLoading(false);
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
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (alertBannerRef.current) {
  //       alertBannerRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the banner
  //     }
  //   }, 5000); // 5 seconds delay
  //   const visibilityTimeout = setTimeout(() => {
  //     setAlertBannerVisible(true);
  //   }, 5000); // 10 seconds delay

  //   // Clean up the timers when the component unmounts
  //   return () => {
  //     clearTimeout(timer);
  //     clearTimeout(visibilityTimeout);
  //   };
  // }, []);

  // // Use IntersectionObserver to detect when AlertBanner is visible
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];
  //       setAlertBannerVisible(entry.isIntersecting); // Update state when banner is in view
  //     },
  //     { threshold: 0.5 } // Trigger when 50% of the banner is visible
  //   );

  //   if (alertBannerRef.current) {
  //     observer.observe(alertBannerRef.current);
  //   }

  //   return () => {
  //     if (alertBannerRef.current) {
  //       observer.unobserve(alertBannerRef.current); // Clean up observer on component unmount
  //     }
  //   };
  // }, []);

  // Log the state after it changes
  // useEffect(() => {}, [alertBannerVisible]);

  return (
    <div>
      {/* <AlertBanner ref={alertBannerRef} setIsOpen={setIsOpen} isOpen={isOpen} /> */}
      <div className={isOpen ? "mt-[100vh]" : ""}>
        <Navbar />
      </div>
      <Banner
        voters={voters}
        setVoters={setVoters}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        votes={votes}
        setVotes={setVotes}
      />
      <div className="md:hidden block">
        <YourVoiceMatters />
      </div>
      <div className="md:hidden block">
        <LatestVoters
          voters={voters}
          setVoters={setVoters}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          votes={votes}
          setVotes={setVotes}
        />
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
