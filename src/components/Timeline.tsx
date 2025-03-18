"use client";
import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    day: "Day 1",
    date: "March 20, 2025",
    schedule: [
      { time: "10:00 AM", event: "Opening Ceremony" },
      { time: "12:00 PM", event: "Keynote Speech" },
      { time: "3:00 PM", event: "Networking Session" },
      { time: "6:00 PM", event: "Evening Gala" },
    ],
  },
  {
    day: "Day 2",
    date: "March 21, 2025",
    schedule: [
      { time: "9:00 AM - 10:00 AM", event: "Technical Workshop" },
      { time: "11:30 AM", event: "Panel Discussion" },
      { time: "2:00 PM", event: "Startup Pitch" },
      { time: "5:00 PM", event: "Cultural Night" },
    ],
  },
  {
    day: "Day 3",
    date: "March 22, 2025",
    schedule: [
      { time: "10:00 AM", event: "Hackathon Finals" },
      { time: "1:00 PM", event: "Award Ceremony" },
      { time: "4:00 PM", event: "Closing Remarks" },
    ],
  },
];

const TimelineCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="shadow-lg border-2 border-red-500 rounded-2xl p-6 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        📅 3-Day Event Timeline
      </h2>

      {/* Scrollable Container - Completely Hidden Scrollbar */}
      <div className="max-h-[660px] overflow-y-auto pr-3 custom-scrollbar-hidden">
        {events.map((dayEvent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="mb-6"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {dayEvent.day} - {dayEvent.date}
            </h3>
            <ul className="mt-2 space-y-2">
              {dayEvent.schedule.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {item.time}
                  </span>
                  <span className="flex-1 font-semibold text-gray-900">
                    {item.event}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineCard;
