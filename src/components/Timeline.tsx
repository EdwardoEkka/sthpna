"use client";
import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    day: "Day 1",
    date: "March 21, 2025",
    schedule: [
      { time: "4:00 - 6:50 PM", event: "Inauguration of Sthapna(AVC HALL)" },
      // { time: "12:00 PM", event: "Keynote Speech" },
      // { time: "3:00 PM", event: "Networking Session" },
      // { time: "6:00 PM", event: "Evening Gala" },
    ],
  },
  {
    day: "Day 2",
    date: "March 22, 2025",
    schedule: [
      { time: "9:00 AM - 10:30 AM", event: " Cad Clash (C-326) " },
      { time: "9:00 AM - 12:00 PM", event: " Build-A-Thon (1st Round)(C-326)" },
      { time: "10:30 AM - 12:30 PM ", event: "Architrivia (Civil Seminar Hall) " },
      { time: "11:00 AM - 1:00 PM", event: "Civil Got Latent (AVC Hall)" },
      { time: "2:00PM - 3:00 PM", event: "Puzzle Quest (C-320)" },
      { time: "3:00PM - 6:00 PM", event: "Civil Talk (AVC Hall)" },
      { time: "5:00PM - 6:00 PM", event: "Constructive Clash (Civil Seminar Hall)  " },
      
    ],
  },
  {
    day: "Day 3",
    date: "March 23, 2025",
    schedule: [
      { time: "9:00 AM - 12:00 AM", event: "Build-A-Thon (2nd Round) (C-230)" },
      { time: "9:00 AM - 10:00 AM", event: "NEXORA (C-329)" },
      { time: "10:30 AM - 12:30 AM", event: "Beat The Clue (Civil Seminar Hall)" },    
      { time: "11:00 AM - 1:00 PM", event: "Sketch Surge (C-320)" },
      { time: "2:00 PM - 2:30 PM", event: "Street Scape (AVC Hall)" },
      { time: "3:00 PM - 5:00 PM", event: "Closing Ceremony (AVC Hall)" },
      { time: "5:00 PM - 7:30 PM", event: "Cultural Activities (AVC Hall)" },
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
