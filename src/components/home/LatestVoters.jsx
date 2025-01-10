"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
const Progress = ({ setClicked, clicked }) => {
    const socketRef = useRef(null);
    const [voters, setVoters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch initial voter data
    const fetchVotersData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/voter`);
            setVoters(res.data.data);
        } catch (error) {
            console.error("Failed to fetch voter data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Initialize Socket.IO and fetch data
    useEffect(() => {
        socketRef.current = io(process.env.NEXT_PUBLIC_SERVER);

        // Listen for real-time updates
        socketRef.current.on("new_vote", (newVoter) => {
            setVoters((prevVoters) => [newVoter, ...prevVoters]); // Prepend the new voter
        });

        fetchVotersData(); // Fetch data on component mount

        // Cleanup on unmount
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []);

    // Convert number to Bangla
    const toBangla = (number) => {
        const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return number
            .toString()
            .split("")
            .map((digit) => banglaDigits[parseInt(digit, 10)])
            .join("");
    };

    // Calculate time ago
    const timeAgo = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
        const diffInSeconds = Math.max(0, Math.floor((now - createdDate) / 1000));

        if (diffInSeconds < 60) return `${diffInSeconds} সে.`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} মি.`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} ঘণ্টা.`;

        return `${Math.floor(diffInSeconds / 86400)} দিন.`;
    };

    // Mark clicked as false if it's true
    if (clicked) setClicked(false);

    // Get the most recent 10 voters
    const recentVoters = voters.slice(0, 10);
    const totalVoters = voters.length;

    // Calculate progress as a percentage (assuming 100,000 is the goal)
    const progress = (totalVoters / 100000) * 100;

    return (
         <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[80px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                সর্বশেষ{" "}
                <span className="text-[#FF7128]">স্বাক্ষরকারীরা</span>
            </h2>
        <div className="bg-white p-4 rounded-lg shadow-lg w-[80%] mx-auto">
            
            <ul className="space-y-4 py-4 ">
                {isLoading
                    ? Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <li key={index} className="flex items-center animate-pulse">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="ml-3 flex-1">
                                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                                    <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                                </div>
                                <div className="ml-auto h-4 bg-gray-300 rounded w-10"></div>
                            </li>
                        ))
                    : recentVoters.map((voter, index) => {
                        // Find the serial number in the overall voters list
                        const serialNumber = totalVoters - index;

                        return (
                            <li key={voter._id} className="flex items-center">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                                    {toBangla(serialNumber)} {/* Convert serial number to Bangla */}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-[#072E75] capitalize">{voter.name}</p>
                                    <p className="text-xs text-gray-500">আপনাকে ধন্যবাদ সাইন করার জন্য</p>
                                </div>
                                <span className="ml-auto text-sm text-[#072E75]">
                                    {timeAgo(voter.createdAt)}
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </div>
        </div>
    );
};

export default Progress;
