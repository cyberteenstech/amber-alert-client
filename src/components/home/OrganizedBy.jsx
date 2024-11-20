import Image from 'next/image';
import React from 'react';

const OrganizedBy = () => {
    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:py-[80px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                এই{" "}
                <span className="text-[#FF7128]">উদ্যোগে</span>
            </h2>
            <div className='flex items-center justify-center gap-x-2'>

                <Image
                    src="/amberalert.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
                <Image
                    src="/cyberteens.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />

            </div>
        </div>
    );
};

export default OrganizedBy;