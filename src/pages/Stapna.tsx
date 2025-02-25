import React from 'react';
import { motion } from 'framer-motion';
import EventList from '../components/events';

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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
            STHAPNA
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-gray-300">
            Celebrating Innovation & Creativity
          </p>
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

