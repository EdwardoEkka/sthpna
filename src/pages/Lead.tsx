import React from "react";
import ProfileCard from "../components/developer";
import GraphCard from "../components/graphics";
import GraphicLeadList from "../components/graphicLead";
import ContainerWriterList from "../components/containerWriter";
import CoordinatorsList from "../components/coordinators";
import VideographyList from "../components/vedioGraphy";
import ContentWriterL from "../components/cwLead";
import PhotographyLeadList from "../components/Photography";
import Marketing from "../components/MarketingLead";
import MarketMemberList from "../components/Marketing";


const Lead = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg min-h-screen text-white flex flex-col items-center">
      {/* 🔹 Coordinators Section */}
      <section className="py-10 ">
        <CoordinatorsList />
      </section>

      {/* 🔹 Developer & Designer Section */}
      <section className="w-full flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
         Website : Developer & Designer
        </h1>

        {/* 🔹 Centered Profile Cards */}
        <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-6">
          <ProfileCard />
        </div>
      </section>
      {/* 🔹 Graphic Designer Section */}
      <section className="w-full flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Graphic Designer
        </h1>

        {/* 🔹 Leads (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 ml-6">LEADS:</h2>
          <div className="flex flex-wrap justify-center items-center gap-6 w-full">
            <GraphicLeadList />
          </div>
        </div>

        {/* 🔹 Members (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6 ">
            MEMBERS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <GraphCard />
          </div>
        </div>
      </section>

      {/* 🔹 Contain writer Section */}
      <section className="w-full flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Content Writer
        </h1>

        {/* 🔹 Leads (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6">
            LEADS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 w-full">
            <ContentWriterL />
          </div>
        </div>

        {/* 🔹 Members (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6">
            MEMBERS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <ContainerWriterList />
          </div>
        </div>
      </section>

      {/* 🔹 Contain writer Section */}
      <section className="w-full flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Art of Photography & Videography
        </h1>

        {/* 🔹 Leads (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6">
            LEADS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 w-full">
            <PhotographyLeadList />
          </div>
        </div>

        {/* 🔹 Members (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6">
            MEMBERS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <VideographyList />
          </div>
        </div>


        <h1 className="text-3xl md:text-4xl font-bold text-center my-10 mt-32">
          Marketing & Sponsorship
        </h1>
        {/* 🔹 Leads (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6">
            LEADS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 w-full">
            <Marketing />
          </div>
        </div>

        {/* 🔹 Members (Centered) */}
        <div className="w-full max-w-4xl flex flex-col items-start mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 ml-6">
            MEMBERS :
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <MarketMemberList />
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default Lead;
