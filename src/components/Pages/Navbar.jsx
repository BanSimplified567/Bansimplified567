import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   const location = useLocation();
   const [isOpen, setIsOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   const getLinkStyle = (path) => {
      return location.pathname === path ? { color: '#FF3399' } : { color: '#fefefe' };
   };

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };
   const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
   };
   useEffect(() => {
      // Initial check
      handleResize();
      // Add event listener to handle window resize
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <div className="navbarContainer">
         <nav className="navbarLink">
            <Link to="/" className="navbarTitle" title="Welcome Back">
               BanSimplified
            </Link>
            <div className={`navLink ${isOpen ? 'open' : ''}`}>
               <Link
                  className="navbarLinks"
                  to="/about"
                  style={getLinkStyle('/about')}
                  title="Learn more about us"
               >
                  About
               </Link>
               <Link
                  className="navbarLinks"
                  to="/blog"
                  style={getLinkStyle('/blog')}
                  title="Read our latest posts"
               >
                  Blog
               </Link>
               <Link
                  className="navbarLinks"
                  to="/contact"
                  style={getLinkStyle('/contact')}
                  title="Get in touch with us"
               >
                  Contact
               </Link>
               <Link
                  className="navbarLinks"
                  to="/activities"
                  style={getLinkStyle('/activities')}
                  title="Find activities opportunities"
               >
                  Activities
               </Link>
               <Link
                  className="navbarLinks"
                  to="/portfolio"
                  style={getLinkStyle('/portfolio')}
                  title="See our portfolio"
               >
                  Portfolio
               </Link>
               <Link
                  className="navbarLinks"
                  to="/skills"
                  style={getLinkStyle('/skills')}
                  title="What skills do I have"
               >
                  Skills
               </Link>
               {isMobile && (
                  <div className="mobileLinks">
                     <Link to="/commission" className="navMentor" title="Open For Commission">
                        COMMISSION
                        <svg
                           width="15"
                           height="15"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                        </svg>
                     </Link>
                     <br />
                     <Link to="/skills" className="navHireMe" title="What skills do I have">
                        WHAT IS MY SKILLS
                        <svg
                           width="15"
                           height="15"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                        </svg>
                     </Link>
                  </div>
               )}
            </div>
            <button className="menuButton" onClick={toggleMenu}>
               <svg
                  width="46"
                  height="46"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"></path>
               </svg>
            </button>
         </nav>
         <div className="navLink">
            <Link to="/commission" className="navMentor" title="Open For Commission">
               COMMISSION
               <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
               </svg>
            </Link>
            <Link to="/skills" className="navHireMe" title="What skills do I have">
               WHAT IS MY SKILLS
               <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
               </svg>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
