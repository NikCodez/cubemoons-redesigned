import { useState } from "react";
import blogImg from "./assets/images/blog.png";

function Blog() {
  const [active, setActive] = useState(1); // default open

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="blog-section">

      {/* TOP */}
      <div className="blog-top">
        <div className="blog-left">
          <span className="tag">• OUR BLOGS</span>
          <h2>Insights into AI & Emerging Technologies</h2>
        </div>

        <div className="blog-right">
          <p>
            We break down complex AI trends into practical insights that help
            businesses stay ahead in a rapidly evolving digital world.
          </p>
          <button className="view-btn">All Blogs →</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="blog-content">

        {/* LEFT ACCORDION */}
        <div className="blog-accordion">

          {/* ITEM 1 */}
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggle(1)}>
              <span>Executive Guide to AI-Powered <br /> Business Automation</span>
              <span>{active === 1 ? "−" : "+"}</span>
            </div>

            {active === 1 && (
              <div className="accordion-body">
                <h4>
                  Executive Guide to AI-Powered <br />
                   Business Automation
                </h4>
                <p>Artificial intelligence is no longer a technology you evaluate on a roadmap. It is a capability that is reshaping industries, redefining what is operationally possible, and creating real competitive distance between the businesses that are building with it and the ones that are still watching from the sidelines.
                </p>
                <a href="#">Learn More →</a>
              </div>
            )}
          </div>

          {/* ITEM 2 */}
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggle(2)}>
              <span>Executive Guide to Multi-Cloud Storage: <br /> Unlock Strategic Advantage</span>
              <span>{active === 2 ? "−" : "+"}</span>
            </div>

            {active === 2 && (
              <div className="accordion-body">
                <h4>
                  Executive Guide to Multi-Cloud Storage: <br />
                   Unlock Strategic Advantage
                </h4>
                <p>Avoid the pitfalls of stagnant tech solutions. Discover how
                  choosing the right software can redefine your business trajectory.</p>
                  <a href="#">Read More →</a>
              </div>
            )}
          </div>

          {/* ITEM 3 */}
          <div className="accordion-item">
            <div className="accordion-header" onClick={() => toggle(3)}>
              <span>The Strategic Executive Guide: <br /> Custom Software vs SaaS</span>
              <span>{active === 3 ? "−" : "+"}</span>
            </div>

            {active === 3 && (
              <div className="accordion-body">
                <h4>
                  The Strategic Executive Guide: <br />
                   Custom Software vs SaaS
                </h4>
                <p>This guide empowers executives to make informed, strategic decisions when choosing between custom-built software and Software-as-a-Service (SaaS) solutions, aligning technology investments with business goals, scalability needs, and budget constraints.</p>
                <a href="#">Learn More →</a>
              </div>
            )}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="blog-image">
          <img src={blogImg} alt="blog" />
        </div>

      </div>
    </section>
  );
}

export default Blog;