import React from "react";
import { motion } from "framer-motion";
import GraphicDesigner from "../data/Graphicdesigner"; // Importing data
import { GraphicDesigner as GraphicDesignerType } from "../types";

// Define props type
const GraphicDesignerCard: React.FC<{ designer: GraphicDesignerType }> = ({ designer }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* 🔹 3D Hover Card */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-300 
                   w-full max-w-xs flex flex-col items-center text-center text-gray-900
                   hover:shadow-2xl transition-shadow duration-300"
      >
        {/* 🔹 Profile Image */}
        <img
          src={designer.img}
          alt={designer.name}
          className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md"
        />

        {/* 🔹 Name */}
        <h3 className="mt-4 text-lg sm:text-xl font-bold tracking-wide">{designer.name}</h3>
      </motion.div>
    </div>
  );
};

const GraphicDesignerList: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {GraphicDesigner.map((graphicdesigner, index) => (
        <div 
          key={index} 
          className={`${index === 12 ? "col-span-full flex justify-center" : ""}`}
        >
          <GraphicDesignerCard designer={graphicdesigner} />
        </div>
      ))}
    </div>
  );
};


export default GraphicDesignerList;
