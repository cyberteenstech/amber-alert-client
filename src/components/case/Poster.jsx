"use client";
import React from "react";

const Poster = ({ data, language }) => {
    const { name, age, lastSeen, date, image } = data[language];

    return (
        <div className="bg-white w-[8.5in] h-[11in] flex flex-col items-center p-8">
            <h1 className="text-red-600 text-6xl font-bold mb-4">MISSING</h1>
            <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center mb-4">
                <img src={data.image} alt={name} className="object-contain h-full" />
            </div>
            <p className="text-lg"><strong>Name:</strong> {name}</p>
            <p className="text-lg"><strong>Age:</strong> {age}</p>
            <p className="text-lg"><strong>Last Seen:</strong> {lastSeen}</p>
            <p className="text-lg"><strong>Date:</strong> {date}</p>
            <p className="mt-6 text-lg text-center">
                If you have any information, please contact the authorities immediately.
            </p>
            <p>www.amberalert4bangladesh.org</p>
        </div>
    );
};

export default Poster;
