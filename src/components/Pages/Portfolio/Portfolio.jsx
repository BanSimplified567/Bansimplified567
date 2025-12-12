import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import BanHotel from '../../img/PortfolioImages/BanHotel.png';
import BirthdayGift from '../../img/PortfolioImages/BirthdayGift.png';
import BulbOnOff from '../../img/PortfolioImages/BulbOnOff.png';
import Calculator from '../../img/PortfolioImages/Calculator.png';
import PizzaBan from '../../img/PortfolioImages/PizzaBan.png';
import Sukidesu from '../../img/PortfolioImages/Sukidesu.png';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: "Bulb On/Off",
    description: "Interactive bulb switch control with smooth animations",
    date: "October 15, 2023",
    type: "School Activity",
    link: "https://bulb-switch-six.vercel.app/",
    image: BulbOnOff
  },
  {
    id: 2,
    title: "PizzaBan Sibonga",
    description: "Full-stack pizza ordering system with cart functionality",
    date: "June 12, 2024",
    type: "College Final Project",
    link: "https://pizzabansibonga.netlify.app/",
    image: PizzaBan
  },
  {
    id: 3,
    title: "React Calculator",
    description: "Modern calculator with advanced mathematical operations",
    date: "Aug 1, 2024",
    type: "React Practice",
    link: "https://calculator-sigma-hazel.vercel.app/",
    image: Calculator
  },
  {
    id: 4,
    title: "Sukidesu",
    description: "Interactive confession platform with creative UI",
    date: "Aug 10, 2024",
    type: "Side Project",
    link: "https://sukidesu.vercel.app/",
    image: Sukidesu
  },
  {
    id: 5,
    title: "Birthday Gift",
    description: "Digital birthday card with interactive surprises",
    date: "Aug 18, 2024",
    type: "Personal Project",
    link: "https://birthday-gift-eight.vercel.app/",
    image: BirthdayGift
  },
  {
    id: 6,
    title: "BanHotel UI",
    description: "Modern hotel booking interface with responsive design",
    date: "October 1, 2024",
    type: "UI/UX Design",
    link: "https://banhotel.netlify.app/",
    image: BanHotel
  }
];

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Portfolio() {
  return (
    <main className="portfolio-container">
      {/* Hero Section */ }
      <motion.section
        className="portfolio-hero"
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        transition={ { duration: 0.8 } }
      >
        <div className="portfolio-hero-content">
          <motion.div
            className="portfolio-badge"
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={ { delay: 0.2, type: "spring" } }
          >
            <span>🛠️</span>
          </motion.div>
          <motion.h1
            className="portfolio-title"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.3 } }
          >
            My <span className="highlight">Portfolio</span>
          </motion.h1>
          <motion.p
            className="portfolio-subtitle"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.4 } }
          >
            A collection of projects showcasing my journey in web development,
            from simple experiments to complete applications.
          </motion.p>

          <motion.div
            className="portfolio-stats"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 0.5 } }
          >
            <div className="stat">
              <span className="stat-number">{ portfolioItems.length }</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Months</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */ }
      <section className="portfolio-projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Click on any project to explore it live</p>
        </div>

        <motion.div
          className="projects-grid"
          variants={ staggerContainer }
          initial="initial"
          whileInView="animate"
          viewport={ { once: true, margin: "-50px" } }
        >
          { portfolioItems.map((item, index) => (
            <motion.div
              key={ item.id }
              className="project-card-wrapper"
              variants={ {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              } }
              transition={ { duration: 0.5, delay: index * 0.1 } }
            >
              <NavLink
                className="project-card"
                target="_blank"
                to={ item.link }
                aria-label={ `View ${item.title} project` }
              >
                <div className="project-image-container">
                  <motion.img
                    src={ item.image }
                    alt={ item.title }
                    className="project-image"
                    whileHover={ { scale: 1.05 } }
                    transition={ { duration: 0.3 } }
                  />
                  <div className="project-overlay">
                    <span className="view-project">View Project →</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{ item.title }</h3>
                    <span className="project-type">{ item.type }</span>
                  </div>

                  <p className="project-description">{ item.description }</p>

                  <div className="project-footer">
                    <div className="project-date">
                      <svg className="date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{ item.date }</span>
                    </div>
                    <motion.span
                      className="project-link"
                      whileHover={ { x: 5 } }
                      transition={ { duration: 0.2 } }
                    >
                      Visit Site →
                    </motion.span>
                  </div>
                </div>
              </NavLink>
            </motion.div>
          )) }
        </motion.div>
      </section>

        <Email />

      <Footer />
    </main>
  );
}

export default Portfolio;
