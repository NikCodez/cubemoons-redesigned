import healthcare from "./assets/images/healthcare.png";
import edtech from "./assets/images/edtech.png";
import ecommerce from "./assets/images/ecommerce.png";
import startup from "./assets/images/startup.png";
import realestate from "./assets/images/realestate.png";
import questionmark from "./assets/animations/questionmark.webm";
import chats from "./assets/animations/chats.webm";
import Target from "./assets/animations/Target.webm";

function Industries() {
  return (
    <section className="industries-section">
     
      <div className="background-watermark">Industries</div>

      <div className="industries-container">

        <div className="industries-top">
          <h2>
            Looking for reliable IT experts 
            <video src={questionmark} autoPlay loop muted playsInline className="qm1-video"/>  
            <br />
            Let’s discuss 
            <video src={chats} autoPlay loop muted playsInline className="qm2-video"/>
            your project and <br />
            <video src={Target} autoPlay loop muted playsInline className="qm3-video"/>
            goals.
          </h2>

          <button className="cta-btn">Get Free Consultation →</button>
        </div>

        <div className="industries-grid">

        {/* CARD 1 */}
        <div className="industry-card card-left">
          <div className="card-image-box">
            <img src={healthcare} alt="Healthcare" />
          </div>
          <div className="card-info">
            <h3>Healthcare & Wellness</h3>
            <p>
              Healthcare organizations operate in highly regulated environments{" "}
              <a href="#">More...</a>
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="industry-card card-right">
          <div className="card-image-box">
            <img src={edtech} alt="EdTech" />
          </div>
          <div className="card-info">
            <h3>EdTech</h3>
            <p>
              Educational institutions and EdTech organizations{" "}
              <a href="#">More...</a>
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="industry-card card-left">
          <div className="card-image-box">
            <img src={ecommerce} alt="E-commerce" />
          </div>
          <div className="card-info">
            <h3>E-commerce & Retail</h3>
            <p>
              E-commerce businesses depend on platforms that can handle traffic{" "}
              <a href="#">More...</a>
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="industry-card card-right">
          <div className="card-image-box">
            <img src={startup} alt="Startup" />
          </div>
          <div className="card-info">
            <h3>Startup/SaaS</h3>
            <p>
              We harness cutting-edge technology and creative thinking to deliver{" "}
              <a href="#">More...</a>
            </p>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="industry-card card-left">
          <div className="card-image-box">
            <img src={realestate} alt="Real Estate" />
          </div>
          <div className="card-info">
            <h3>Real Estate</h3>
            <p>
              Real estate businesses manage complex workflows involving listings{" "}
              <a href="#">More...</a>
            </p>
          </div>
        </div>
        <div/>
        </div>  

      </div>
    </section>
  );
}

export default Industries;