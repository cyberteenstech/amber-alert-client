"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OrganizedBy = () => {
    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[60px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                শিশু নিখোঁজের বিরুদ্ধে{" "}
                <span className="text-[#FF7128]">ঘুরে দাড়াই একসাথে</span>
            </h2>
            <div className='flex items-center justify-center gap-x-2'>

                <Link href="https://13219.help">
                    <Image
                        src="/cyberteens.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="/">
                    <Image
                        src="/amberalert.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                
                <Link href="https://13219.help">
                    <Image
                        src="/13219.jpg"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="https://www.kidsrights.org/">
                    <Image
                    src="https://i.ibb.co.com/f8mp9vV/image.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="https://dss.gov.bd/site/page/bb38e6c2-e1b6-4798-82d5-9e261a7ea89b/1098-Child-Help-Line">
                    <Image
                        src="https://i.ibb.co.com/VwwQwbM/images.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <Link href="https://reflectiveteens.com/">
                    <Image
                        src="https://i.ibb.co.com/p03TcbZ/untitled-design-4-3-1.webp"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </Link>
               

            </div>
        </div>
    );
};

export default OrganizedBy;