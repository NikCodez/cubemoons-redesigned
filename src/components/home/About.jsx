import Navbar from "@/components/Navbar";
import AboutSection from "./AboutSection";

function About() {
  return (
    <>
      <Navbar />
      <AboutSection />   {/* reuse same UI */}
    </>
  );
}

export default About;