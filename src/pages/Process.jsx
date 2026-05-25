
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
// import processHero from "@/assets/animations/Process-hero-video.mp4";
import processHero from "@/assets/images/process-hero.png";
import { useNavigate } from "react-router-dom";
import "@/styles/process.css";

function Process() {
const sectionRef = useRef(null);
const activePathRef = useRef(null);
const navigate = useNavigate();
useEffect(() => {

    const path = activePathRef.current;
    const section = sectionRef.current;

    if (!path || !section) return;

    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    let current = pathLength;

   const updatePath = () => {

    const rect = section.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    /*
      SECTION STARTS
      when top reaches center
    */

    const start =
        viewportHeight * 0.5;

    /*
      SECTION ENDS
      when bottom reaches 0.4
    */

    const end =
        rect.height - viewportHeight * 0.4;

    /*
      TRUE BIDIRECTIONAL PROGRESS
    */

    let progress =
        (start - rect.top) / end;

    /*
      Clamp
    */

    progress =
        Math.max(0, Math.min(progress, 1));

    /*
      Slight boost for loops
    */

    progress =
        Math.min(progress * 1.08, 1);

    /*
      DRAW
    */

    path.style.strokeDashoffset =
        pathLength * (1 - progress);


    const target =
    pathLength * (1 - progress);

current +=
    (target - current) * 0.08;

path.style.strokeDashoffset =
    current;
};

    updatePath();

    window.addEventListener("scroll", updatePath);

    return () =>
        window.removeEventListener(
            "scroll",
            updatePath
        );

}, []);


  return (

    <>
      <Navbar variant="light" />

      <main className="process-page">

        <section className="process-hero">

          <div className="process-left">

            <h1>
              How we take a <span>Project</span> from
              <br />
              idea to live, working
              <br />
              Product
            </h1>

            <p>
              Every great software product starts with a strong process. At Cubemoons, <span> we follow a structured, agile development approach </span>refined through years of real-world experience. It keeps clients informed, surfaces challenges early, and ensures that what <span>we deliver aligns closely with what’s needed.</span>
            </p>

          </div>

          <div className="process-right">

            <img
              src={processHero}
              alt="process illustration"
            />

            {/* <video
               className="process-video" autoPlay muted loop playsInline>
              <source src={processHero} type="video/mp4" />
            </video> */}

          </div>

        </section>
        
        <section className="timeline-section" ref={sectionRef}>

          <svg
            viewBox="0 0 1200 2700"
            className="timeline-svg"
            preserveAspectRatio="none"
          >

            <path
              d="
                M650 20

                C650 170 650 230 736 278

                C890 380 980 170 830 170

                C690 170 660 276 627 348

                C528 576 700 640 610 760

                C520 880 360 910 200 980

                C60 1040 40 1260 250 1360

                C430 1440 700 1410 860 1430

                C1040 1450 1120 1488 999 1710

                C890 1947 820 1705 974 1762

                C1080 1790 1150 1885 980 2105

                C810 2310 520 2112 294 2203

                C90 2270 -20 2420 60 2720
              "
              className="timeline-bg-path"
            />

            <path ref={activePathRef}
              d="
                M650 20

                C650 170 650 230 736 278

                C890 380 980 170 830 170

                C690 170 660 276 627 348

                C528 576 700 640 610 760

                C520 880 360 910 200 980

                C60 1040 40 1260 250 1360

                C430 1440 700 1410 860 1430

                C1040 1450 1120 1488 999 1710

                C890 1947 820 1705 974 1762

                C1080 1790 1150 1885 980 2105

                C810 2310 520 2112 294 2203

                C90 2270 -20 2420 60 2720
              "
              className="timeline-active-path"
            />

            <circle cx="650" cy="20" r="8" className="timeline-dot" />

            <circle cx="600" cy="434" r="8" className="timeline-dot" />

            <circle cx="263" cy="953" r="8" className="timeline-dot" />

            <circle cx="561" cy="1417" r="8" className="timeline-dot" />

            <circle cx="280" cy="2208" r="8" className="timeline-dot" />

            <circle cx="35" cy="2541" r="8" className="timeline-dot" />

          </svg>

          <div className="step-number n01">01.</div>
          <div className="timeline-step step1">

            <h2>Discovery and Strategy</h2>

            <p>
              Before we write a single line of code or design a single screen,
              we sit down and understand your business. This discovery phase is
              not a formality it is the most important thing we do. We want to
              understand what you are trying to achieve, who your users are,
              what your existing systems look like, where the pain points are,
              and what success looks like for you specifically.
            </p>

          </div>
          
          <div className="step-number n02">02.</div>
          <div className="timeline-step step2">

            <h2>Design and Architecture</h2>

            <p>
              We share designs and architecture documentation with clients at
              this stage and incorporate feedback before moving forward. It is
              far less expensive to change a wireframe than to change a built
              feature, and we design our process with that reality in mind.
            </p>

          </div>

          <div className="step-number n03">03.</div>
          <div className="timeline-step step3">

            <h2>Development and QA</h2>

            <p>
              Development happens in iterative sprints, typically two weeks
              long. At the end of each sprint, we demonstrate working
              functionality to the client and incorporate feedback into the next
              sprint. This keeps the project aligned with client expectations
              throughout the build rather than only at the end.
            </p>

          </div>

          <div className="step-number n04">04.</div>
          <div className="timeline-step step4">

            <h2>Launch and Deployment</h2>

            <p>
              Going live is a carefully managed process, not a moment of
              crossing your fingers and hoping for the best. We plan
              deployments methodically, with rollback procedures in place,
              staging environments for final validation, and monitoring
              configured to catch any issues within the first hours of launch.
            </p>

          </div>

          <div className="step-number n05">05.</div>
          <div className="timeline-step step5">

            <h2>Ongoing Support and Scale</h2>

            <p>
              After launch, we offer ongoing support, maintenance, and
              development retainers for clients who want a continuing technology
              partner. Many of our best client relationships started with a
              single project and grew into a long-term partnership as the
              business scaled and their technology needs evolved.
            </p>

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

export default Process;