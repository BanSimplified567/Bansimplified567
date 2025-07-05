import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? "#FF0080" : "#E0E0E0",
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleResize = () => {
    const mobile = window.innerWidth <= 1200;
    setIsMobile(mobile);
    if (!mobile) setIsOpen(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbarContainer">
      <nav className="navbar">
        <Link to="/" className="navbarTitle" title="Welcome Back" onClick={ closeMenu }>
          BanSimplified
        </Link>

        { isMobile && (
          <button
            className="menuButton"
            onClick={ toggleMenu }
            aria-label={ isOpen ? "Close menu" : "Open menu" }
            aria-expanded={ isOpen }
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d={ isOpen ? "M6 18L18 6M6 6l12 12" : "M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z" } />
            </svg>
          </button>
        ) }

        <div className={ `navLinks ${isMobile ? (isOpen ? "open" : "closed") : "desktop"}` }>
          { [
            { to: "/about", label: "About", title: "Learn more about us" },
            { to: "/blog", label: "Blog", title: "Read our latest posts" },
            { to: "/contact", label: "Contact", title: "Get in touch with us" },
            { to: "/activities", label: "Activities", title: "Find activities opportunities" },
            { to: "/portfolio", label: "Portfolio", title: "See our portfolio" },
            { to: "/skills", label: "Skills", title: "What skills do I have" },
          ].map((link) => (
            <Link
              key={ link.to }
              className="navLink"
              to={ link.to }
              style={ getLinkStyle(link.to) }
              title={ link.title }
              onClick={ closeMenu }
            >
              { link.label }
            </Link>
          )) }

          { isMobile && (
            <div className="mobileActions">
              <Link to="/commission" className="navAction navCommission" title="Open For Commission" onClick={ closeMenu }>
                Commission
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" />
                </svg>
              </Link>
              <Link to="/skills" className="navAction navSkills" title="What skills do I have" onClick={ closeMenu }>
                My Skills
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" />
                </svg>
              </Link>
            </div>
          ) }
        </div>

        { !isMobile && (
          <div className="desktopActions">
            <Link to="/commission" className="navAction navCommission" title="Open For Commission">
              Commission
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 4-1.41 1.41L16.17  Hover over links to see tooltips with the `title` text.
11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" />
              </svg>
            </Link>
            <Link to="/skills" className="navAction navSkills" title="What skills do I have">
              My Skills
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z" />
              </svg>
            </Link>
          </div>
        ) }
      </nav>
    </header>
  );
};

export default Navbar;
