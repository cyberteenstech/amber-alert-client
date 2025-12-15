"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const videos = [
  { id: '1', videoId: '4zpUOu3wJFg' },
  { id: '2', videoId: '4OTpEl5RTac' },
  { id: '3', videoId: '2t5b0TuA56U' },
  { id: '4', videoId: 'QqA4hAeGqsA' },
  { id: '5', videoId: 'qlZRa3MiCzA' },
  { id: '6', videoId: 'e9c-_uw8Si0' },
  { id: '7', videoId: 'n0M49khlZKM' },
  { id: '8', videoId: '7PpCF6UkVOU' },
  { id: '9', videoId: 'Fd4a0jBkhN4' },
  { id: '10', videoId: 'MkyIVXJDpJI' },
];

function YourVoiceMatters() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState({});

  const loadIframe = (id) => {
    setSelectedVideo((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-[40px] text-[24px] font-semibold text-center mb-[30px]">
          <span className="text-[#072E75]">Your Voice</span>
          <span className="text-[#FF7128]"> Matters</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#FF7128]',
          }}
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2.5, centeredSlides: false },
            1024: { slidesPerView: 3.5, centeredSlides: false },
          }}
          className="!pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="w-auto">
              <div className="md:w-[340px] w-[300px] md:h-[420px] h-[340px] cursor-pointer">
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gray-900"
                  onClick={() => loadIframe(video.id)}
                >
                  {loadedVideos[video.id] ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-[340px] h-[480px] md:h-[480px] bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400 z-10 bg-black/50 p-2 rounded-full transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default YourVoiceMatters;
