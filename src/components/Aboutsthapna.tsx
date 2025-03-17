"use client";
import React, { useState, useRef, useEffect } from "react";

const AboutCard: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0); // Store current scroll position
  const scrollRef = useRef<HTMLDivElement>(null);

  // Effect to update position when paused
  useEffect(() => {
    if (isPaused && scrollRef.current) {
      const computedStyle = window.getComputedStyle(scrollRef.current);
      const matrix = new DOMMatrix(computedStyle.transform);
      setOffset(matrix.m42); // Get current translateY value
    }
  }, [isPaused]);

  // Toggle scrolling animation
  const toggleScroll = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div
      className="w-full max-h-xl max-w-2xl p-8 border-2 border-red-500 rounded-xl bg-transparent backdrop-blur-md text-white cursor-pointer"
      onClick={toggleScroll} // Toggle animation on tap
    >
      {/* 🔹 Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">About Sthapna</h2>

      {/* 🔹 Scrollable Content */}
      <div className="relative h-[640px] overflow-hidden">
        <div
          ref={scrollRef}
          className="absolute top-0 left-0 w-full"
          style={{
            transform: `translateY(${offset}px)`,
            animation: isPaused
              ? "none"
              : `scroll 35s linear infinite`,
          }}
        >
          <div className="pb-6">
            <p className="text-base leading-relaxed">
              <b>Sthapna: The Grand Celebration of Civil Engineering at VSSUT, Burla</b>
              <br />
              Civil Engineering is more than just construction—it is the art and science of shaping the world. 
              Sthapna, the prestigious Civil Engineering Fest of VSSUT, Burla, celebrates this spirit by bringing 
              together students, professionals, and visionaries to explore innovative solutions and groundbreaking ideas.
              
              Organized by the Department of Civil Engineering, Sthapna is a tribute to infrastructure, sustainability, 
              and resilience. It fosters technical brilliance through competitions, workshops, research showcases, and 
              industry interactions, shaping the future of civil engineering. 

              The fest serves as a confluence of young minds and experts, featuring national-level symposia, panel 
              discussions, and expert talks on emerging trends like smart cities, disaster resilience, and green architecture. 
              Technical competitions challenge participants to devise innovative solutions, while the cultural night offers a 
              creative escape with music, art, and performances. 

              A key highlight of Sthapna is its commitment to sustainability, promoting zero-waste initiatives, eco-friendly 
              materials, and awareness campaigns on green infrastructure. By blending knowledge, creativity, and responsibility, 
              Sthapna is more than just a fest—it is a movement towards a sustainable and technologically advanced future. 
              
              Sthapna: Building More Than Structures, Building Legacies.
            </p>

            {/* 🔹 Duplicate content for seamless looping */}
            <p className="text-base leading-relaxed mt-6">
              <b>Sthapna: The Grand Celebration of Civil Engineering at VSSUT, Burla</b>
              <br />
              Civil Engineering is more than just construction—it is the art and science of shaping the world. 
              Sthapna, the prestigious Civil Engineering Fest of VSSUT, Burla, celebrates this spirit by bringing 
              together students, professionals, and visionaries to explore innovative solutions and groundbreaking ideas.
              
              Organized by the Department of Civil Engineering, Sthapna is a tribute to infrastructure, sustainability, 
              and resilience. It fosters technical brilliance through competitions, workshops, research showcases, and 
              industry interactions, shaping the future of civil engineering. 

              The fest serves as a confluence of young minds and experts, featuring national-level symposia, panel 
              discussions, and expert talks on emerging trends like smart cities, disaster resilience, and green architecture. 
              Technical competitions challenge participants to devise innovative solutions, while the cultural night offers a 
              creative escape with music, art, and performances. 

              A key highlight of Sthapna is its commitment to sustainability, promoting zero-waste initiatives, eco-friendly 
              materials, and awareness campaigns on green infrastructure. By blending knowledge, creativity, and responsibility, 
              Sthapna is more than just a fest—it is a movement towards a sustainable and technologically advanced future. 
              
              Sthapna: Building More Than Structures, Building Legacies.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Tailwind CSS Keyframe Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateY(0%); }
            to { transform: translateY(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default AboutCard;
