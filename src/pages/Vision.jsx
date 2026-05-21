import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import earth from "@/assets/images/Earth.png";
import visionImg from "@/assets/images/vision-img.jpg";
import missionImg from "@/assets/images/mission-img.jpg";
import valuesImg from "@/assets/images/values-img.jpg";
import paperplane from "@/assets/animations/paper-plane.gif";
import ownershipImg from "@/assets/images/ownership.jpg";
import longtermImg from "@/assets/images/longterm.jpg";
import honestyImg from "@/assets/images/honesty.jpg";
import curiosityImg from "@/assets/images/curiosity.jpg";
import "@/styles/vision.css";

function Vision() {

const valuesData = [
  {
    title: "Ownership and accountability",
    desc: "We help businesses scale through data-driven growth strategies, market positioning, customer acquisition planning, and performance-focused digital execution.",
    image: ownershipImg
  },

  {
    title: "Long-term thinking",
    desc: "We build for the long term, not just the next milestone. Our technology decisions are made to serve you well into the future—not simply to get you across the finish line today. This often means pushing back on shortcuts, and we’re comfortable doing so when it’s in your best interest.",
    image: longtermImg
  },

  {
    title: "Honesty over convenience",
    desc: "We help businesses scale through data-driven growth strategies, market positioning, customer acquisition planning, and performance-focused digital execution.",
    image: honestyImg
  },

  {
    title: "Curiosity and continuous learning",
    desc: "We help businesses scale through data-driven growth strategies, market positioning, customer acquisition planning, and performance-focused digital execution.",
    image: curiosityImg
  }
];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="vision-hero">

        <div className="vision-gradient"></div>

        <div className="vision-content">
          <h1>
            Empowering <span className="heading">Businesses</span> with Scalable <br />
            Digital Solutions and a Presence That <br />
            Extends <span className="heading">Beyond
            <img src={paperplane} alt="paper plane" className="plane"/>
            Boundaries</span>
          </h1>
          </div>

             <div className="earth-wrapper">
             <img src={earth} alt="earth" className="earth-img" />
             </div>

           
          <div className="vision-bottom-text">
          <p>
            <span>Cubemoons</span> works with <span>startups, growing businesses, and established organizations</span> across India and global markets to solve complex technology challenges and enable sustainable growth. Our expertise <span> spans Web and Mobile engineering, Cloud-native platforms, AI-driven systems, and Strategic technology consulting,</span> enabling businesses to improve performance, strengthen digital operations, and scale with confidence.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="vision-main">
        <div className="vision-cards">
        {/* CARD 1 */}
        <div className="vision-card dark-card">
          <div className="vision-img">
          <img src={visionImg} alt="vision" />
          </div>

          <div className="vision-text">
            <h2>Our Vision</h2>

            <p>
              To be the most trusted technology partner for businesses that are serious about growth. We believe that great software is not built by the most technically skilled team alone it is built by the team that listens the hardest, thinks the clearest, and cares the most about the outcome. That is what we are building at Cubemoons, every single day.At the heart of everything we build are people their challenges, their goals, and their stories.We’re here to make technology feel simpler, more helpful, and genuinely impactful in everyday work.
            </p>

            <p>
              Our work is driven by curiosity and a constant desire to simplify the complex without losing depth or impact. In everything we do, we aim to build lasting partnerships rooted in trust, transparency, and shared growth.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="vision-card light-card">
          <div className="vision-img">
          <img src={missionImg} alt="mission" />
          </div>

          <div className="vision-text">
            <h2>Our Mission</h2>

            <p>
              We design, build, and deliver digital solutions that help businesses operate more efficiently, serve their customers better, and scale with confidence. We partner closely with every client we work with, bringing transparency, technical depth, and genuine care to each engagement from the smallest internal tool to the most complex enterprise platform. <br />
              At our core, we focus on removing friction. Every system we create is intended to make things easier, faster, and more reliable than before. If we cannot clearly explain how a piece of technology improves a business outcome, we question whether it should be built at all.
            </p>

            <p>
              By combining practical thinking with deep technical expertise, we aim to deliver solutions that are not only effective today but resilient for the future.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="vision-card dark-card">
          <div className="vision-img">
          <img src={valuesImg} alt="values" />
          </div>

          <div className="vision-text">
            <h2>Our Values</h2>

            <p>
              We believe the best technology is the kind that disappears it just works, without requiring users to think too hard about how it works. We bring that same principle to how we communicate with clients. No jargon, no vague promises, no complexity for its own sake. We keep things simple, honest, and focused on what truly matters delivering real value. Because at the end of the day, it’s not just about technology, it’s about making people’s work easier and better.
            </p>

            <p>
             We avoid unnecessary complexity, choosing practical and thoughtful approaches that deliver meaningful results. Above all, we stay focused on the human side of technology, creating experiences that feel natural, useful, and genuinely supportive.
            </p>

          </div>
        </div>
      </div>
        {/* VALUES SECTION */}
        <div className="future-section">
          <h2>We build for tomorrow, not just today</h2>

          <p>
            Every decision is made with the future in mind. We prioritize sustainable <br /> solutions over quick wins, ensuring lasting value for our clients and our team.
          </p>

          <div className="future-list">

  {valuesData.map((item, index) => (

    <div
      className="future-item"
      key={index}
    >

      <div
        className="future-bg"
        style={{
          backgroundImage: `url(${item.image})`
        }}
      ></div>

      <h3>{item.title}</h3>

      <p>{item.desc}</p>

    </div>

  ))}

</div>
        
        </div>

      </section>

      <ContactSection />
    </>
  );
}

export default Vision;