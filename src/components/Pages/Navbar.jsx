"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const getLinkStyle = (path) => {
    return location.pathname === path ? { color: "#FF3399" } : { color: "#fefefe" }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleResize = () => {
    const mobile = window.innerWidth <= 1200 // Changed to match CSS breakpoint
    setIsMobile(mobile)

    // Close menu when switching to desktop
    if (!mobile) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    // Initial check
    handleResize()
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize)
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="navbarContainer">
      <nav className="navbarLink">
        <Link to="/" className="navbarTitle" title="Welcome Back">
          BanSimplified
        </Link>

        {/* Mobile menu button */ }
        { isMobile && (
          <button className="menuButton" onClick={ toggleMenu }>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"></path>
            </svg>
          </button>
        ) }

        {/* Navigation links - show/hide based on mobile state and menu toggle */ }
        <div className={ `navLink ${isMobile ? (isOpen ? "open" : "closed") : "desktop"}` }>
          <Link
            className="navbarLinks"
            to="/about"
            style={ getLinkStyle("/about") }
            title="Learn more about us"
            onClick={ closeMenu }
          >
            About
          </Link>
          <Link
            className="navbarLinks"
            to="/blog"
            style={ getLinkStyle("/blog") }
            title="Read our latest posts"
            onClick={ closeMenu }
          >
            Blog
          </Link>
          <Link
            className="navbarLinks"
            to="/contact"
            style={ getLinkStyle("/contact") }
            title="Get in touch with us"
            onClick={ closeMenu }
          >
            Contact
          </Link>
          <Link
            className="navbarLinks"
            to="/activities"
            style={ getLinkStyle("/activities") }
            title="Find activities opportunities"
            onClick={ closeMenu }
          >
            Activities
          </Link>
          <Link
            className="navbarLinks"
            to="/portfolio"
            style={ getLinkStyle("/portfolio") }
            title="See our portfolio"
            onClick={ closeMenu }
          >
            Portfolio
          </Link>
          <Link
            className="navbarLinks"
            to="/skills"
            style={ getLinkStyle("/skills") }
            title="What skills do I have"
            onClick={ closeMenu }
          >
            Skills
          </Link>

          {/* Mobile-only action buttons */ }
          { isMobile && (
            <div className="mobileLinks">
              <Link to="/commission" className="navMentor" title="Open For Commission" onClick={ closeMenu }>
                COMMISSION
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                </svg>
              </Link>
              <Link to="/skills" className="navHireMe" title="What skills do I have" onClick={ closeMenu }>
                WHAT IS MY SKILLS
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                </svg>
              </Link>
            </div>
          ) }
        </div>
      </nav>

      {/* Desktop-only action buttons */ }
      { !isMobile && (
        <div className="navLink desktopActions">
          <Link to="/commission" className="navMentor" title="Open For Commission">
            COMMISSION
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
            </svg>
          </Link>
          <Link to="/skills" className="navHireMe" title="What skills do I have">
            WHAT IS MY SKILLS
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
            </svg>
          </Link>
        </div>
      ) }
    </div>
  )
}

export default Navbar
