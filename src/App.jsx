import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/home/About";
import Contact from "@/pages/Contact";
import Vision from "@/pages/Vision";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
}

export default App;