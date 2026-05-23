
import Home from "./pages/Home";
import About from "./components/home/About";
import Contact from "@/pages/Contact";
import Vision from "@/pages/Vision";
import Leadership from "./pages/Leadership";
import { Route , Routes } from "react-router-dom" ;


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
  );
}

export default App;