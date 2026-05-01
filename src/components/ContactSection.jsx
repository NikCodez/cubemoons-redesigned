import { useEffect, useRef, useState } from "react";
import "@/styles/contactsection.css";
import { useNavigate } from "react-router-dom";

  function ContactSection() {
  const navigate = useNavigate();

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
              <img src="/cubemoons logo.png" alt="logo" className="footer-logo" />

              <p className="footer-desc">
                Want to make sure we’re the <br /> right fit? Book a discovery call!
              </p>

              <p className="footer-sub">
                Find out how you can up your <br /> design game, forever.
              </p>

              <button className="book-btn" onClick={() =>  navigate("/contact")}>Book a call →</button>

              <div className="socials">
                <a href="https://x.com/Cubemoons_"><img src="/X logo.png" alt="X" /></a>
                <a href="https://www.youtube.com/@cubemoons"><img src="/youtube logo.png" alt="youtube" /></a>
                <a href="#"><img src="/Whatsapp logo.png" alt="Whatsapp" /></a>
              
                <a href="https://www.linkedin.com/company/cubemoons/posts/?feedView=all"><img src="/Linkedin logo.png" alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/cube.moons/"><img src="/Instagram logo.png" alt="Instagram" /></a>
                <a href="https://www.facebook.com/people/Cubemoons/61577696759028/#"><img src="/Facebook logo.png" alt="Facebook" /></a>
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

              <button className="chat-btn" onClick={() =>  navigate("/contact")}>Chat with us</button>
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