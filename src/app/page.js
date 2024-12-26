"use client";
import { useEffect, useState, useRef } from "react";
import Banner from "@/components/home/Banner";
import Events from "@/components/home/Events";
import FAQ from "@/components/home/FAQ";
import Letter from "@/components/home/Letter";
import Organizations from "@/components/home/Organizations";
import VideoSection from "@/components/home/VideoSection";
import Supporters from "@/components/home/Supporters";
import LatestVoters from "@/components/home/LatestVoters";
import News from "@/components/home/News";
import Connect from "@/components/home/Connect";
import Comments from "@/components/home/Comments";
import AlertBanner from "@/components/shared/AlertModal";
import Navbar from "@/components/shared/Navbar";

const Home = () => {
  const [alertBannerVisible, setAlertBannerVisible] = useState(false);
   const [isOpen, setIsOpen] = useState(true);
  const alertBannerRef = useRef(null);

  // Initially, set the alert banner to visible after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (alertBannerRef.current) {
        alertBannerRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the banner
      }
    }, 5000); // 5 seconds delay
   const visibilityTimeout = setTimeout(() => {
      setAlertBannerVisible(true); // Set visible to false after 10 seconds
      console.log(alertBannerVisible)
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
    console.log("Alert banner visible:", alertBannerVisible); // Log updated state
  }, [alertBannerVisible]);

  return (
    <div>
      <AlertBanner ref={alertBannerRef} setIsOpen={setIsOpen} isOpen={isOpen}/>
      <div className={isOpen ? "mt-[100vh]" : ""}>
        <Navbar />
      </div>
      <Banner />
      <div className="md:hidden block">
        <LatestVoters />
      </div>
      <News />
      <VideoSection />
      <Comments />
      <Letter />
      <Organizations />
      <Events />
      <FAQ />
      <Supporters />
      <Connect />
    </div>
  );
};

export default Home;
