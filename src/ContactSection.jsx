  import logo from "../public/cubemoons logo.png";
  import X from "../public/X logo.png";
  import whatsapp from "../public/Whatsapp logo.png";
  import youtube from "../public/youtube logo.png";
  import LinkedIn from "../public/LinkedIn logo.png";
  import Instagram from "../public/Instagram logo.png";
  import Facebook from "../public/Facebook logo.png";

 import { useEffect, useRef, useState } from "react";

  function ContactSection() {

   const bgRef = useRef();
const sectionRef = useRef();
const [animate, setAnimate] = useState(false);

      useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
          setAnimate(true);   // animate when visible
        } else {
          setAnimate(false);  // reset when out
        }
      });
    },
    {
      threshold: 0.5, //50% visibility
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

    
    return (
      <>
        {/* TOP CTA SECTION */}
        <section className="contact-cta">
          <div className="cta-container">
            
            <div className="cta-left">
              <h2>
                Be Part of the Journey Stay <br />
                Connected With Us
              </h2>
              <p>
                Get exclusive updates and content you won’t find anywhere else.
              </p>
            </div>

            <div className="cta-right">
              <div className="input-box">
                <input type="email" placeholder="youremail@gmail.com" />
                <button>Submit →</button>
              </div>
              <span className="small-text">
                Thoughtfully curated updates, delivered occasionally.
              </span>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer ref={sectionRef} className="footer">

          {/* BIG BACKGROUND TEXT */}
          <h1 ref={bgRef} className={`footer-bg ${animate ? "animate-up" : ""}`}>
              <span className="stroke">CUBEMOONS</span>
              <span className="fill">CUBEMOONS</span>
          </h1>

          <div className="footer-container">

            {/* LEFT */}
            <div className="footer-col">
              <img src={logo} alt="logo" className="footer-logo" />

              <p className="footer-desc">
                Want to make sure we’re the <br /> right fit? Book a discovery call!
              </p>

              <p className="footer-sub">
                Find out how you can up your <br /> design game, forever.
              </p>

              <button className="book-btn">Book a call →</button>

              <div className="socials">
                <a href="https://x.com/Cubemoons_"><img src={X} alt="X" /></a>
                <a href="https://www.youtube.com/@cubemoons"><img src={youtube}alt="youtube" /></a>
                <a href="#"><img src={whatsapp} alt="Whatsapp" /></a>
              
                <a href="https://www.linkedin.com/company/cubemoons/posts/?feedView=all"><img src={LinkedIn} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/cube.moons/"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://www.facebook.com/people/Cubemoons/61577696759028/#"><img src={Facebook} alt="Facebook" /></a>
              </div>
            </div>

            {/* SERVICES */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">App Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">IT Consultancy</a></li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Consulting</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div className="footer-col">
              <h4>Industries</h4>
              <ul>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">Retail & E-Commerce</a></li>
                <li><a href="#">Automobiles</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Education</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>📍 4th floor, MR DIY Building, beside Westside Anupam Garden, Samta Colony, Raipur, Chhattisgarh 492001  </li>
                <li>📞 +91-9039034412  </li>
                <li>📞 +91-0771-3176017 </li>
                <li>📞 +91-9039034414  </li>
                <li><a href="mailto:info@cubemoons.com">✉ info@cubemoons.com</a></li>
              </ul>

              <button className="chat-btn">Chat with us</button>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <span>© 2025 Cubemoons Pvt Ltd. All rights reserved.</span>
            <div className="footer-links">
              <span>Software Company in Raipur</span>
              <span>IT Consultancy in Raipur</span>
              <span>Web Development Company Raipur</span>
            </div>
          </div>

        </footer>
      </>
    );
  }

  export default ContactSection;