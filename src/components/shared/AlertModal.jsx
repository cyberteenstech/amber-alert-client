"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import { GrClose } from "react-icons/gr";
const AlertModal = () => {
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
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50 rounded-lg"
          >
            {/* Red Alert Banner */}

            {/* Content */}
            <main className="relative my-4  bg-gradient-to-t to-[#f7f7f7] from-[#ffffff] rounded-lg">
              <div
                className="rounded-t-3xl absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('/noise.gif')]"
                style={{ opacity: 0.08 }}
              ></div>
              <section className="rounded-t-3xl  font-semibold 2xl::h-[600px] sm:h-[150px] h-[100px] bg-gradient-to-t to-[#f7f7f7] from-[#ffffff] flex flex-col items-center justify-center  text-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_0.5px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_0.5px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="flex items-center justify-between px-5 w-full">
                  <p></p>
                  <p className=" text-[#FF7128] font-semibold text-lg">
                    #SaveTheChildren
                  </p>
                  <GrClose
                    className=" text-3xl lg:text-4xl p-2 transition-all bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white z-20"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <div className="p-2 items-center flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">
                    ENOUGH IS MORE THAN ENOUGH!
                  </h3>
                </div>
              </section>
              <div className="px-2 lg:px-6  md:my-4 my-2 lg:my-6 mb-6 flex items-center justify-center ">
                <div className="w-full z-[100] max-w-[1280px] min-w-[280px] md:min-w-[560px] lg:min-w-[720px] xl:min-w-[980px] lg:max-h-[56vh] xl:max-h-[65vh] max-h-[90vh] rounded-lg overflow-hidden">
                  <ReactPlayer
                    url="https://youtu.be/k_LgAfdeiBA?si=O-Y1YQyQyVanBX1O"
                    controls
                    width="100%"
                    height="100%"
                    style={{
                      aspectRatio: "16 / 9", // Ensures proper ratio regardless of width/height.
                    }}
                  />
                </div>
              </div>
            </main>
            {/* Right side - Video */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;
