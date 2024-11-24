"use client";
import React from 'react';

const News = () => {
    const newses = [
        {
            id: 1,
            title: "উজিরপুর থেকে প্রতিবন্ধী শিশু নিখোঁজ",
            link: "https://www.dailyjanakantha.com/bangladesh/news/746345"
        },
        {
            id: 2,
            title: "সকালে শিশু নিখোঁজ বিকেলে মুক্তিপণ দাবি রাতে মিলল",
            link: "https://www.deshrupantor.com/552859/সকালে-শিশু-নিখোঁজ-বিকেলে-মুক্তিপণ-দাবি-রাতে-মিলল"
        },
        {
            id: 3,
            title: "চরফ্যাশনে নিখোঁজের দুদিন পর মিলল শিশুর মরদেহ",
            link: "https://www.rtvonline.com/country/301299"
        },
        {
            id: 4,
            title: "শিশুকন্যা নিখোঁজের পর মুক্তিপণ দাবি, লাশ মিলল পুকুরে",
            link: "https://www.jugantor.com/country-news/881197"
        },
        {
            id: 5,
            title: "শিশু সহায়তায় ফোন ১০৯৮",
            link: "https://dss.gov.bd/site/page/bb38e6c2-e1b6-4798-82d5-9e261a7ea89b/1098-Child-Help-Line"
        },
    ];

    return (
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 py-[40px] md:pt-[80px] md:pb-[40px]">
            <div className="overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap space-x-10">
                    {/* First news list */}
                    {newses.map((news) => (
                        <div
                            key={news.id}
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => window.open(news.link, "_blank")}
                        >
                            <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                            <p className="text-lg ps-2">{news.title}</p>
                        </div>
                    ))}
                    {/* Second news list for seamless looping */}
                    {newses.map((news) => (
                        <div
                            key={news.id + '-clone'}
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => window.open(news.link, "_blank")}
                        >
                            <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                            <p className="text-lg ps-2">{news.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
