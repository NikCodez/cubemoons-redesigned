import feature from "./assets/images/feature.png";

function FeatureCard() {
  return (
    <section className="feature-section">

      <div className="feature-card">

        {/* LEFT */}
        <div className="feature-left">
          <h2>
            Real products. Real <br />
            outcomes. Built for scale.
          </h2>

          <p>
            Explore a selection of platforms and products we've designed and developed
            across web, mobile, SaaS, and automation delivering measurable business value across industries.
          </p>

          <button className="feature-btn">
            Get Free Consultation →
          </button>
        </div>

        {/* RIGHT */}
        <div className="feature-right">
          <img src={feature} />
        </div>

      </div>

    </section>
  );
}

export default FeatureCard;