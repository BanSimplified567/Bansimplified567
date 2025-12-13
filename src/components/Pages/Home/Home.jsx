import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flamesBorder from '../../img/assets/borderseparator.gif';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Home.css';

// Professional contact links data
const professionalLinks = [
  {
    name: 'LinkedIn',
    icon: '👔',
    color: '#0077B5',
    description: 'Professional Network',
    link: 'https://linkedin.com/in/jade-ivan-bringcola',
    gradient: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)'
  },
  {
    name: 'GitHub',
    icon: '💻',
    color: '#333',
    description: 'Code Portfolio',
    link: 'https://github.com/jadeivanbringcola',
    gradient: 'linear-gradient(135deg, #333 0%, #666 100%)'
  },
  {
    name: 'Portfolio',
    icon: '📁',
    color: '#667eea',
    description: 'Project Showcase',
    link: '/portfolio',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    name: 'Resume',
    icon: '📄',
    color: '#43e97b',
    description: 'Download CV',
    link: '/resume',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    name: 'Email',
    icon: '✉️',
    color: '#ea4335',
    description: 'Contact Directly',
    link: 'mailto:bansimplified567@gmail.com',
    gradient: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 100%)'
  },
  {
    name: 'Calendly',
    icon: '📅',
    color: '#006BFF',
    description: 'Schedule Meeting',
    link: 'https://calendly.com/jade-ivan',
    gradient: 'linear-gradient(135deg, #006BFF 0%, #00D4FF 100%)'
  }
];

// Professional stats
const professionalStats = [
  {
    label: 'Projects Delivered',
    value: '50+',
    icon: '🚀',
    description: 'Successfully completed projects'
  },
  {
    label: 'Tech Stack',
    value: '25+',
    icon: '💻',
    description: 'Modern technologies mastered'
  },
  {
    label: 'Years Experience',
    value: '2+',
    icon: '📈',
    description: 'Professional development experience'
  },
  {
    label: 'Client Satisfaction',
    value: '100%',
    icon: '⭐',
    description: 'Positive client feedback'
  },
  {
    label: 'Code Quality',
    value: '98%',
    icon: '📊',
    description: 'Clean, maintainable code'
  },
  {
    label: 'Response Time',
    value: '<24h',
    icon: '⏱️',
    description: 'Average response time'
  }
];

// Professional skills
const professionalSkills = [
  { category: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Vue.js'] },
  { category: 'Styling', skills: ['CSS3', 'Tailwind', 'Sass', 'Styled Components', 'Bootstrap'] },
  { category: 'Tools', skills: ['Git', 'Webpack', 'Vite', 'Figma', 'VS Code'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs'] }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const calculateTimeSince = () => {
      const startDate = new Date('2022-09-10');
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      return { years, months, days };
    };

    setTimeLeft(calculateTimeSince());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeSince());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  const handlePrimaryCTAClick = () => {
    navigate('/portfolio');
  };

  const handleSecondaryCTAClick = () => {
    navigate('/commission');
  };

  const handleContactClick = (link) => {
    if (link.startsWith('/')) {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="professional-home-page">
      {/* Professional Hero Section */ }
      <section className="professional-hero">
        <div className="hero-background-animation">
          <div className="hero-grid-overlay"></div>
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="professional-hero-container">
          <div className="hero-content-wrapper">
            {/* Left Column - Professional Intro */ }
            <motion.div
              className="hero-intro-section"
              initial={ { opacity: 0, x: -50 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.8 } }
            >
              <div className="professional-badge">
                <span className="badge-dot"></span>
                <span className="badge-text">Open to Opportunities</span>
              </div>

              <h1 className="professional-title">
                <span className="title-primary">Jade Ivan V.</span>
                <span className="title-accent">Bringcola</span>
              </h1>

              <h2 className="professional-subtitle">
                Senior Frontend Developer & UI Specialist
              </h2>

              <p className="professional-description">
                I architect exceptional digital experiences through clean, scalable code and
                intuitive design. With a passion for performance and user experience, I transform
                complex problems into elegant solutions that drive business success.
              </p>

              <div className="professional-cta-section">
                <motion.button
                  className="cta-primary"
                  whileHover={ { scale: 1.05 } }
                  whileTap={ { scale: 0.95 } }
                  onClick={ handlePrimaryCTAClick }
                >
                  <span>Explore My Work</span>
                  <svg className="cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>

                <motion.button
                  className="cta-secondary"
                  whileHover={ { scale: 1.05 } }
                  whileTap={ { scale: 0.95 } }
                  onClick={ handleSecondaryCTAClick }
                >
                  <span>Hire Me</span>
                  <svg className="cta-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </div>

              <div className="experience-display">
                <div className="experience-item">
                  <span className="experience-label">Professional Experience</span>
                  <span className="experience-value">
                    { timeLeft.years } years { timeLeft.months } months
                  </span>
                </div>
                <div className="experience-item">
                  <span className="experience-label">Based In</span>
                  <span className="experience-value">Cebu, Philippines</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Profile & Contact */ }
            <motion.div
              className="hero-profile-section"
              initial={ { opacity: 0, x: 50 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.8, delay: 0.2 } }
            >
              <div className="profile-card">
                <div className="profile-image-container">
                  <img
                    src="./ban.jpg"
                    alt="Jade Ivan Bringcola - Professional Web Developer"
                    className="professional-profile-image"
                  />
                  <div className="profile-availability">
                    <div className="availability-indicator"></div>
                    <span>Available for Projects</span>
                  </div>
                </div>

                <div className="profile-contact-info">
                  <div className="contact-email">
                    <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>bansimplified567@gmail.com</span>
                  </div>

                  <div className="contact-phone">
                    <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9381 20.4733 21.8158 20.7232C21.6935 20.9731 21.5153 21.1912 21.295 21.3612C21.0747 21.5312 20.8184 21.6486 20.5452 21.7046C20.272 21.7606 19.9895 21.7537 19.72 21.684C16.7433 20.8801 14.052 19.3406 11.94 17.226C9.82799 15.1114 8.29126 12.4185 7.49 9.44001C7.4203 9.17053 7.41342 8.88803 7.46944 8.61482C7.52547 8.3416 7.64284 8.0853 7.81284 7.86502C7.98284 7.64474 8.20097 7.46652 8.45085 7.34422C8.70074 7.22192 8.97553 7.15892 9.254 7.16001H12.254C12.7195 7.15902 13.1664 7.34444 13.4992 7.67729C13.8321 8.01014 14.0175 8.45701 14.0165 8.92251C14.0155 9.26584 13.9743 9.60765 13.894 9.94001C14.0553 10.5257 14.3055 11.0844 14.636 11.598C14.7575 11.7797 14.8318 11.9887 14.8523 12.2061C14.8728 12.4235 14.8389 12.6427 14.754 12.844L13.564 15.494C14.7052 16.9626 16.1916 18.1299 17.896 18.896L20.546 17.706C20.7472 17.6211 20.9665 17.5872 21.1839 17.6077C21.4013 17.6282 21.6102 17.7025 21.792 17.824C22.3056 18.1545 22.8623 18.4047 23.448 18.566C23.7803 18.6461 24.1222 18.6874 24.4655 18.686C24.931 18.685 25.3779 18.8704 25.7107 19.2033C26.0436 19.5361 26.229 19.983 26.228 20.4485V23.4485" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>+63 961 983 9317</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Skills Marquee */ }
          <motion.div
            className="professional-skills-marquee"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.6 } }
          >
            <div className="skills-header">
              <span className="skills-label">Expertise Includes:</span>
            </div>
            <div className="skills-track">
              { professionalSkills.flatMap(category => category.skills).map((skill, index) => (
                <div key={ index } className="skill-chip">
                  <span className="skill-text">{ skill }</span>
                </div>
              )) }
              { professionalSkills.flatMap(category => category.skills).map((skill, index) => (
                <div key={ `dup-${index}` } className="skill-chip">
                  <span className="skill-text">{ skill }</span>
                </div>
              )) }
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Stats Section */ }
      <section className="professional-stats-section">
        <div className="stats-section-background">
          <div className="stats-pattern"></div>
        </div>

        <div className="stats-section-container">
          <div className="stats-section-header">
            <h2 className="stats-section-title">Professional Impact</h2>
            <p className="stats-section-subtitle">
              Measurable results and proven expertise in web development
            </p>
          </div>

          <motion.div
            className="professional-stats-grid"
            variants={ staggerContainer }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, margin: "-100px" } }
          >
            { professionalStats.map((stat, index) => (
              <motion.div
                key={ index }
                className="professional-stat-card"
                variants={ itemAnimation }
                whileHover={ { y: -10 } }
                transition={ { duration: 0.3 } }
              >
                <div className="stat-icon-container">
                  <span className="stat-icon">{ stat.icon }</span>
                </div>
                <div className="stat-content">
                  <div className="stat-value">{ stat.value }</div>
                  <div className="stat-label">{ stat.label }</div>
                  <div className="stat-description">{ stat.description }</div>
                </div>
                <div className="stat-decoration"></div>
              </motion.div>
            )) }
          </motion.div>
        </div>
      </section>

      {/* Professional Contact Links */ }
      <section className="professional-contact-section">
        <div className="contact-section-container">
          <div className="contact-section-header">
            <h2 className="contact-section-title">Connect With Me</h2>
            <p className="contact-section-subtitle">
              Professional channels for collaboration and opportunities
            </p>
          </div>

          <motion.div
            className="professional-contact-grid"
            variants={ staggerContainer }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true } }
          >
            { professionalLinks.map((link, index) => (
              <motion.div
                key={ index }
                className="contact-card"
                variants={ itemAnimation }
                whileHover={ { scale: 1.05, y: -5 } }
                transition={ { duration: 0.3 } }
                onClick={ () => handleContactClick(link.link) }
              >
                <div
                  className="contact-card-header"
                  style={ { background: link.gradient } }
                >
                  <span className="contact-icon">{ link.icon }</span>
                </div>

                <div className="contact-card-content">
                  <h3 className="contact-name">{ link.name }</h3>
                  <p className="contact-description">{ link.description }</p>

                  <div className="contact-action">
                    <span className="action-text">Visit</span>
                    <svg className="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="contact-card-hover"></div>
              </motion.div>
            )) }
          </motion.div>
        </div>
      </section>

      {/* Professional Separator */ }
      <div className="professional-separator">
        <div className="separator-container">
          <div className="separator-line"></div>
          <div className="separator-icon">
            <img src={ flamesBorder } alt="Professional separator" className="separator-image" />
          </div>
          <div className="separator-line"></div>
        </div>
      </div>

      {/* Call to Action */ }
      <section className="professional-cta-section">
        <div className="cta-background">
          <div className="cta-gradient"></div>
        </div>

        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
          >
            <h2 className="cta-title">Ready to Build Something Extraordinary?</h2>
            <p className="cta-description">
              Let's discuss how I can help bring your vision to life with cutting-edge
              web development and exceptional user experiences.
            </p>

            <div className="cta-action-buttons">
              <motion.button
                className="cta-action-primary"
                whileHover={ { scale: 1.05 } }
                whileTap={ { scale: 0.95 } }
                onClick={ handleSecondaryCTAClick }
              >
                Start a Project
              </motion.button>

              <motion.button
                className="cta-action-secondary"
                whileHover={ { scale: 1.05 } }
                whileTap={ { scale: 0.95 } }
                onClick={ handlePrimaryCTAClick }
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Email />
      <Footer />
    </main>
  );
}

export default Home;
