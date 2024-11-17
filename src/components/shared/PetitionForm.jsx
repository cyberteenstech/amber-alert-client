import React from 'react';

const PetitionForm = () => {
    return (
        <div className="bg-[#ffd8c412] border-r-[1px] border-[#FF7128] border-dashed rounded-lg shadow-md p-5 relative">
            {/* Top border */}
            <div className="absolute -top-2 left-0 right-0 h-4 bg-[#FF7128] rounded-t-lg"></div>
            {/* Form Content */}
            <h3 className="text-lg font-bold text-orange-500 mb-4 flex items-center">
                <span className="mr-2">📜</span> পিটিশন সাক্ষর করুন
            </h3>
            <form>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder="*আপনার নাম"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder="*ইমেইল"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="tel"
                        placeholder="মোবাইল"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        placeholder="মন্তব্য"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        rows="3"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold text-sm py-3 rounded-md hover:bg-orange-600"
                >
                    সম্পন্ন করুন
                </button>
            </form>
        </div>
    );
};

export default PetitionForm;
