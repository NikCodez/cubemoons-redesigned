import { useState, useRef, useEffect } from "react";
import greencard from "@/assets/images/Nav-green-card.png";
import bluecard from "@/assets/images/Nav-blue-card.png";
import "@/styles/navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar({ variant = "dark" }) {
     const [activeMenu, setActiveMenu] = useState(null);
     const menuRef = useRef();
     const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  // Closes menu when clicked outside
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!menuRef.current) return;
    if (!menuRef.current.contains(e.target)) {
      setActiveMenu(null);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);

  return (
    <>
  {activeMenu && (
    <div 
      className="menu-backdrop"
      onClick={() => setActiveMenu(null)} 
    />
  )}
  
    <header className={`navbar ${variant === "light" ? "light" : ""}`} ref={menuRef}>
      <nav>
        <div className="nav-left">
          <img src="/cubemoons logo.png" />
          <ul className="nav-links">
            <li className={`nav-item ${activeMenu === "who" ? "active" : ""}`}
                onClick={() => toggleMenu("who")}>
                          Who We Are ▾
            </li>
            <li className={`nav-item ${activeMenu === "what" ? "active" : ""}`}
                onClick={() => toggleMenu("what")}>
                What We Do ▾
            </li>
            <li className={`nav-item ${activeMenu === "products" ? "active" : ""}`}
                onClick={() => toggleMenu("products")}>
                Products ▾
            </li>
            <li className={`nav-item ${activeMenu === "industries" ? "active" : ""}`}
                onClick={() => toggleMenu("industries")}>
                Industries ▾
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li className={`nav-item ${activeMenu === "careers" ? "active" : ""}`}
                onClick={() => toggleMenu("careers")}>
                Careers ▾
            </li>
            <li className={`nav-item ${activeMenu === "insights" ? "active" : ""}`}
                onClick={() => toggleMenu("insights")}>
                Insights ▾
            </li>
            <li><button className="contact-btn" onClick={() => navigate("/Contact")}>Contact Us &#10153;</button></li>
          </ul>
        </div>
      </nav>

      <div className={`mega-menu ${activeMenu ? "open" : ""}`}>
          <MegaMenuContent activeMenu={activeMenu} />
        </div>
      </header>
    </>
  );
}

function MegaMenuContent({ activeMenu }) {
  switch (activeMenu) {

    case "who":
      return (
        <>
          <div className="menu-left">
            <div className="menu-col">
              <h4>Company</h4>
              <div className="menu-item"><h5>Our Process</h5><p>A quick look at who we are and what we do</p></div>
              <div className="menu-item"><h5>Vision & Mission</h5><p>Our long-term goals and future direction</p></div>
            </div>

            <div className="menu-col">
              <h4>People</h4>
              <div className="menu-item"><h5>Leadership</h5><p>Meet the people guiding our vision</p></div>
              <div className="menu-item"><h5>Teams</h5><p>The people behind our success</p></div>
              <div className="menu-item"><h5>Awards</h5><p>Recognition and achievements we’re proud of</p></div>
            </div>
          </div>

          <MenuCard />
        </>
      );

    case "products":
      return (
        <>
          <div className="menu-left">
            <div className="menu-col">
              <h4>Products</h4>
              <div className="menu-item"><h5>CRM System</h5><p>Smart customer engagement and insights</p></div>
              <div className="menu-item"><h5>LMS</h5><p>Scalable digital learning solutions</p></div>
              <div className="menu-item"><h5>HR Portal</h5><p>Efficient employee management system</p></div>
            </div>

            <div className="menu-col">
              <h4>&nbsp;</h4>
              <div className="menu-item"><h5>Order management system</h5><p>Streamlined order processing and tracking</p></div>
              <div className="menu-item"><h5>Ecommerce platform</h5><p>Seamless and scalable online stores</p></div>
              <div className="menu-item"><h5>ERP</h5><p>Unified business operations management</p></div>
            </div>
          </div>

          <div className="menu-card product-insights-card">
      <img src={greencard} alt="card" />
      <div className="menu-card-content">
        <h3>Guide to AI-Powered Business <br /> Automation</h3>
        <button>Explore All</button>
      </div>
    </div>  
        </>
      );

    case "industries":
      return (
        <>
          <div className="menu-left wide">
            <div className="menu-col">
              <h4>Industries</h4>
              <div className="menu-item"><h5>Healthcare</h5><p>Innovative solutions for better patient care</p></div>
              <div className="menu-item"><h5>EdTech</h5><p>Empowering learning through digital platforms</p></div>
              <div className="menu-item"><h5>Ecommerce</h5><p>Building seamless online shopping experiences</p></div>
            </div>

            <div className="menu-col">
              <h4>&nbsp;</h4>
              <div className="menu-item"><h5>Travel</h5><p>Delivering seamless travel and booking experiences</p></div>
              <div className="menu-item"><h5>Agriculture</h5><p>Empowering modern farming with smart digital solutions</p></div>
              <div className="menu-item"><h5>Consumer Goods & services</h5><p>Improving customer experiences with innovative solutions</p></div>
            </div>

            <div className="menu-col">
              <h4>&nbsp;</h4>
              <div className="menu-item"><h5>Public Service</h5><p>Efficient digital systems for public sector services</p></div>
              <div className="menu-item"><h5>Law</h5><p>Streamlined legal processes with smart technology</p></div>
              <div className="menu-item"><h5>Media/Sport/Entertainment</h5><p>Engaging digital experiences for modern audiences</p></div>
            </div>

            <div className="menu-col">
              <h4>&nbsp;</h4>
              <div className="menu-item"><h5>FinTech</h5><p>Secure and scalable financial technology solutions</p></div>
              <div className="menu-item"><h5>SaaS & Startups</h5><p>Helping startups grow with smart tech solutions</p></div>
              <div className="menu-item"><h5>Real Estate</h5><p>Digital solutions for modern property management</p></div>
            </div>
          </div>

          <div className="menu-card careers-industries-card">
      <img src={bluecard} alt="card" />
      <div className="menu-card-content">
        <h3>The Executive Guide to Shaping the <br /> Future of Mobile App <br /> Development</h3>
        <button>Explore All</button>
      </div>
    </div>
        </>
      );

    case "careers":
        return (
          <>
              <div className="menu-left">
            <div className="menu-col">
              <h4>Careers</h4>
              <div className="menu-item"><h5>Why Cubemoons</h5><p>Discover our vision, values, and what sets us apart in delivering innovation</p></div>
              <div className="menu-item"><h5>Open Positions</h5><p>Explore exciting career opportunities and grow with a dynamic team</p></div>
              <div className="menu-item"><h5>Life  at Cubemoons</h5><p>Get a glimpse into our culture, people, and everyday experiences</p></div>
            </div>
            </div>

          <div className="menu-card careers-industries-card">
      <img src={greencard} alt="card" />
      <div className="menu-card-content">
        <h3>Guide to AI-Powered Business Automation</h3>
        <button>Explore All</button>
      </div>
    </div>
          </>
        );


    case "insights":
        return (
        <>
          <div className="menu-left wide">
            <div className="menu-col">
              <h4>Insights</h4>
              <div className="menu-item"><h5>Blogs</h5><p>Insights, trends, and expert perspectives on healthcare innovation</p></div>
              <div className="menu-item"><h5>Clients</h5><p>Trusted partnerships delivering impactful digital transformation</p></div>
              <div className="menu-item"><h5>Case Study</h5><p>Real-world success stories showcasing secure financial solutions</p></div>
            </div>

            <div className="menu-col">
              <h4>&nbsp;</h4>
              <div className="menu-item"><h5>Events</h5><p>Engaging experiences that connect, educate, and inspire audiences</p></div>
            </div>
          </div>

          <div className="menu-card product-insights-card">
      <img src={greencard} alt="card" />
      <div className="menu-card-content">
        <h3>Guide to AI-Powered Business Automation</h3>
        <button>Explore All</button>
      </div>
    </div>
        </>
      );

    case "what":
      return (
          <>
          <div className="what-wrapper">
          <div className="row1">
              <div className="menu-left">
            <div className="menu-col">
              <h4 className= "what-heading">AI & Automation</h4>
              <div className="menu-item what-item"><h5>Generative AI Development</h5></div>
              <div className="menu-item what-item"><h5>Intelligent Automation</h5></div>  
            </div>

            <div className="menu-col">
              <h4 className= "what-heading">Web Development</h4>
              <div className="menu-item what-item"><h5>Custom Web Design</h5></div>
              <div className="menu-item what-item"><h5>Ecommerce</h5></div>
              <div className="menu-item what-item"><h5>Web Portal</h5></div>
               <div className="menu-item what-item"><h5>CMS Development</h5></div>
              <div className="menu-item what-item"><h5>Cloud Hosting</h5></div>
              <div className="menu-item what-item"><h5>API Integration</h5></div>
               <div className="menu-item what-item"><h5>LMS</h5></div>
            </div>

            <div className="menu-col">
              <h4 className= "what-heading">App Development</h4>
              <div className="menu-item what-item"><h5>IOS Apps</h5></div>
              <div className="menu-item what-item"><h5>Android</h5></div> 
              <div className="menu-item what-item"><h5>Flutter</h5></div>
            </div>

            <div className="menu-col">
              <h4 className= "what-heading">UI/UX Design</h4>
              <div className="menu-item what-item"><h5>Usability Testing</h5></div>
              <div className="menu-item what-item"><h5>Wireframe Design & Prototype</h5></div>
              <div className="menu-item what-item"><h5>3D Design & Vector</h5></div>
            </div>

            </div>

          <div className="menu-card what-card">
      <img src={bluecard} alt="card" />
      <div className="menu-card-content">
        <h3>The Executive Guide to <br /> Shaping the Future of <br /> Mobile App Development
</h3>
        <button>Explore All</button>
      </div>
    </div>
    </div>


    <div className="row2">
              <div className="menu-left">
            <div className="menu-col">
              <h4 className= "what-heading">Cloud & DevOps</h4>
              <div className="menu-item what-item"><h5>CI/CD And Deployment Automation</h5></div>
              <div className="menu-item what-item"><h5>Cloud Migration Setup</h5></div>
              <div className="menu-item what-item"><h5>Scalable Cloud Solutions</h5></div>
              <div className="menu-item what-item"><h5>CRM Development</h5></div>
            </div>

            <div className="menu-col">
              <h4 className= "what-heading">SaaS Development</h4>
              <div className="menu-item what-item"><h5>ERP</h5></div>
              <div className="menu-item what-item"><h5>Ongoing Optimization</h5></div>
              <div className="menu-item what-item"><h5>API integration</h5></div>
              <div className="menu-item what-item"><h5>Cloud Native Platform</h5></div>
              <div className="menu-item what-item"><h5>Custom SaaS</h5></div>
              <div className="menu-item what-item"><h5>Native Multi-Platform</h5></div>
            </div>

            <div className="menu-col">
              <h4 className= "what-heading">IT Consultancy</h4>
              <div className="menu-item what-item"><h5>System Architecture</h5></div>
              <div className="menu-item what-item"><h5>Tech Strategy</h5></div>
              <div className="menu-item what-item"><h5>Cost Optimization</h5></div>
              <div className="menu-item what-item"><h5>Risk And IT Planning</h5></div>
            </div>

            <div className="menu-col">
              <h4 className = "what-heading">Digital Marketing</h4>
              <div className="menu-item what-item"><h5>Performance Marketing</h5></div>
              <div className="menu-item what-item"><h5>SEO</h5></div>
              <div className="menu-item what-item"><h5>Analytics and Conversion</h5></div>
            </div>

            </div>

          <div className="menu-card what-card">
      <img src={greencard} alt="card" />
      <div className="menu-card-content">
        <h3>Guide to AI-Powered <br /> Business Automation</h3>
        <button>Explore All</button>
      </div>
    </div>
    </div>
  </div>
          </>
        );

    default:
      return null;
  }
}

function MenuCard() {
  return (
    <div className="menu-card">
      <img src={greencard} alt="card" />
      <div className="menu-card-content">
        <h3>Guide to AI-Powered Business Automation</h3>
        <button>Explore All</button>
      </div>
    </div>
  );
}

export default Navbar;