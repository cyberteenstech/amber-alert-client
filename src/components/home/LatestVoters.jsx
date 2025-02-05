import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import axios from "axios";
import io from "socket.io-client";
// Memoize conversion map
const BANGLA_DIGITS = Object.freeze({
    "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
    "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯"
});

// Memoize time units
const TIME_UNITS = Object.freeze({
    seconds: 'সে.',
    minutes: 'মি.',
    hours: 'ঘণ্টা.',
    days: 'দিন.'
});

const Progress = ({voters,setVoters, setClicked, clicked, isLoading, setIsLoading, votes, setVotes }) => {
    const socketRef = useRef(null);
    // Socket connection and initial data fetch
    useEffect(() => {
        if (!socketRef.current) {
            socketRef.current = io(`${process.env.NEXT_PUBLIC_SERVER}`, {
                transports: ['websocket'], // Force WebSocket transport
                reconnectionDelay: 1000,
                reconnectionAttempts: 5
            });

            socketRef.current.on("new_vote", (newVoter) => {
                setVoters(prev => [newVoter, ...prev.slice(0, 9)]); // Keep array size constant
            });
             socketRef.current.on("updated_voters_count", (updatedVotersCount) => {
                // Update the total voters count from the backend

                console.log(updatedVotersCount)
                setVotes(updatedVotersCount)
            });
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, []);

    // Memoize conversion function
    const toBangla = useCallback((number) => {
        return number.toString().split('')
            .map(digit => BANGLA_DIGITS[digit] || digit)
            .join('');
    }, []);

    // Memoize time ago calculation
    const timeAgo = useCallback((createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
        const diffInSeconds = Math.max(0, Math.floor((now - createdDate) / 1000));

        if (diffInSeconds < 60) {
            return `${toBangla(diffInSeconds)} ${TIME_UNITS.seconds}`;
        }
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${toBangla(diffInMinutes)} ${TIME_UNITS.minutes}`;
        }
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${toBangla(diffInHours)} ${TIME_UNITS.hours}`;
        }
        const diffInDays = Math.floor(diffInHours / 24);
        return `${toBangla(diffInDays)} ${TIME_UNITS.days}`;
    }, [toBangla]);

    if (clicked === true) {
        setClicked(false);
    }

    // Memoize derived value
    const totalVoters = Number(votes)

    // Memoize loading skeleton
    const LoadingSkeleton = useMemo(() => (
        Array(10).fill(0).map((_, index) => (
            <li key={index} className="flex items-center animate-pulse">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-3 flex-1">
                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                </div>
                <div className="ml-auto h-4 bg-gray-300 rounded w-10"></div>
            </li>
        ))
    ), []);

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[80px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                সর্বশেষ{" "}
                <span className="text-[#FF7128]">স্বাক্ষরকারীরা</span>
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-lg w-[80%] mx-auto">
                <ul className="space-y-4 py-4">
                    {isLoading ? LoadingSkeleton : voters.map((voter, index) => {
                        const serialNumber = totalVoters - index;
                        return (
                            <li key={voter._id} className="flex items-center">
                                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                                    {toBangla(serialNumber)}
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