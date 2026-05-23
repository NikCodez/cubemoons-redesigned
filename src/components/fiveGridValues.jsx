import "@/styles/fiveGridValues.css";
import lightbulb from "@/assets/images/light-bulb.png";

const cards = [
  {
    title: "Leading by Example in Every Interaction",
    desc: "Our leadership team sets the tone by actively demonstrating quality, integrity, and accountability in everything we do."
  },

  {
    title: "Maintaining Direct and Transparent Client Relationships",
    desc: "We stay closely involved and accessible, ensuring clients can always connect with decision-makers."
  },

  {
    title: "Building a Culture That Values Every Perspective",
    desc: "We foster an environment where ideas are welcomed from all levels, not just leadership."
  },

  {
    title: "Empowering Teams to Make Meaningful Decisions",
    desc: "We trust those closest to the work to contribute insights and drive effective solutions."
  },

  {
    title: "Staying Deeply Involved from Strategy to Execution",
    desc: "Our leadership team remains actively engaged throughout the entire process, ensuring alignment, consistency, and high standards from initial planning to final delivery."
  }
];

function fiveGridValues() {

  return (

    <section className="five-grid-values">

      <div className="values-left">

        <h2>
          Leadership That Goes Beyond Titles
        </h2>

        <p>
          We stay closely connected to <b> both our teams and clients, leading with transparency, encouraging collaboration, and empowering smart decisions </b> that move every project forward with confidence.
        </p>

        <button>
          Book a call →
        </button>

      </div>

      <div className="values-grid">

        {cards.map((card, index) => (

          <div className="value-card" key={index}>

            <span>
              <img src={lightbulb} alt="" />
            </span>

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default fiveGridValues;