import { useState, useRef, useEffect } from "react";
import greencard from "./assets/images/Nav-green-card.png";

function Navbar() {
     const [activeMenu, setActiveMenu] = useState(null);
     const menuRef = useRef();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
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
  
    <header className="navbar" ref={menuRef}>
      <nav>
        <div className="nav-left">
          <img src="/cubemoons logo.png" />
          <ul className="nav-links">
            <li className={`nav-item ${activeMenu === "who" ? "active" : ""}`}
                onClick={() => toggleMenu("who")}>
                          Who We Are ▾
            </li>
            <li>What We Do ▾</li>
            <li>Product ▾</li>
            <li>Industries ▾</li>
          </ul>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li>Careers ▾</li>
            <li>Insights ▾</li>
            <li><button className="contact-btn">Contact Us &#10153;</button></li>
          </ul>
        </div>
      </nav>

      <div className={`mega-menu ${activeMenu === "who" ? "open" : ""}`}>

         <div className="menu-left">
          <div className="menu-col">
            <h4>Company</h4>

            <div className="menu-item">
              <h5>Our Process</h5>
              <p>A quick look at who we are and what we do</p>
            </div>

            <div className="menu-item">
              <h5>Vision & Mission</h5>
              <p>Our long-term goals and future direction</p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="menu-col">
            <h4>People</h4>

            <div className="menu-item">
              <h5>Leadership</h5>
              <p>Meet the people guiding our vision</p>
            </div>

            <div className="menu-item">
              <h5>Teams</h5>
              <p>The people behind our success</p>
            </div>

            <div className="menu-item">
              <h5>Awards</h5>
              <p>Recognition and achievements we’re proud of</p>
            </div>
          </div>
        </div>

          {/* COLUMN 3 (CARD) */}
          <div className="menu-card">
            <img src={greencard} alt="Green Card" />
            <div className="menu-card-content">
            <h3>Guide to AI-Powered Business Automation</h3>
            <button>Explore All</button>
             </div>
          </div>

        </div>
      


    </header>
    </>
  );
}
export default Navbar;