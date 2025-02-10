import { Building2, Users, Calendar, Trophy, HardHat } from "lucide-react";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/home-carousel";

function Home() {
  return (
    <div className="bg-secondary min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590596504144-f08686ef0be7?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-6xl font-bold mb-4">
              CIVIL ENGINEERING
            </h1>
            <h1 className="text-3xl sm:text-6xl font-bold mb-4">SOCIETY</h1>
          </div>
        </div>
      </section>

      <section className="w-full p-4">
        <div className="max-w-5xl m-auto">
          <HomeCarousel/>
        </div>
      </section>

      <section className="py-20 bg-black/100">
        <div className="max-w-5xl m-auto px-4 flex flex-col gap-4 md:gap-6">
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg  rounded-md grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center ">
            <div className="w-full flex col-span-1 items-center justify-center md:justify-end">
              <div className="flex p-2 border rounded-md border-red-600">
                <img
                  src="https://www.vssut.ac.in/faculty/sudhanshu-sekhar-das_photo1449813234.jpg"
                  alt="civil-hod"
                  className="w-[150px] sm:w-[250px] aspect-square rounded-md object-cover"
                />
              </div>
            </div>
            <div className="p-2 col-span-1 md:col-span-2">
            <h1 className="font-bold text-white text-justify text-xl mb-2">
                HEAD OF DEPARTMENT
              </h1>
              <h1 className="font-bold text-white text-justify text-xl mb-2">
                Prof. Sudhanshu Sekhar Das
              </h1>
              <h5 className="font-bold text-white text-justify">
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
              </h5>
            </div>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg  rounded-md grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center ">
            <div className="p-2 col-span-1 md:col-span-2 order-2 md:order-1">
            <h1 className="font-bold text-white text-justify text-xl mb-2">
                HEAD OF PROGRAMME
              </h1>
              <h1 className="font-bold text-white text-justify text-xl mb-2">
                Dr. Debabrata Giri
              </h1>
              <h5 className="font-bold text-white text-justify">
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
              </h5>
            </div>
            <div className="w-full col-span-1 flex items-center justify-center md:justify-start order-1  md:order-2">
              <div className="flex p-2 border rounded-md border-red-600">
                <img
                  src="https://www.vssut.ac.in/faculty/debabrata-giri_photo1688963757.jpg"
                  alt="civil-hod"
                  className="w-[150px] sm:w-[250px] aspect-square rounded-md object-scale-down"
                />
              </div>
            </div>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg  rounded-md grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center ">
            <div className="w-full flex col-span-1 items-center justify-center md:justify-end">
              <div className="flex p-2 border rounded-md border-red-600">
                <img
                  src="https://www.vssut.ac.in/faculty/ramkrishna-dandapat_photo1480014219.jpg"
                  alt="civil-hod"
                  className="w-[150px] sm:w-[250px] aspect-square rounded-md object-cover"
                />
              </div>
            </div>
            <div className="p-2 col-span-1 md:col-span-2">
            <h1 className="font-bold text-white text-justify text-xl mb-2">
                FACULTY ADVISOR
              </h1>
              <h1 className="font-bold text-white text-justify text-xl mb-2">
                Dr. Ramkrishna Dandapat
              </h1>
              <h5 className="font-bold text-white text-justify">
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
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-primary/20 rounded-lg hover:border-primary transition-colors">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Events</h3>
              <p className="text-gray-400">Showcase your engineering skills</p>
            </div>
            <div className="text-center p-6 border border-primary/20 rounded-lg hover:border-primary transition-colors">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Workshops</h3>
              <p className="text-gray-400">Learn from industry experts</p>
            </div>
            <div className="text-center p-6 border border-primary/20 rounded-lg hover:border-primary transition-colors">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guest Lectures</h3>
              <p className="text-gray-400">Gain valuable insights</p>
            </div>
            <div className="text-center p-6 border border-primary/20 rounded-lg hover:border-primary transition-colors">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-gray-400">Win exciting prizes</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HardHat className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-gray-400">
              © 2024 Sthapna. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
