import heroImg from "@/assets/images/hero section image.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="home" id="hero">
      <div className="hero-content">
        <h2>Your Next Breakthrough,<br /> Powered By AI</h2>
        <p>We help businesses harness the power of AI to work smarter, scale <br /> faster, and innovate boldly using custom automation & intelligent <br /> solutions.</p>

        <div className="hero-buttons">
          <button className="call-btn" onClick={() =>  navigate("/contact")}>Book a Call</button>
          <button className="explore-btn">Explore Services</button>
        </div>
      </div> 
      <div className="hero-image">
      <img src={heroImg} />
      </div>
    </section>
  );
}
export default Hero;


