import React from 'react';
import Image from 'next/image';
import { CheckCircle, Clock, MapPin } from 'lucide-react';

const SuccessCard = ({ name, age, location, duration, image }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105">
          {/* Background Gradient */}
           
        <div className="relative">
            <Image src={image} alt={name} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg">
                <CheckCircle className="inline-block w-4 h-4 mr-1" />
                Found
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">{age} years old</p>
            <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700">{location}</span>
            </div>
            <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-gray-700">Found within {duration}</span>
            </div>
        </div>
    </div>
);

const Successful = () => {
    const successfulCases = [
        {
            name: "Rahim Ahmed",
            age: 7,
            location: "Dhaka",
            duration: "24 hours",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            name: "Fatima Begum",
            age: 5,
            location: "Chittagong",
            duration: "48 hours",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            name: "Kamal Hossain",
            age: 9,
            location: "Sylhet",
            duration: "36 hours",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            name: "Nusrat Jahan",
            age: 6,
            location: "Rajshahi",
            duration: "72 hours",
            image: "/placeholder.svg?height=300&width=400",
        },
    ];

    return (
        <div className="relative">
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full bg-white"
                style={{
                    background: 'linear-gradient(to top, rgba(249, 216, 212, .4) 30%, rgba(248,242,255,0.05) 70%)'
                }}
            ></div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-green-800 mb-12">Successful Recoveries</h1>
                <p className="text-xl text-center text-gray-600 mb-12">
                    Every child found is a testament to the power of community and swift action.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {successfulCases.map((caseItem, index) => (
                        <SuccessCard key={index} {...caseItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Successful;

