import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import TeamMain from "@/assets/images/Team-main.png";
import team1 from "@/assets/images/team1.jpg";
import team2 from "@/assets/images/team2.jpg";
import team3 from "@/assets/images/team3.jpg";
import team4 from "@/assets/images/team4.jpg";
import team5 from "@/assets/images/team5.jpg";
import "@/styles/ourteam.css";

function OurTeam() {
    const navigate = useNavigate();

    const teamRef = useRef(null);
const [showTeam, setShowTeam] = useState(false);

useEffect(() => {

  const observer = new IntersectionObserver(

    ([entry]) => {

      if (entry.isIntersecting) {

        setShowTeam(true);
      }
    },

    {
      threshold: 0.35,
    }
  );

  if (teamRef.current) {

    observer.observe(teamRef.current);
  }

  return () => observer.disconnect();

}, []);

  return (

    <>
      <Navbar variant="light" />

      <main className="ourteam-page">

       <section className="team-hero">

  <div className="team-slider top-slider">

    <div className="team-track">

      <img src={team1} alt="" />
      <img src={team2} alt="" />
      <img src={team3} alt="" />
      <img src={team4} alt="" />
      <img src={team5} alt="" />

      {/* DUPLICATE FOR SEAMLESS LOOP */}

      <img src={team1} alt="" />
      <img src={team2} alt="" />
      <img src={team3} alt="" />
      <img src={team4} alt="" />
      <img src={team5} alt="" />

    </div>

  </div>

  <h1>Our Team</h1>

  <div className="team-slider bottom-slider">

    <div className="team-track reverse-track">

      <img src={team1} alt="" />
      <img src={team2} alt="" />
      <img src={team3} alt="" />
      <img src={team4} alt="" />
      <img src={team5} alt="" />

      {/* DUPLICATE */}

      <img src={team1} alt="" />
      <img src={team2} alt="" />
      <img src={team3} alt="" />
      <img src={team4} alt="" />
      <img src={team5} alt="" />

    </div>

  </div>

</section>

        <section className="team-intro">

          <h2>
            The <span>People</span> who make
            <br />
            Cubemoons what it is
          </h2>

          <p>
            Cubemoons is built on its people. We are
            <span>
              {" "}a team of software engineers,
              UI/UX designers, cloud architects,
              DevOps engineers, digital marketers,
              QA specialists, project managers,
              and business consultants
            </span>
            {" "}all working together under one roof and toward
            the same goal: building technology that makes
            a real difference for the businesses we serve.
          </p>

        <div
            ref={teamRef}
             className={`sliding-team ${showTeam ? "active" : ""}`}
                >
            <img src= {TeamMain} alt="Team Main" />
        </div>

        </section>

        <section className="work-culture">

  <h2>How We Work Together</h2>

  <div className="culture-card card1">
    Flat & Collaborative Structure
  </div>

  <div className="culture-card card2">
    Direct Junior–Senior Collaboration
  </div>

  <div className="culture-card card3">
    Continuous Learning Environment
  </div>

  <div className="culture-card card4">
    Balanced Experience & Fresh Perspectives
  </div>

  <div className="culture-card card5">
    Effective Communication & Project Ownership
  </div>

</section>

        <section className="bottom-cta">
        <div className="ctatexts">
        <h1>Let’s Build Something <br /> That Scales</h1>
        <p>Whether you’re launching a new product or upgrading an existing system, Cubemoons is ready to help..</p>
        </div>
        <button onClick={() =>  navigate("/contact")}>Book a Call →</button>
      </section>

      </main>

      <ContactSection />

    </>
  );
}

export default OurTeam;