import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { useNavigate } from "react-router-dom";
import trophyImg from "@/assets/images/awards-hero.png";
import award1 from "@/assets/images/award1.jpg";
import award2 from "@/assets/images/award2.jpg";
import ownershipImg from "@/assets/images/ownership.jpg";
import longtermImg from "@/assets/images/longterm.jpg";
import honestyImg from "@/assets/images/honesty.jpg";
import curiosityImg from "@/assets/images/curiosity.jpg";
import "@/styles/Awards.css";

function Awards() {
  const navigate = useNavigate();
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
      <Navbar variant="light" />

      <main className="awards-page">

        <section className="awards-hero">

         <div className="awards-hero-wrapper">

         <h2 className="award-slide-text award-left">
           AWARDS
          </h2>

          <h2 className="award-slide-text award-right">
           RECOGNITION
         </h2>

          <img
          src={trophyImg}
          alt=""
         className="trophy-img"
         />

  </div>

</section>

       <section className="vision-main">
               <div className="vision-cards">
               {/* CARD 1 */}
               <div className="vision-card dark-card">
                 <div className="vision-img">
                 <img src={award1} alt="vision" />
                 </div>
       
                 <div className="vision-text">
                   <h2>Industry Awards</h2>
       
                   <p>
                     Our work has been recognized for its impact, innovation, and commitment to delivering measurable business outcomes. We focus on building solutions that meet the highest standards of quality, usability, and performance, aligning closely with industry best practices. Each project is approached with a balance of technical excellence and strategic thinking, ensuring that what we deliver stands up to real-world demands.
                   </p>
       
                   <p>
                    Through continuous improvement and a strong emphasis on results, we aim to create work that not only meets expectations but sets new benchmarks within the industry.
                   </p>
                 </div>
               </div>
       
               {/* CARD 2 */}
               <div className="vision-card light-card">
                 <div className="vision-img">
                 <img src={award2} alt="mission" />
                 </div>
       
                 <div className="vision-text">
                   <h2>Collaboration Awards</h2>
       
                   <p>
                     We believe exceptional outcomes are built through strong, transparent partnerships. Our approach to collaboration is rooted in open communication, shared accountability, and a deep alignment with our clients’ goals. We work as an extension of our clients’ teams, fostering trust, encouraging diverse perspectives, and ensuring every voice contributes to better decisions.
                   </p>
       
                   <p>
                     By maintaining clarity, responsiveness, and mutual respect throughout each engagement, we create an environment where ideas thrive and meaningful, lasting results are achieved together.
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
                 backgroundImage: `url(${item.image})`,
               }}
             ></div>
       
             <h3>{item.title}</h3>
       
             <p>{item.desc}</p>
       
           </div>
       
         ))}
       
       </div>
               
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

export default Awards;