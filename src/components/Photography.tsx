import React from "react";
import { motion } from "framer-motion";
import { PhotographyLead as PhotographyType } from "../types";
import PhotographyLead from "../data/Photography";

// Define props type
const PhotographyLeadCard: React.FC<{ lead: PhotographyType }> = ({ lead }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* 🔹 3D Hover Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-300 
                   w-full max-w-xs flex flex-col items-center text-center text-gray-900
                   hover:shadow-2xl transition-shadow duration-300"
      >
        {/* 🔹 Profile Image */}
        <img
          src={lead.img}
          alt={lead.name}
          className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* 🔹 Name */}
        <h3 className="mt-4 text-white text-lg sm:text-xl font-bold tracking-wide">{lead.name}</h3>
      </motion.div>
    </div>
  );
};

const PhotographyLeadList: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {PhotographyLead.map((Photographylead, index) => (
        <PhotographyLeadCard key={index} lead={Photographylead} />
      ))}
    </div>
  );
};

export default PhotographyLeadList;
