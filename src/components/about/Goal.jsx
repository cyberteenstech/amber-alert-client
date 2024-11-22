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
                    আমাদের <span className="text-[#FF7128] md:mb-[85px] mb-[24px]">লক্ষ</span>
                </h2>

                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>1. বাংলাদেশে Amber Alert ব্যবস্থা বাস্তবায়ন করা।</h2>                    
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#072E75] mb-2'>2. শিশু নিখোঁজের জন্য একটি কেন্দ্রীয় তথ্যভাণ্ডার তৈরি করা।</h2>
                                  
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>3. সচেতনতা বৃদ্ধি এবং জনগণকে সক্রিয় করা।</h2>                                  
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#072E75] mb-2'>4. সরকার এবং সংশ্লিষ্ট সংস্থার সঙ্গে সমন্বয় করা।</h2>                                                  
                </div>
                <div className='bg-[#fff7f7] p-4 mb-4 rounded-lg mt-4'>
                    <h2 className='md:text-[30px] text-[20px] text-[#FF7128] mb-2'>5. বাংলাদেশে Amber Alert ব্যবস্থা বাস্তবায়ন করা।</h2>                            
                </div>
               
            </div>
        </div>
    );
};

export default AboutUs;