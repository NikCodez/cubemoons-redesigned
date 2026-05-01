import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Services from "../components/home/Services";
import Industries from "../components/home/Industries";
import FeatureCard from "../components/home/FeatureCard";
import Projects from "../components/home/Projects";
import Blog from "../components/home/Blog";
import CTA from "../components/home/homepagecta";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />  
      <Services/>
      <Industries/>
      <FeatureCard/>
      <Projects/>
      <Blog/>
      <CTA/>
      <ContactSection/>
    </>
  );
}

export default Home;