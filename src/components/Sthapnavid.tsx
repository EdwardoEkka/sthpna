import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const VideoSliderCard: React.FC = () => {
  // Create references for videos
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  // Function to handle play event
  const handlePlay = (index: number) => {
    videoRefs.forEach((videoRef, i) => {
      if (i !== index && videoRef.current) {
        videoRef.current.pause(); // Pause other videos
      }
    });
  };

  return (
    <div className="w-full max-w-6xl border-2 border-red-500 rounded-xl bg-transparent backdrop-blur-md text-white p-8 mx-auto">{/* Increased width */}
      {/* 🔹 Heading */}
      <h2 className="text-4xl font-bold text-center mb-8">Event Highlights</h2>

      {/* 🔹 Video & Image Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="w-full h-[500px] rounded-lg overflow-hidden"
      >
        {/* 🔹 Video 1 */}
        <SwiperSlide>
          <video
            ref={videoRefs[0]}
            className="w-full h-full object-contain rounded-lg"
            controls
            onPlay={() => handlePlay(0)}
          >
            <source src="/imgs/video/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

        {/* 🔹 Image 1 */}
        <SwiperSlide>
          <img
            src="/imgs/Comingsoon.png"
            alt="Event 1"
            className="w-full h-full object-contain rounded-lg"
          />
        </SwiperSlide>

        {/* 🔹 Video 2 */}
        <SwiperSlide>
          <video
            ref={videoRefs[1]}
            className="w-full h-full object-contain rounded-lg"
            controls
            onPlay={() => handlePlay(1)}
          >
            <source src="/imgs/video/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

        {/* 🔹 Image 2 */}
        <SwiperSlide>
          <img
            src="/imgs/Civil Engineering Society.png"
            alt="Event 2"
            className="w-full h-full object-contain rounded-lg"
          />
        </SwiperSlide>
      </Swiper>

      {/* 🔹 Content Area */}
      <div className="mt-8 text-center px-6">{/* Increased margin and padding */}
        <p className="text-xl leading-relaxed">{/* Increased font size */}
          Experience the unforgettable moments of Sthapna! Our highlight videos showcase
          the best moments, from technical sessions to cultural performances. 
          Stay tuned for more exciting events!
        </p>
      </div>
    </div>
  );
};

export default VideoSliderCard;
