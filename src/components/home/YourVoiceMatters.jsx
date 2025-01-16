import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

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
    videoUrl: 'https://youtube.com/shorts/2t5b0TuA56U',
  },
  {
    id: '4',
    videoUrl: 'https://www.youtube.com/shorts/QqA4hAeGqsA',
  },
  {
    id: '5',
    videoUrl: 'https://www.youtube.com/shorts/qlZRa3MiCzA',
  },
];

function YourVoiceMatters() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-[40px] text-[24px] font-semibold text-center mb-[40px]">
          <span className="text-[#072E75]">Your Voice</span>
          <span className="text-[#FF7128]"> Matters</span>
        </h2>
        
        <div className="flex md:justify-center gap-6 overflow-x-auto pb-6 snap-x snap-mandatory lg:overflow-x-visible ">
          {videos.map((video) => (
            <div
              key={video.id}
              className="md:w-[340px] w-[300px] md:h-[480px] h-[400px] cursor-pointer flex-shrink-0 snap-center"
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
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-[340px] h-[480px] bg-black rounded-xl overflow-hidden shadow-2xl">
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