"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { GrClose } from "react-icons/gr";
import Lottie from "lottie-react";
import scrollArrowAnimation from "/public/scrolldown.json";

const AlertBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-t to-[#f7f7f7] from-[#ffffff] shadow-lg h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url('/map.gif')", // Path to your map image
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling
            opacity: 0.2, // Lower the opacity of the map
            zIndex: -1, // Ensure it stays behind the content
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('/noise.gif')]"
            style={{ opacity: 0.08 }}
          ></div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow hover:shadow-lg transition-all"
            onClick={() => setIsOpen(false)}
          >
            <GrClose size={20} />
          </button>

          {/* Main Content */}
          <main className="relative rounded-lg w-full h-auto max-w-[1440px] p-6 flex flex-col lg:flex-row items-center justify-center gap-8">
            <section className="flex-1 text-center lg:text-left">
              <p className="text-[#FF7128] text-xl font-bold uppercase mb-2 tracking-wider">
                #SaveTheChildren
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-red-600 mb-4">
                ENOUGH IS ENOUGH!
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Stand for Change
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mb-8">
                Join us in making a difference. Together, we can create a better
                future for children around the globe.
              </p>
              <button className="px-8 py-4 bg-[#FF7128] text-white font-bold text-lg rounded-lg hover:bg-[#e66424] transition-all shadow-lg">
                Join Us
              </button>
            </section>
            <section className="flex-1 max-w-full lg:max-w-[60%] rounded-lg overflow-hidden">
              <ReactPlayer
                url="https://youtu.be/k_LgAfdeiBA?si=O-Y1YQyQyVanBX1O"
                controls
                width="100%"
                height="100%"
                style={{
                  aspectRatio: "16 / 9",
                }}
              />
            </section>
          </main>

          {/* Lottie Animation */}
          <div className="absolute bottom-[-40vh] left-1/2 transform -translate-x-1/2">
            <Lottie
              animationData={scrollArrowAnimation}
              style={{ width: 1000, height: 1000 }}
              loop
            />
          </div>

          {/* Left Ribbon with Sliding Hashtags */}
          <div
            className="absolute top-0 left-0 w-16 h-full bg-[#FF7128] flex items-center justify-center z-30"
            style={{
              zIndex: 30,
            }}
          >
            <motion.div
              className="flex flex-col items-center justify-start space-y-28"
              animate={{
                y: ["0%", "80%"], // Scrolls the text vertically
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <p
                className="text-white text-sm font-semibold text-center transform rotate-90"
                style={{ whiteSpace: "nowrap" }}
              >
                #AmberAlert
              </p>
              <p
                className="text-white text-sm font-semibold text-center transform rotate-90"
                style={{ whiteSpace: "nowrap" }}
              >
                #MissingChildren
              </p>
              <p
                className="text-white text-sm font-semibold text-center transform rotate-90"
                style={{ whiteSpace: "nowrap" }}
              >
                #SaveTheChildren
              </p>
              <p
                className="text-white text-sm font-semibold text-center transform rotate-90"
                style={{ whiteSpace: "nowrap" }}
              >
                #AmberAlert
              </p>
              <p
                className="text-white text-sm font-semibold text-center transform rotate-90"
                style={{ whiteSpace: "nowrap" }}
              >
                #MissingChildren
              </p>
              <p
                className="text-white text-sm font-semibold text-center transform rotate-90"
                style={{ whiteSpace: "nowrap" }}
              >
                #SaveTheChildren
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBanner;
