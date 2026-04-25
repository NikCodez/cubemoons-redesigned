import { useState } from "react";
import ai1 from "./assets/images/ai1.png";
import ai2 from "./assets/images/ai2.png";
import ai3 from "./assets/images/ai3.png";

const services = [
  {
    title: "AI and Automation",
    description:
      "Artificial intelligence is no longer a technology you evaluate on a roadmap. It is a capability that is reshaping industries, redefining what is operationally possible, and creating real competitive distance between the businesses that are building with it and the ones that are still watching from the sidelines.",
    image: ai1,
  },
  {
    title: "Generative AI Development",
    description:
      "Generative AI has moved from headline to infrastructure faster than almost any technology in history. The businesses applying it effectively are not just experimenting they are shipping products, automating workflows, and building user experiences that would have been impossible to deliver at this quality and speed even two years ago",
    image: ai2,
  },
  {
    title: "Intelligent Automation",
    description:
      "Traditional automation is powerful but brittle. It handles the cases it was explicitly programmed for and fails the moment something unexpected appears. Intelligent automation is different it combines the reliability of structured automation with the judgment of Al, creating systems that can handle variation, process unstructured inputs, and navigate the edge cases that rule-based automation cannot.",
    image: ai3,
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null); 
//   Only one open at a time but no card is opened before clicking  

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    // Clicking replaces the open one
  };

  return (
    <section className="services">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-top">
          <div>
            <span className="tag">Services</span>
            <h2>
              End-to-End AI Solutions That Transform
              <br />
              How Your Business Operates
            </h2>
          </div>

          <div className="services-right">
            <p>
              We combine AI development, generative AI, and intelligent automation to streamline operations and unlock new capabilities.
            </p>
            <button className="view-btn">View All →</button>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="services-list">
          {services.map((item, index) => (
            <div key={index} className="service-item">

              {/* HEADER ROW */}
              <div
                className="service-header"
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>

                <div
                  className={`arrow ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  →
                </div>
              </div>

              {/* ACTIVE CARD */}
              {activeIndex === index && (
                <div className="service-card">

                  <div className="card-left">
                    <h3 className="card-title">{item.title}</h3>
                    <p>{item.description}</p>
                    <a href="#">Learn More ↗</a>
                  </div>

                  <div className="card-right">
                    <img src={item.image} alt="" />
                  </div>

                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;

