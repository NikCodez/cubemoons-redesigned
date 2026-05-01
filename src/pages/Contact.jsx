import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import "@/styles/contact-page.css";
import handshake from "@/assets/animations/handshake.gif";
import laptop from "@/assets/animations/laptop.gif";
import gif247 from "@/assets/animations/gif247.gif";
import message from "@/assets/animations/message-popping.gif";
import { useNavigate } from "react-router-dom";


function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/> 

      {/* HERO */}
      <section className="contact-hero">
        <h1>
          <span>Get in Touch</span> with Our <br /> Team
        </h1>
        <p>
          We work closely with teams and businesses to understand their needs,
          answer questions, and deliver the right solutions that drive meaningful outcomes.
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <img src={handshake} alt="handshake" className = "gifs"/>
            <h3>Build with Us</h3>
            <p>Collaborate with developers, explore integrations, and build powerful solutions using our platform.</p>
            <ul>
                <li>Integration help, APIs & use-case guidance</li>
                <li>Developer-first discussions & collaboration</li>
              </ul>
            <button onClick={() =>  navigate("/contact")}>Contact Us →</button>
          </div>

          <div className="contact-card">
            <img src={message} alt="email" className = "gifs msg-gif" />
            <h3>Email Support</h3>
            <p>Direct support from our team for account, billing, or technical issues that need dedicated attention.</p>
            <ul>
                <li>Response time: Within 24 hours</li>
               </ul>
            <button>Send email →</button>
          </div>

          <div className="contact-card">
            <img src={laptop} alt="laptop" className = "gifs laptop-gif"/>
            <h3>Technical Assistance</h3>
            <p>Hands-on help for technical challenges and implementation needs. </p>
            <ul>
                <li>Integration & setup help</li>
                <li>Developer-focused support </li>
              </ul>
            <button>Send email →</button>
          </div>

          <div className="contact-card">
            <img src={gif247} alt="support" className = "gifs"/>
            <h3>Technical Assistance</h3>
            <p>Hands-on help for technical challenges and implementation needs.</p>
            <ul>
                <li>Integration & setup help</li>
                <li>Developer-focused support </li>
              </ul>
            <button href="mailto:support@cubemoons.com">Send email →</button>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-form-section">
        <div className="form-container">

          {/* LEFT FORM */}
          <div className="form-box">
            <h1>Send us a message</h1>
            <p>We’re here to answer your questions, discuss your project, and help <br/> you find the right digital solution.</p>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                      <input type="text" id="name" placeholder="John Carter" />
                     <img src="/User.png" alt="User" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-wrapper">
                     <input type="text" id="phone" placeholder="55456-74890" />
                     <img src="/Mobile.png" alt="Mobile" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" placeholder="If you have more to add, please type it here..."></textarea>
                </div>

            <button className="primary-btn">Get Started</button>
          </div>

          {/* RIGHT INFO */}
          <div className="info-box">
            <h2>More about us</h2>

           <h3> Address </h3>
            <p>
              4th floor, MR DIY Building, beside Westside, 
                 Anupam Garden, Samta Colony,<br />
                  Raipur, Chhattisgarh 492001  
            </p>

            <h3>Information</h3>
            <p>
              +91-9039034414 
              <br />
              info@cubemoons.com
            </p>

              
               <h3> Stay Connected</h3>
            <div className="socials-blue">
              <a href="https://x.com/Cubemoons_"><img src="/x-blue.png" alt="X" /></a>
                <a href="https://www.youtube.com/@cubemoons"><img src="/yt-blue.png" alt="youtube" /></a>
                <a href="#"><img src="/wp-blue.png" alt="Whatsapp" /></a>
              
                <a href="https://www.linkedin.com/company/cubemoons/posts/?feedView=all"><img src="/linkedin-blue.png" alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/cube.moons/"><img src="/insta-blue.png" alt="Instagram" /></a>
                <a href="https://www.facebook.com/people/Cubemoons/61577696759028/#"><img src="/fb-blue.png" alt="Facebook" /></a>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="contact-bottom-cta">
        <div className="cta-texts">
        <h1>Need Expert Support?</h1>
        <p>We’re just one click away — let’s make it happen.</p>
        </div>
        <button onClick={() =>  navigate("/contact")}>Contact Us →</button>
      </section>

      <ContactSection />
    </>
  );
}

export default Contact;