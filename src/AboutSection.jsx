import { Link } from "react-router-dom";
import FounderImg from "./assets/images/Founder Image.png"

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-top">
          <h4>About Us</h4>

          <p>
            Cubemoons works with startups, growing businesses, and established
            organizations <br /> across India and global markets to solve complex
            technology challenges and enable <br />sustainable growth. Our expertise
            spans around AI-driven systems, Web and Mobile <br />engineering,
            Cloud-native platforms and Strategic technology consulting. <br />
            Enabling businesses to improve performance, strengthen digital
            operations, and scale <br />with confidence.
          </p>
        </div>

        <a href="/about" className="learn-more">Learn More ↗</a>

        <div className="about-bottom">

          {/* LEFT CARD */}
          <div className="testimonial">
            <p className="stars">★★★★★</p>

            <p className="quote">
              “Cubemoons is an umbrella. And under it, anyone with an <br /> idea,
              the enthusiasm to chase it, and the grit to stick with <br /> it,
              has a home. Cubemoons was never just a business <br />idea.”
            </p>

            <div className="user">
              <img src={FounderImg} alt="FounderImg"/>
              <div>
                <h5>Amaan Khan</h5>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="stats">
            <div className="card blue">
              120+
              <span>Completed Projects</span>
            </div>

            <div className="card black">
              80%
              <span>Client Satisfaction</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;