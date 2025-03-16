import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import EventList from "../components/events";
import ProfileCard from "../components/developer";
import AboutCard from "../components/Aboutsthapna";
import VideoSliderCard from "../components/Sthapnavid";

const TypingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;
  const pauseTime = 1000;

  useEffect(() => {
    if (index < text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (index === text.length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }
  }, [index, isDeleting, text]);

  return (
    <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300">
      {displayText}
      <span className="animate-blink">|</span>
    </p>
  );
};

const Stapna = () => {
  return (
    <div className="bg-secondary text-white text-center min-h-screen flex flex-col items-center px-4 sm:px-8">
      {/* Title Section */}
      <section className="pt-16 mb-20 mt-10 sm:pt-20 pb-8 sm:pb-16 w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          <img
            src="./imgs/sthapna 2025.png"
            alt="Sthapna 2025"
            className="w-auto h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[450px] mx-auto"
          />
          <TypingText text="Where Tradition Meets Technology" />
        </motion.div>
      </section>

      {/* Video and About Section */}
      <section className="w-full flex flex-wrap lg:flex-nowrap my-20 lg:my-32 justify-center gap-10 lg:gap-6">
        {/* About Card */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            once: true,
            ease: easeInOut,
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs"
        >
          <AboutCard />
        </motion.div>

        {/* Video Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1,
            once: true,
            ease: easeInOut,
          }}
          className="w-full max-w-lg md:max-w-xl lg:max-w-4xl"
        >
          <VideoSliderCard />
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.2,
            once: true,
            ease: easeInOut,
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs"
        >
          <h1 className="text-lg sm:text-xl font-semibold mb-2">TIME-LINE</h1>
          <div className="h-72 sm:h-80 bg-white w-full rounded-lg flex items-center justify-center text-black font-bold text-lg">
            Coming Soon...
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="w-full px-4 sm:px-10 md:px-20 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.4,
            once: true,
          }}
        >
          <EventList />
        </motion.div>
      </section>
    </div>
  );
};

export default Stapna;
