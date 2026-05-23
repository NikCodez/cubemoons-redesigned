import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

import LeadershipValues from "@/components/fiveGridValues";
import leaderGlider from "@/assets/images/leaders-glider.png";
import leaderHero from "@/assets/images/leader-hero.png";
import leader1 from "@/assets/images/Leader1.png";

import "@/styles/leadership.css";

function Leadership() {

  return (

    <>
      <Navbar variant="light" />

      <main className="leadership-page">

        <section className="leadership-hero">

          <div className="leader-sketch-wrapper">

             <img src={leaderHero} alt="" className="leader-sketch"/>

          </div>
        <div className="leader-marquee">
          <div className="leaders-glider">
            <img
            src={leaderGlider}
            alt=""
            className="leaders-gliding"
          />

          <img
            src={leaderGlider}
            alt=""
            className="leaders-gliding"
          />

          </div>
        </div>
        </section>

        <section className="leadership-intro">

          <div className="intro-left">

            <h2>
              We Don’t Just Lead
              <br />
              <span>We Build</span>
            </h2>

          </div>

          <div className="intro-right">

            <p>
              The Cubemoons leadership team brings together experience across software engineering, product strategy, UX design, cloud architecture, and business consulting. Between us, we have built products across healthcare, fintech, e-commerce, real estate, education, and more  which means we bring genuine industry context to every client conversation we have.

            </p>

            <p>
              We are not a leadership team that sits in a corner office disconnected from the work. Our founders and senior leads are actively involved in client engagements, making decisions, reviewing deliverables, and ensuring that the standards we talk about are the standards we actually meet.
            </p>

          </div>

        </section>

        {/* REUSABLE COMPONENT */}
        <LeadershipValues />

        <section className="leadership-founder">

          <img src={leader1} alt="CEO" />

          <div className="founder-content">

            <h2>Amaan Khan</h2>
            <p>
              Cubemoons is an umbrella. And under it, anyone with <span> an idea, the enthusiasm to chase it, and the grit to stick with it, has a home. </span>Cubemoons was never just a business idea. It was <span> a belief that young, hungry, creative people deserve more than just a job. They deserve a platform. </span> A space where their ideas are taken seriously, where their hustle is met with real opportunity, and where the fire they carry inside them can actually build something that lasts.
            </p>
          </div>
        </section>
      </main>
      <ContactSection />
    </>
  );
}

export default Leadership;