import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Coordinator } from "../types";
import Coordinators from "../data/coordinator";

type CoordinatorProps = {
  coordinator: Coordinator;
};

const CoordinatorCard = ({ coordinator }: CoordinatorProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Subtle hover effect
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="relative  bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-300
                 w-full max-w-xs flex flex-col items-center text-center text-gray-900
                 hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Profile Image */}
      <img
        src={coordinator.img_url}
        alt={coordinator.name}
        className="w-24 h-24 object-cover rounded-full border-4 border-red-500 shadow-md"
      />

      {/* Name & Role */}
      <h3 className="mt-4 text-lg text-white sm:text-xl font-bold tracking-wide">{coordinator.name}</h3>
      <p className="text-white text-sm sm:text-base">{coordinator.position}</p>

      {/* Social Media Icons */}
      <div className="mt-4 flex gap-6 text-xl text-white">
        <a
          href={coordinator.insta}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href={coordinator.linkdin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${coordinator.email}`}
          className="hover:text-yellow-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.div>
  );
};

const CoordinatorsList = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Society Coordinators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {Coordinators.map((coordinator, index) => (
          <CoordinatorCard key={index} coordinator={coordinator} />
        ))}
      </div>
    </div>
  );
};

export default CoordinatorsList;
