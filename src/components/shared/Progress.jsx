"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
const Progress = ({ setClicked, clicked }) => {
    const socketRef = useRef(null);
    const [voters, setVoters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch voter data
    const getVotersData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/voter`);
            setVoters(res.data.data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!socketRef.current) {
            socketRef.current = io(process.env.NEXT_PUBLIC_SERVER);

            // Listen for real-time updates
            socketRef.current.on("new_vote", (newVoter) => {
                setVoters((prevVoters) => [newVoter, ...prevVoters]); // Prepend the new voter
            });
        }

        getVotersData(); // Fetch initial data

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, []);
    // Convert a number to Bangla
    const toBangla = (number) => {
        const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        return number
            .toString()
            .split("")
            .map((digit) => banglaDigits[parseInt(digit)])
            .join("");
    };

    // Function to calculate time ago
    const timeAgo = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
        const diffInSeconds = Math.max(0, Math.floor((now - createdDate) / 1000));


        if (diffInSeconds < 60) {
            return `${diffInSeconds} সে.`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes} মি.`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours} ঘণ্টা.`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} দিন.`;
    };
    // useEffect(() => {
        if (!socketRef.current) {
            socketRef.current = io('https://api.amberalert4bangladesh.org');

            // Listen for new votes
            socketRef.current.on("new_vote", (newVoter) => {
                // console.log("Received new vote:", newVoter); // Debugging
                setVoters((prevVoters) => [newVoter, ...prevVoters]);
            });

            socketRef.current.on("connect_error", (error) => {
                console.error("Socket connection error:", error);
            });
        }

        getVotersData(); // Fetch initial data

        // return () => {
        //     if (socketRef.current) {
        //         socketRef.current.disconnect();
        //         socketRef.current = null;
        //     }
        // };
    // }, []);


    if (clicked === true) {
        setClicked(false);
    }

    // Get the most recent 5 voters
    const recentVoters = voters.slice(0, 5); // Latest 5 voters
    const totalVoters = voters.length;

    // Calculate progress as a percentage (assuming 100,000 is the goal)
    const progress = (voters.length / 50000) * 100;

    return (
        <div className="bg-white p-4 rounded-lg ">
            <div className="md:block hidden">
            <div className="flex items-center justify-between mb-4 pt-4">
                <h3 className="text-lg text-[#072E75]">
                    <span className="font-semibold">{toBangla(voters.length)}</span> সাক্ষর
                </h3>
                <span className="text-[#072E75]">
                    প্রয়োজন <span className="text-[#FF7128] font-semibold"> ৫,০০,০০০</span>
                </span>
            </div>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <ul className="space-y-4 py-4">
                {isLoading
                    ? Array(5)
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
                                    <p className="text-xs text-gray-500">
                                        আপনার পিটিশন সম্পন্ন হয়েছে
                                    </p>
                                </div>
                                <span className="ml-auto text-sm text-[#072E75]">
                                    {timeAgo(voter.createdAt)}
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Progress;
