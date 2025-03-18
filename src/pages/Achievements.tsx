import React from "react";

const Achievement = () => {
    const content = [
        {
          text: "VSSUT Ultratech Centre of Excellence for Advanced Construction Materials and Technology was inaugurated with great enthusiasm and reverence on 9th January, 2025. The lamp lighting ceremony began the event with the presence of distinguished dignitaries, including Prof. Bibhuti Bhushan Pati, Vice-Chancellor of VSSUT; Mr. Pradip Dang, Registrar, VSSUT; Mr. Pradip Kumar Jha, Zonal Head (Technical), Ultratech Cement Ltd.; Dr. S.S. Das, Head of the Department of Civil Engineering; and Dr. Bharati Mahapatra from the Department of Architecture.",
          img: "/imgs/achievement/img1.jpg",
        },
        {
          text: "The Centre of Excellence is visualized as an innovative platform that bridges academia and industry through research, innovation, and hands-on training in modern construction materials and sustainable technologies. It aims to equip students with advanced knowledge and practical expertise to meet the demands of the evolving construction industry. As part of the event, the academic achievements of student toppers from the Civil Engineering and Architecture departments were celebrated. The dignitaries felicitated the toppers inspiring the gathering through their acknowledgment of academic excellence",
          img: "/imgs/achievement/img2.jpg",
        },
        {
          text: "A prominent hallmark of the ceremony was the signing of a Memorandum of Understanding (MoU) between VSSUT, represented by Vice-Chancellor Prof. Pati, and Ultratech Cement Ltd., represented by Mr.Pradip Kumar Jha. The present MoU entails a commitment from both parties toward furthering research and learning in the construction sector. This ended with a vote of thanks wherein all those present were acknowledged with a grateful heart. The functions were completed by inaugurating the Centre of Excellence officially by the dignitaries. This initiative will hopefully be something that will set a new horizon in construction education at VSSUT, innovation and significantly contribute to the betterment of infrastructure development in the country.",
          img: "/imgs/achievement/img3.jpg",
        },
      ];
    
  return (
    <div className=" bg-white/10 backdrop-blur-lg max-w-7xl mx-auto p-6 text-white  my-10">
    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 uppercase">
      VSSUT-Ultratech Centre of Excellence
    </h1>

    {/* Zig-Zag Sections */}
    <div className="space-y-12">
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <img src={item.img} alt="Event" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <p className="w-full md:w-1/2 text-lg leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Achievement;
