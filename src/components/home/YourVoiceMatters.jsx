import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";

const videos = [
  {
    id: '1',
    videoUrl: 'https://www.youtube.com/embed/4zpUOu3wJFg',
  },
  {
    id: '2',
    videoUrl: 'https://www.youtube.com/embed/4OTpEl5RTac',
  },
  {
    id: '3',
    videoUrl: 'https://www.youtube.com/embed/QqA4hAeGqsA',
  }
];

const translations = {
  en: {
    title: 'Your Voice Matters',
  },
  bn: {
    title: 'আপনার কণ্ঠ গুরুত্বপূর্ণ',
  },
};

function YourVoiceMatters() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { language } = useLanguage();

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-[40px] text-[24px] font-semibold text-[#072E75] text-center mb-[40px]">
                {language === "bn" ? "আপনার কণ্ঠ" : "Your Voice"}
                <span className="text-[#FF7128]">{language === "bn" ? "গুরুত্বপূর্ণ" : "Matters"} </span>
            </h2>
       <div className="flex justify-center gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-[340px] h-[600px] cursor-pointer"
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gray-900"
                onClick={() => setSelectedVideo(video)}
              >
                <iframe
                  src={video.videoUrl}
                  className="w-full h-full pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-[340px] h-[600px] bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400 z-10 bg-black/50 p-2 rounded-full transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default YourVoiceMatters;