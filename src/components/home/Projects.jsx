import moneymarket from "@/assets/images/moneymarket.jpeg";
import keepconnect from "@/assets/images/keepconnect.jpeg";
import kovon from "@/assets/images/kovon.jpeg";
import bakeoffun from "@/assets/images/bakeoffun.jpeg";

function Projects() {
  return (
    <section className="projects-section">

      <div className="projects-top">
        <div className="projects-left">
          <span className="tag">• OUR PROJECTS</span>
          <h2>Showcasing Our Most Innovative Work</h2>
        </div>

        <div className="projects-right">
          <p>
            Our clients trust us because we deliver solutions that truly make a difference.
            Every project we take on is guided by a commitment to quality.
          </p>
          <button className="view-btn">All Projects →</button>
        </div>
      </div>

      <div className="projects-grid">

        <div className="project-card big">
          <img src={moneymarket} alt="MoneyMarket"/>
          <div className="overlay">
            <span>Web Development</span>
            <h3>Money Market</h3>
          </div>
        </div>

        <div className="project-card small top">
          <img src={keepconnect} alt="" />
          <div className="overlay">
            <span>App Development</span>
            <h3>KeepConnect</h3>
          </div>
        </div>

       <div className="project-card small bottom">
          <img src={kovon} alt="" />
           <div className="overlay">
            <span>App Development</span>
            <h3>Kovon</h3>
          </div>
        </div>

        <div className="project-card wide">
          <img src={bakeoffun} alt="" />
           <div className="overlay">
            <span>Web Development</span>
            <h3>BakeOfun</h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;