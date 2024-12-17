// components/SplashScreen.js
"use client";  // This makes SplashScreen a client component

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Use usePathname from next/navigation
import Image from "next/image";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // Get the current pathname

  // Trigger splash screen when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, [pathname]); // Dependency array is set to `pathname` to trigger on route change

  if (loading) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <Image
            src="/amberalert.png"
            alt="Amber Alert Logo"
            width={100}
            height={100}
            className="splash-logo"
          />
        </div>
        <style jsx>{`
          .splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:rgba(249, 216, 212, .7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .splash-content {
            display: flex;
            justify-content: center;
            align-items: center;
            animation: scaleupdown 2s infinite;
          }

          .splash-logo {
            animation: scaleupdown 2s infinite;
          }

          @keyframes scaleupdown {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  return null; // Return nothing when not loading
};

export default SplashScreen;
