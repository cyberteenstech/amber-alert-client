import Image from 'next/image';
import React from 'react';

const Organizations = () => {
    const logos = [
        '/cyberteens.png', // replace with your actual logo URLs
        '/amberalert.png',
        '/cyberteens.png', // replace with your actual logo URLs
        '/amberalert.png',
        '/cyberteens.png', // replace with your actual logo URLs
        '/amberalert.png',
    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[60px] md:py-[120px]">
            <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                আমাদের আবেদন পৌঁছে যাবে{" "}
                <span className="text-[#FF7128]">যাদের কাছে</span>
            </h2>

            <div className='flex overflow-x-scroll items-center'>

                <div className="bg-white rounded-lg p-6 w-full">
                    <h3 className="text-[#072E75] text-lg font-semibold mb-2">
                        গোলটেবিল বৈঠক
                    </h3>
                    <p className="text-[#072E75] text-sm mb-4">
                        শিশুদের নিরাপত্তার গুরুত্ব নিয়ে আলোচনা করবে।
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Organizations;