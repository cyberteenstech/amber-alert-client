"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle, Share2, Phone, MapPin, Calendar, Clock, User, Users, FileText, LinkIcon, CheckCircle, XCircle } from 'lucide-react';
import { missingDatas } from '../../../public/missing';
import { useLanguage } from '@/contexts/LanguageContext';

const Badge = ({ children, variant }) => {
    const baseClasses = "px-2 py-1 rounded-full text-sm font-semibold";
    const variantClasses = {
        success: "bg-green-100 text-green-800",
        destructive: "bg-red-100 text-red-800",
        secondary: "bg-gray-100 text-gray-800",
        outline: "bg-white text-gray-800 border border-gray-300",
    };

    return (
        <span className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </span>
    );
};

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
    const baseClasses = "px-4 py-2 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center";
    const variantClasses = {
        primary: "bg-[#FF7128] hover:bg-[#E65A1F] text-white",
        outline: "bg-white text-[#FF7128] border-2 border-[#FF7128] hover:bg-[#FF7128] hover:text-white",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center space-x-2">
        {icon}
        <span className="font-semibold">{label}:</span>
        <span>{value || 'N/A'}</span>
    </div>
);

const DetailsPage = ({id}) => {
    const { language } = useLanguage();
    const [data, setData] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); 
    }, []);

    useEffect(() => {
        if (id) {
            const missingPerson = missingDatas.find(item => item.id === parseInt(id));
            setData(missingPerson[language]);
        }
    }, [id, language]);

    if (!data) return <div className="flex justify-center items-center h-screen">Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center text-[#072E75] mb-4">{data.name}</h1>
                    <div className="flex justify-center space-x-2 mb-6">
                        <Badge variant={data.isFound ? "success" : data.isDead ? "destructive" : "secondary"}>
                            {data.isFound ? 'Found' : data.isDead ? 'Deceased' : 'Missing'}
                        </Badge>
                        {data.isVerified && <Badge variant="outline">Verified</Badge>}
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <Image
                                src={data.image}
                                alt={data.name}
                                width={400}
                                height={400}
                                className="rounded-lg shadow-lg object-cover w-full"
                            />
                        </div>
                        <div className="md:w-2/3 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoItem icon={<User className="w-5 h-5 text-[#FF7128]" />} label="Age" value={data.age} />
                                <InfoItem icon={<MapPin className="w-5 h-5 text-[#FF7128]" />} label="Lost Place" value={data.lostPlace} />
                                <InfoItem icon={<Calendar className="w-5 h-5 text-[#FF7128]" />} label="Lost Date" value={data.lostDate} />
                                <InfoItem icon={<Clock className="w-5 h-5 text-[#FF7128]" />} label="Lost Time" value={data.lostTime} />
                                <InfoItem icon={<MapPin className="w-5 h-5 text-[#FF7128]" />} label="Address" value={data.address} />
                            </div>

                            <hr className="border-t border-gray-200" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InfoItem icon={<User className="w-5 h-5 text-[#FF7128]" />} label="Father's Name" value={data.fathersName} />
                                <InfoItem icon={<User className="w-5 h-5 text-[#FF7128]" />} label="Mother's Name" value={data.mothersName} />
                                <InfoItem icon={<Users className="w-5 h-5 text-[#FF7128]" />} label="Guardian's Name" value={data.guardiansName} />
                                <InfoItem icon={<Phone className="w-5 h-5 text-[#FF7128]" />} label="Father's Contact" value={data.fathersContactNo} />
                                <InfoItem icon={<Phone className="w-5 h-5 text-[#FF7128]" />} label="Mother's Contact" value={data.mothersContactNo} />
                                <InfoItem icon={<Phone className="w-5 h-5 text-[#FF7128]" />} label="Guardian's Contact" value={data.guardianContactNo} />
                            </div>

                            <hr className="border-t border-gray-200" />

                            <div>
                                <h3 className="font-semibold flex items-center mb-2">
                                    <FileText className="w-5 h-5 text-[#FF7128] mr-2" />
                                    Description:
                                </h3>
                                <p className="text-gray-700">{data.description}</p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <LinkIcon className="w-5 h-5 text-[#FF7128]" />
                                <span className="font-semibold">Lost Source:</span>
                                <span>{data.lostSource}</span>
                                <Link href={`/`} className="text-[#FF7128] hover:underline ml-2">
                                    View Original Post
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button>
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Call Emergency Hotline
                </Button>
                <Button variant="outline">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Details
                </Button>
            </div>
        </div>
    );
};

export default DetailsPage;

