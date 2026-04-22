function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <div className="nav-left">
          <img src="/cubemoons logo.png" />
          <ul className="nav-links">
            <li><a href="#">Who Are We ▾</a></li>
            <li><a href="#">What We Do ▾</a></li>
            <li><a href="#">Product ▾</a></li>
            <li><a href="#">Industries ▾</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#">Careers ▾</a></li>
            <li><a href="#">Insights ▾</a></li>
            <li><button className="contact-btn">Contact Us &#10153;</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;