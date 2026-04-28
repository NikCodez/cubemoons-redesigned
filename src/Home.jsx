import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Services from "./Services";
import Industries from "./Industries";
import FeatureCard from "./FeatureCard";
import Projects from "./Projects"
import Blog from "./Blog";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <>
      <Navbar />
      <hr />
      <Hero />
      <AboutSection />  
      <Services/>
      <Industries/>
      <FeatureCard/>
      <Projects/>
      <Blog/>
      <ContactSection/>
    </>
  );
}

export default Home;