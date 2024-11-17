import React from 'react';

const Progress = () => {
    return (
        <div className="bg-white  p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4 pt-4">
                <h3 className="text-lg  text-[#072E75]"><span className="font-semibold">৯১,৯০০</span> সাক্ষর</h3>
                <span className="text-[#072E75] ">প্রয়োজন <span className="text-[#FF7128] font-semibold">১,০০,০০০</span></span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '91%' }}></div>
            </div>
            <ul className="space-y-4 py-4">
                {[...Array(5)].map((_, index) => (
                    <li key={index} className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                            {index + 1}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-[#072E75]">সাজেদা আমিন</p>
                            <p className="text-xs text-gray-500">ঢাকা</p>
                        </div>
                        <span className="ml-auto text-sm text-[#072E75]">১ মি.</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Progress;
