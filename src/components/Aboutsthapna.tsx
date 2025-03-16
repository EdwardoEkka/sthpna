import React, { useEffect, useRef } from "react";

const AboutCard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollAmount = 0;

    const startScrolling = () => {
      const scrollContent = () => {
        if (scrollElement) {
          scrollAmount += 0.5; // Smaller increment for smoother scrolling
          if (scrollAmount >= scrollElement.scrollHeight - scrollElement.clientHeight) {
            scrollAmount = 0;
          }
          scrollElement.scrollTo({ top: scrollAmount, behavior: "smooth" });
        }
      };

      const interval = setInterval(scrollContent, 30); // Slightly slower interval for smooth effect

      return () => clearInterval(interval);
    };

    const timeout = setTimeout(() => {
      startScrolling();
    }, 1400); // 1.4-second delay before scrolling starts

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-2xl p-8 border-2 border-red-500 rounded-xl bg-transparent backdrop-blur-md text-white">
      {/* 🔹 Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">About Sthapna</h2>

      {/* 🔹 Scrollable Content */}
      <div
        ref={scrollRef}
        className="h-96 overflow-hidden pr-4 scrollbar-hide"
      >
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
      </div>
    </div>
  );
};

export default AboutCard;
