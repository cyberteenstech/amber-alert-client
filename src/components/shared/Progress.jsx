"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useLanguage } from "@/contexts/LanguageContext";

const Progress = ({ voters, setVoters, setClicked, clicked, isLoading, setIsLoading}) => {
    console.log(voters)
    const socketRef = useRef(null);
    const { language } = useLanguage(); // Get the current language

    useEffect(() => {
        if (!socketRef.current) {
            socketRef.current = io(process.env.NEXT_PUBLIC_SERVER);

            // Listen for real-time updates
            socketRef.current.on("new_vote", (newVoter) => {
                setVoters((prevVoters) => [newVoter, ...prevVoters]); // Prepend the new voter
            });
        }

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
            return `${diffInSeconds} ${language === 'bn' ? 'সে.' : 'sec.'}`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes} ${language === 'bn' ? 'মি.' : 'min.'}`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours} ${language === 'bn' ? 'ঘণ্টা.' : 'hrs.'}`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} ${language === 'bn' ? 'দিন.' : 'days.'}`;
    };

    if (clicked === true) {
        setClicked(false);
    }

    // Get the most recent 5 voters
    const recentVoters = voters.slice(0, 5); // Latest 5 voters
    const totalVoters = voters.length;

    // Calculate progress as a percentage (assuming 100,000 is the goal)
    const progress = (voters.length / 100000) * 100;

    return (
        <div className="bg-white p-4 rounded-lg ">
            <div className="md:block hidden">
                <div className="flex items-center justify-between mb-4 pt-4">
                    <h3 className="text-lg text-[#072E75]">
                        <span className="font-semibold"> {language === 'bn' ? `${toBangla(voters.length)}` : `${voters.length}`}</span> {language === 'bn' ? 'স্বাক্ষর' : 'signs'}
                    </h3>
                    <span className="text-[#072E75]">
                        {language === 'bn' ? 'প্রয়োজন' : 'Required'} 
                        <span className="text-[#FF7128] font-semibold">  {language === 'bn' ? '১,০০,০০০' : '100000'}</span>
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
                {recentVoters.map((voter, index) => {
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
                                        {language === 'bn' ? 'আপনার পিটিশন সম্পন্ন হয়েছে' : 'Your petition has been completed'}
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
