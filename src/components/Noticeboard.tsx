import React from "react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const NoticeBoardCard: React.FC = () => {
  const notices = [
    {
      title: "Civil-Secretaries 2025",
      description:
        "Secretaries For Session of 2025",
      // pdfLink: "https://i.postimg.cc/dt3Lb913/Civil-Secretaries-2025.png",
      pdfLink: "",
    },
    {
      title: "Study Tour Jharsuguda",
      description:
        "Industrial Tour For Pre-Final Year Students",
        pdfLink: "https://i.postimg.cc/mrScfLvN/Study-Tour-Jharsuguda.png",
    },
    
  ];

  return (
    <div className="w-full max-w-2xl border-2 border-red-500 rounded-xl bg-black bg-opacity-40 backdrop-blur-lg p-6 relative overflow-hidden">
      {/* 🔹 Heading */}
      <h2 className="text-3xl font-bold text-center text-white mb-4 tracking-widest">
        NOTICE BOARD
      </h2>

      {/* 🔹 Scrollable Notice List (Scrollbar Hidden) */}
      <div className="h-[500px] overflow-y-auto pr-3 custom-scrollbar-hidden space-y-4">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="p-4 bg-gray-900 bg-opacity-70 rounded-lg border border-gray-700 shadow-lg transform transition hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-red-400">{notice.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{notice.description}</p>

            {/* 🔹 PDF & External Links */}
            <div className="mt-2 flex space-x-3">
              {notice.pdfLink && (
                <a
                  href={notice.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 flex items-center space-x-1"
                >
                  <FaFilePdf /> <span>View PDF</span>
                </a>
              )}
              {/* {notice.externalLink && (
                <a
                  href={notice.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                >
                  <FaExternalLinkAlt /> <span>Read More</span>
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoardCard;
