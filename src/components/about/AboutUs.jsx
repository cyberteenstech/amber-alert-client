"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
    en: {
        title: "About Us",
        sections: [
            {
                heading: "Cyber Teens Foundation:",
                content: "Cyber Teens Foundation is an organization established in 2019, working on cyber safety and mental health for teenagers in Bangladesh. The organization is run by young leaders."
            },
            {
                heading: "13 2 19 Helpline:",
                content: "This is the first cyber assistance helpline for teenagers, launched to help with cyberbullying, online sexual harassment, and internet-related queries. The concept behind the name '13 2 19' comes from the ages of teenagers, thirteen to nineteen, making it easy to remember. The helpline, staffed by trained volunteers, is currently operating on a trial basis."
            },
            {
                heading: "International Recognition:",
                content: "For its groundbreaking activities, the founder of Cyber Teens received the International Children’s Peace Prize in 2020, bringing global recognition to the foundation."
            },
            {
                heading: "Cyber Crime Prevention Committees for Teenagers:",
                content: "With the proposal from Cyber Teens Foundation, the Cabinet Division approved the establishment of 'Cyber Crime Prevention Committees for Teenagers' under the ICT Division in 64 districts and 400+ sub-districts. Important members of these committees include the district commissioner, superintendent of police, education officer, legal aid officers, NGOs, and Cyber Teens district ambassadors. Monthly activities are conducted under these committees."
            }
        ]
    },
    bn: {
        title: "আমাদের সম্পর্কে",
        sections: [
            {
                heading: "সাইবার টিনস ফাউন্ডেশন:",
                content: "সাইবার টিনস ফাউন্ডেশন ২০১৯ সালে প্রতিষ্ঠিত একটি সংগঠন, যা বাংলাদেশের কিশোর-কিশোরীদের সাইবার নিরাপত্তা এবং মানসিক স্বাস্থ্য নিয়ে কাজ করে। তরুণ নেতৃত্বে এই সংগঠনের কাজকর্ম পরিচালিত হয়।"
            },
            {
                heading: "১৩ ২ ১৯ হেল্পলাইন:",
                content: "এটি কিশোর কিশোরীদের জন্য প্রথম সাইবার সহায়তা হেল্পলাইন, যা কিশোর-কিশোরীদের সাইবারবুলিং, অনলাইন যৌন হয়রানি, এবং ইন্টারনেট বিষয়ক জিজ্ঞাসার জন্য সাহায্য করার জন্য চালু করা হয়। 13 2 19 নাম্বারের কনসেপ্টটি টিনএজার দের বয়স thirTeen to nineTeen থেকেই তৈরি করা যেন মনে রাখতে সহজ হয়। হেল্পলাইনের ভলান্টিয়ারটা প্রশিক্ষণপ্রাপ্ত বর্তমানে পরীক্ষামূলকভাবে হেল্পলাইনটি চালু রয়েছে।"
            },
            {
                heading: "আন্তর্জাতিক স্বীকৃতি:",
                content: "সাইবার টিনস-এর এই যুগান্তকারী কার্যক্রমের জন্য ২০২০ সালে সাইবার টিনস এর প্রতিষ্ঠাতা আন্তর্জাতিক শিশু শান্তি পুরস্কার লাভ করে, যা এই ফাউন্ডেশনকে গ্লোবাল প্ল্যাটফর্মে পরিচিত করে।"
            },
            {
                heading: "কিশোর কিশোরীদের জন্য সাইবার অপরাধ প্রতিরোধ কমিটি:",
                content: "সাইবার টিনস ফাউন্ডেশনের প্রস্তাবে দেশের ৬৪টি জেলায় এবং ৪০০+ উপজেলায় মন্ত্রীপরিষদ বিভাগের অনুমোদনক্রমে আইসিটি বিভাগের আওতায় 'কিশোর কিশোরীদের জন্য সাইবার অপরাধ প্রতিরোধ কমিটি' গঠন করা হয়। জেলা-উপজেলার জেলা প্রশাসক, পুলিশ সুপার, শিক্ষা অফিসার, লিগ্যালএইড কর্মকর্তা, এনজিও, সাইবার টিনস জেলা এম্বাসেডরসহ গুরুত্বপূর্ণ সদস্যরা এই কমিটির মেম্বার। প্রতিমাসে বিভিন্ন কাজকর্ম গ্রহণ করা হয়।"
            }
        ]
    }
};

const AboutUs = () => {
    const { language } = useLanguage();
    const { title, sections } = translations[language] || translations.en;

    return (
        <div className="relative">
            <div
                className="absolute inset-0 -z-10 min-h-screen w-full bg-white"
                style={{
                    background: 'linear-gradient(to top, rgba(249, 216, 212, .4) 30%, rgba(248,242,255,0.05) 70%)'
                }}
            ></div>

            <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 my-4">
                <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center">
                     {language === 'bn' ? 'আমাদের' : 'About'} <span className="text-[#FF7128] md:mb-[85px] mb-[24px]"> {language === 'bn' ? 'সম্পর্কে' : 'Us'}</span>
                </h2>

                {sections.map((section, index) => (
                    <div key={index} className="bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4">
                        <h2 className="md:text-[30px] text-[20px] text-[#FF7128] mb-2">{section.heading}</h2>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
