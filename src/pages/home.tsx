import { Building2, Users, Calendar, Trophy } from "lucide-react";
import HomeCarousel from "../components/home-carousel";
import CoordinatorsList from "../components/coordinators";
import ProfileCard from "../components/developer";
import NoticeBoardCard from "../components/Noticeboard";

function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590596504144-f08686ef0be7?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mt-8">
            <h1 className="text-3xl sm:text-6xl font-bold mb-4 mt-10">CIVIL ENGINEERING</h1>
            <h1 className="text-3xl sm:text-6xl font-bold">SOCIETY</h1>
          </div>
        </div>
      </section>

      

      {/* Notice Board & PDF Section */}
      <section className="w-full p-4 flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-full md:w-[400px] flex flex-col gap-6 ">
          {/* Notice Board */}
          <NoticeBoardCard />
          {/* PDF Box */}
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-md">
            <h2 className="text-xl font-bold mb-3">Brochure & Newsletter</h2>
            <ul className="list-disc pl-5 text-gray-300">
              <li>
                <a href="/path/to/brochure.pdf" className="text-blue-400 hover:underline"> Brochure</a>
              </li>
              <li>
                <a href="https://i.postimg.cc/Y9tSb6Zp/newsletter-Draft.png" className="text-blue-400 hover:underline"> Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Carousel */}
        <div className="w-full md:w-3/5">
          <HomeCarousel />
        </div>
      </section>

      

            {/* HOD & Faculty Section */}
            <section className="py-20">
        <div className="max-w-5xl m-auto px-4 flex flex-col gap-10">
          {/* HOD Card */}
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-md grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
            {/* HOD Image */}
            <div className="w-full flex justify-center md:justify-end">
              <div className="p-2 border rounded-md border-red-600">
                <img
                  src="https://www.vssut.ac.in/faculty/sudhanshu-sekhar-das_photo1449813234.jpg"
                  alt="civil-hod"
                  className="w-[150px] sm:w-[250px] rounded-md object-cover"
                />
              </div>
            </div>
            {/* HOD Details */}
            <div className="col-span-1 md:col-span-2">
              <h1 className="font-bold text-xl mb-2">HEAD OF DEPARTMENT</h1>
              <h2 className="font-bold text-lg mb-2">Prof. Sudhanshu Sekhar Das</h2>
              <p className="text-gray-300 text-justify">
              Welcome to the Department of Civil Engineering at VSSUT, Burla.
                Our vision is to cultivate world-class civil engineers and
                researchers through futuristic education and cutting-edge
                research. We are committed to fostering innovation and
                leadership that addresses global challenges and enhances the
                quality of life. Together, let’s build a sustainable future with
                knowledge, integrity, and excellence.We take pride in our strong
                academic curriculum, advanced labs, and a research-driven
                environment that fosters innovation and critical thinking. With
                dedicated faculty and industry collaborations, we prepare
                students to meet the evolving demands of civil engineering and
                contribute to building a sustainable, resilient future.
              </p>
            </div>
          </div>

          {/* HOP Card */}
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-md grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
            {/* HOP Details */}
            <div className="col-span-1 md:col-span-2 order-2 md:order-1">
              <h1 className="font-bold text-xl mb-2">HEAD OF PROGRAMME</h1>
              <h2 className="font-bold text-lg mb-2">Dr. Debabrata Giri</h2>
              <p className="text-gray-300 text-justify">
              At the Civil Engineering Department of VSSUT, Burla, we believe
                in participative learning and cross-cultural collaboration to
                prepare students for real-world challenges. Through industry
                partnerships and innovative research, we empower our students to
                develop solutions that benefit both society and the environment.
                Let’s continue striving for academic and professional
                excellence.With advanced labs and dedicated faculty, we focus on
                building technical skills, leadership, and ethical practices.
                Our goal is to produce skilled, socially responsible civil
                engineers ready to drive sustainable development globally.
              </p>
            </div>
            {/* HOP Image */}
            <div className="w-full flex justify-center md:justify-start order-1 md:order-2">
              <div className="p-2 border rounded-md border-red-600">
                <img
                  src="https://www.vssut.ac.in/faculty/debabrata-giri_photo1688963757.jpg"
                  alt="civil-hop"
                  className="w-[150px] sm:w-[250px] rounded-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Faculty Advisor Card */}
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-md grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center">
            {/* Faculty Image */}
            <div className="w-full flex justify-center md:justify-end">
              <div className="p-2 border rounded-md border-red-600">
                <img
                  src="https://www.vssut.ac.in/faculty/ramkrishna-dandapat_photo1480014219.jpg"
                  alt="faculty-advisor"
                  className="w-[150px] sm:w-[250px] rounded-md object-cover"
                />
              </div>
            </div>
            {/* Faculty Details */}
            <div className="col-span-1 md:col-span-2">
              <h1 className="font-bold text-xl mb-2">FACULTY ADVISOR</h1>
              <h2 className="font-bold text-lg mb-2">Dr. Ramkrishna Dandapat</h2>
              <p className="text-gray-300 text-justify">
              As faculty, we are dedicated to guiding students towards
                academic excellence and ethical engineering practices. We
                encourage lifelong learning, teamwork, and innovation to help
                our students become future leaders in civil engineering.
                Together, we will push the boundaries of knowledge to create
                meaningful societal impact.With a balance of rigorous coursework
                and practical experience, we prepare students to tackle
                real-world challenges. Our focus on research, sustainability,
                and industry collaboration equips graduates to drive resilient
                infrastructure and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-10">
        <CoordinatorsList />
      </section>
    </div>
  );
}

export default Home;
