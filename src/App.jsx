
import Home from "./pages/Home";
import About from "./components/home/About";
import Contact from "@/pages/Contact";
import Vision from "@/pages/Vision";
import Leadership from "./pages/Leadership";
import Process from "./pages/Process";
import Awards from "./pages/Awards";
import OurTeam from "./pages/OurTeam";
import { Route , Routes } from "react-router-dom" ;


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/process" element={<Process />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
  );
}

export default App;