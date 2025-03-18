import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Students from "./pages/students";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Faculty from "./pages/Faculty";
import About from "./pages/About";
import Stapna from "./pages/Stapna";
import Btech from "./pages/Btech";
import Mtech from "./pages/Mtech";
import Lead from "./pages/Lead";
import Btechfinal from "./pages/Btechfinal";
import Btechprefinal from "./pages/Btechpre-final";
import Btechfirst from "./pages/Btechfirst";
import Btechsecond from "./pages/Btechsecond";
import Phd from "./pages/phd";
import Achievement from "./pages/Achievements";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/about" element={<About />} />
        <Route path="/sthapna" element={<Stapna />} />
        <Route path="/btech" element={<Btech/>}/>
        <Route path="/students/mtech" element={<Mtech/>}/>
        <Route path="/students/lead" element={<Lead/>}/>
        <Route path="/students/btech/2025" element={<Btechfinal/>}/>
        <Route path="/students/btech/2026" element={<Btechprefinal/>}/>
        <Route path="/students/btech/2028" element={<Btechfirst/>}/>
        <Route path="/students/btech/2026" element={<Btechprefinal/>}/>
        <Route path="/students/btech/2027" element={<Btechsecond/>}/>
        <Route path="/students/phd" element={<Phd/>}/>
        <Route path="/academic/achievement" element={<Achievement/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
