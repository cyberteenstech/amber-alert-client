import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#F9DFDF]'>
            <div className='max-w-[1440px] mx-auto px-4 md:px-10 md:py-[110px] py-[56px] grid grid-cols-1 md:grid-cols-3 justify-around'>
                <div>
                    <div className="flex items-center gap-x-2">
                        <Image
                            src="/amberalert.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <Image
                            src="/cyberteens.png"
                            alt="Logo"
                            width={60}
                            height={60}
                        />
                    </div>
                    <p className='md:my-4 my-2 text-[#072E75] font-normal md:text-[16px] text-[14px]'>সাইবার সুরক্ষা, সাইবারের সঠিক ব্যবহার ও সাইবারের ভয়ানক দিক সম্পর্কে কিশোর-কিশোরীদের মধ্যে সচেতনতা সৃষ্টি ও সাইবার হয়রানীর শিকার হওয়া কিশোর কিশোরীদে পাশে দাঁড়ানোর লক্ষ্যে বাংলাদেশের ৬৪টি জেলা ও প্রতিটি উপজেলাতে “সাইবার অপরাধ প্রতিরোধ কমিটি” গঠন করা হয়।</p>
                </div>
                <div className='flex md:justify-center md:mt-0 mt-4'>
                <div className='flex flex-col '>
                    <h2 className='text-[#072E75] font-semibold md:text-[20px] text-[16px] mb-4'>সাইট ম্যাপ</h2>
                    <Link href="/goals" className='text-[#072E75] md:text-[16px] text-[14px]'>কমিটির লক্ষ্য</Link>
                    <Link href="/contact" className='text-[#072E75] md:text-[16px] text-[14px] mt-2'>যোগাযোগ করুন</Link>
                    <Link href="/about" className='text-[#072E75] md:text-[16px] text-[14px] mt-2'>আমাদের সম্পর্কে</Link>
                    </div>
                </div>
                <div className='flex md:justify-end md:mt-0 mt-4'>
                <div className='flex flex-col '>
                    <h2 className='text-[#072E75] font-semibold md:text-[20px] text-[16px] mb-4'>আমাদের সাথে যোগাযোগ করুন</h2>
                    <Link href="/" className='text-[#072E75] md:text-[16px] text-[14px] mt-2'>হেল্পলাইন নাম্বার ১৩ ২ ১৯</Link>
                </div>
            </div>

            </div>            
        </div>
    );
};

export default Footer;