import { useState } from "react";

const services = [
  {
    title: "AI and Automation",
    description:
      "Artificial intelligence is no longer a technology you evaluate on a roadmap...",
    image: "/images/ai1.png",
  },
  {
    title: "Generative AI Development",
    description:
      "Generative AI has moved from headline to infrastructure faster than almost any technology...",
    image: "/images/ai2.png",
  },
  {
    title: "Intelligent Automation",
    description:
      "Traditional automation is powerful but brittle...",
    image: "/images/ai3.png",
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
              We combine AI development, generative AI, and intelligent automation
              to streamline operations and unlock new capabilities.
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