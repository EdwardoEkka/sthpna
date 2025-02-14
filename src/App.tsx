import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Students from "./pages/students";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Faculty from "./pages/Faculty";
import About from "./pages/About";
import Stapna from "./pages/Stapna";

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
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
