"use client";
import React, { useState, useEffect } from 'react';

const ToastAlert = () => {
    const [showToast, setShowToast] = useState(false);

    // Automatically show the toast after component mounts
    useEffect(() => {
        setShowToast(true);
        // Optionally hide the toast after a certain duration
        setTimeout(() => {
            setShowToast(false);
        }, 4000); // Toast will disappear after 5 seconds
    }, []);

    return (
        <div
            style={{
                zIndex: 9999, // Ensure it's above all other elements
                transition: 'transform 0.5s ease', // Smooth transition for sliding
                transform: showToast ? 'translateX(0)' : 'translateX(100%)', // Slide in/out
            }}
            className="max-w-xs bg-[#ffd8c412] text-blue-900 border border-blue-300 p-4 rounded-md shadow-md fixed top-4 right-4"
        >
            <div className="flex items-center space-x-2 z-100">
                <span className="text-xl text-yellow-500">⚠️</span>
                <span className="font-bold">EMERGENCY ALERTS</span>
            </div>
            <div className="mt-2">
                <p className="font-bold text-black">AMBER Alert</p>
                <p className="text-sm">
                    AMBER Alert: Mohakhali, road 404, building 500. Suspect is brown male.
                    click to learn more.
                </p>
            </div>
            <div className="mt-2 text-xs text-right text-blue-700">4m ago</div>
        </div>
    );
};

export default ToastAlert;
