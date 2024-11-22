import React from 'react';

const AboutUs = () => {
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
                    আমাদের <span className="text-[#FF7128] md:mb-[85px] mb-[24px]">সম্পর্কে</span>
                </h2>

                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>আমাদের মিশন:</h2>
                    <p>Amber Alert for Bangladesh একটি জাতীয় উদ্যোগ, যা নিখোঁজ শিশুদের দ্রুত উদ্ধার এবং তাদের সুরক্ষা নিশ্চিত করতে কাজ করে। সাইবার টিনস ফাউন্ডেশন-এর তত্ত্বাবধানে এই উদ্যোগটি পরিচালিত হচ্ছে।</p>
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>সাইবার টিনস ফাউন্ডেশন:</h2>
                    <p>সাইবার টিনস ফাউন্ডেশন ২০১৭ সালে প্রতিষ্ঠিত একটি অগ্রগামী সংগঠন, যা বাংলাদেশের কিশোর-কিশোরীদের সাইবার নিরাপত্তা এবং মানসিক স্বাস্থ্য নিয়ে কাজ করে।</p>
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>১৩ ২ ১৯ হেল্পলাইন:</h2>
                    <p>এটি দেশের প্রথম সাইবার সহায়তা হেল্পলাইন, যা কিশোর-কিশোরীদের সাইবারবুলিং, অনলাইন হয়রানি, এবং মানসিক চাপে সাহায্য করার জন্য চালু করা হয়।</p>
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>আন্তর্জাতিক স্বীকৃতি:</h2>
                    <p>সাইবার টিনস-এর এই যুগান্তকারী কার্যক্রমের জন্য ২০২০ সালে আন্তর্জাতিক শিশু শান্তি পুরস্কার লাভ করে, যা এই ফাউন্ডেশনকে গ্লোবাল প্ল্যাটফর্মে পরিচিত করে।</p>
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>কিশোর-কিশোরীদের পাশে:</h2>
                    <p>দেশের ৬৪টি জেলায় কাজ করছে সাইবার টিনস, যেখানে হাজারো কিশোর-কিশোরী তাদের সাহায্য পেয়েছে।</p>
                </div>
                </div>
        </div>
    );
};

export default AboutUs;