"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from "react-player";

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
            className="fixed inset-0 bg-black bg-opacity-80 z-50 "
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-[10%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[85vh] max-w-6xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Red Alert Banner */}
            <div className="bg-red-600 py-4 px-8">
              <h2 className="text-white text-3xl font-bold tracking-wider">URGENT: PROTECT OUR CHILDREN</h2>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100%-4rem)]">
              {/* Left side - Message */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-800 mb-6">ENOUGH IS ENOUGH!</h3>
                <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                  Every child in Bangladesh deserves to be safe.
                  Every child deserves to come home.
                </p>
                <p className="text-xl text-red-600 font-semibold mb-8">
                  We must act NOW to protect our children from going missing.
                  Your support can make a difference.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="/report"
                    className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Report Missing Child
                  </a>
                </div>
              </div>

              {/* Right side - Video */}
              <div className="bg-gray-100 p-8">
                <div className="w-full h-full rounded-lg overflow-hidden">
                    <ReactPlayer
                            url="https://youtu.be/ONEBdKjN-2Q"
                            // playing={!isPaused}
                            controls
                            className="absolute top-0 left-0"
                            // onPause={() => setIsPaused(true)}
                            // onPlay={() => setIsPaused(false)}
                        />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;