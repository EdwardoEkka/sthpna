"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const civilRef = useRef(null);
  const isCivilInView = useInView(civilRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-white/10 backdrop-blur-lg min-h-screen text-white p-6">
      {/* 🔹 Image Section (Responsive) */}
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 mt-20">
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcFreVnfeNR7riQfU4VtdmJpm6CtnIO4LVQ&s"
          alt="VSSUT Logo"
          className="md:w-[300px] w-[80%] h-auto rotate-45 shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcFreVnfeNR7riQfU4VtdmJpm6CtnIO4LVQ&s"
          alt="VSSUT Logo"
          className="md:w-[300px] w-[80%] h-auto rotate-45 shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcFreVnfeNR7riQfU4VtdmJpm6CtnIO4LVQ&s"
          alt="VSSUT Logo"
          className="md:w-[300px] w-[80%] h-auto rotate-45 shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* 🔹 Civil Engineering Section */}
      <section ref={civilRef} className="mt-16 px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isCivilInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          About Civil Engineering Society
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isCivilInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
           The Department of Civil Engineering has been in existence since 1956
          with the inception of VSSUT, BURLA and is producing high quality
          technical manpower needed by industry, R&D organizations, and academic
          institutions. The departmental activities embrace Planning, Design,
          Construction and Management. The syllabi of the department have been
          tremendously augmented with many advanced courses. The Department
          offers B.Tech degree in Civil Engineering and M.Tech. degree in Civil
          Engineering with five specializations, i.e., Structural Engineering,
          Geotechnical Engineering, Transportation Engineering, Water Resources
          Engineering., and Environmental Engineering. Besides this, the
          department also offers 5 years Dual Degree B.Tech in Civil Engineering
          and M.Tech in Structural Engineering and Ph. D degree. The B.Tech
          programme of this Department has been accredited under Tier-I program
          by National Board of Accreditation (NBA-Washington Accord) in 2016 for
          five years (2016-2020), which is a rare distinction. With this
          accreditation, the Department of Civil Engineering of VSSUT Burla has
          become an elite member in the club of only twenty reputed Institutions
          across the country which includes National Institutes of Technology
          (NITs). Presently the department has student strength of about 830 out
          of which about 300 students are perusing their Masters and PhD
          degrees. The faculty members of the department are well qualified
          having their highest degrees from reputed international and national
          institute like IITs and NITs. Moreover, seventeen out of existing 29
          faculty members are with PhD qualification.
        </motion.p>
      </section>

      {/* 🔹 Vision & Mission Section */}
      <section className="mt-16 px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isCivilInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Department's Vision & Mission
        </motion.h1>

        <motion.h2 className="text-2xl font-semibold mb-4">Vision</motion.h2>
        <motion.p className="text-lg leading-relaxed">
        To emerge as an internationally acclaimed Civil Engineering Department
          for imparting futuristic technical education and creation of vibrant
          research enterprise to create quality civil engineering and
          researchers, truly world class leaders and unleash technological
          innovations to serve the global society and improve the quality of
          life.
        </motion.p>

        <motion.h2 className="text-2xl font-semibold mt-6 mb-4">Mission</motion.h2>
        <motion.ul className="list-disc pl-6 space-y-2">
        <li>
            Participative learning in a cross­cultural environment that promotes
            the learning beyond the class room.
          </li>
          <li>
            {" "}
            Collaborative partnership with industries and academia within and
            outside the country in learning and research.
          </li>
          <li>
            {" "}
            Encouraging innovative research and consultancy through the active
            participation and involvement of all faculty members.
          </li>
          <li>
            Facilitating technology transfer, innovation and economic
            development to flow as natural results of research where ever
            appropriate.
          </li>
          <li>
            Expanding curricula to cater broader perspectives. Creation of
            service opportunities for upliftment of the society at large.
          </li>
        </motion.ul>
      </section>

      {/* 🔹 Programme Educational Objectives */}
      <section className="mt-16 px-4 max-w-5xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
          Programme Educational Objectives (PEOs)
        </motion.h2>
        <motion.ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
        <li>
            PEO-1: To lead a successful career in industries or pursue higher
            studies or entrepreneurial endeavors.
          </li>
          <li>
            {" "}
            PEO-2: To offer techno commercially feasible and socially acceptable
            solutions to real life engineering problems..
          </li>
          <li>
            {" "}
            PEO-3: To demonstrate effective communication skill, professional
            attitude, and a desire to learn.
          </li>
          <li>
            PEO-4: To have a reputation as a source of innovative solutions for
            challenging problems.
          </li>
          <li>PEO-5: To be a trustworthy and respectful member in society.</li>
        </motion.ul>
      </section>

      {/* 🔹 Programme Outcomes */}
      <section className="mt-16 px-4 max-w-5xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
          Programme Outcomes (POs)
        </motion.h2>
        <motion.ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
        <li>
            Ability to apply knowledge of mathematics, science and engineering
            to solve complex problems in civil engineering
          </li>
          <li>
            {" "}
            Ability to identify, formulate, and solve complex civil engineering
            problems using first principle of mathematics, basic science &
            engineering
          </li>
          <li>
            {" "}
            Ability to design, implement & evaluate civil engineering projects
            to meet societal and environmental needs.
          </li>
          <li>
            Ability to design and conduct complex civil engineering experiments
            as well as to analyze and interpret the experimental data.
          </li>
          <li>
            Ability to assess impact of contemporary social issues on
            professional practice.
          </li>
          <li>
            Ability to recognize the sustainability and environmental impact of
            the engineering solutions
          </li>
          <li>
            Ability to follow prescribed norms, responsibilities and ethics in
            engineering practices.
          </li>
          <li>Ability to work effectively as an individual and in a team.</li>
          <li>
            Ability to communicate effectively through oral, written and
            pictorial means with engineering community and the society at large.
          </li>
          <li>
            Ability to recognize the need for and to engage in life­long
            learning.
          </li>
          <li>
            Ability to understand and apply engineering and management
            principles in executing project.
          </li>
        </motion.ul>
      </section>
    </div>
  );
};

export default About;
