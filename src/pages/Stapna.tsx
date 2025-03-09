import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EventList from '../components/events';
import ProfileCard from '../components/developer';

const TypingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100; // Typing speed (100ms) & deleting speed (50ms)
  const pauseTime = 1000; // Pause before deleting (1s)

  useEffect(() => {
    if (index < text.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (index === text.length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false); // Restart typing
    }
  }, [index, isDeleting, text]);

  return (
    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-gray-300">
      {displayText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </p>
  );
};

const Stapna = () => {
  return (
    <div className="bg-secondary text-white text-center min-h-screen flex flex-col items-center">
      {/* Title Section */}
      <section className="pt-20 pb-10 sm:pb-20 font-serif">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wider text-transparent bg-clip-text drop-shadow-lg"
            style={{
              backgroundImage: "linear-gradient(0deg, rgba(17,18,18,1) 3%, rgba(250,4,4,1) 92%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            STHAPNA
          </h1>

          {/* <img src="./imgs/sthapna.png" alt="" className="h-[1000px] w-auto" /> */}


          {/* Continuous Typing Animation */}
          <TypingText text="Where Tradition Meets Technology" />
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="px-6 sm:px-12 md:px-20 py-10 sm:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <EventList />
        </motion.div>
      </section>

      
    </div>
  );
};

export default Stapna;
