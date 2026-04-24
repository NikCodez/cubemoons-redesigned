import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Services from "./Services";

function Home() {
  return (
    <>
      <Navbar />
      <hr />
      <Hero />
      <AboutSection />  
      <Services/>
    </>
  );
}

export default Home;