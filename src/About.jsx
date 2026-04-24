import Navbar from "./Navbar";
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