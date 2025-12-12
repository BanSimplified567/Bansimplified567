import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import flamesBorder from '../../img/assets/borderseparator.gif';
import { ContactCategory } from '../Extra/ContactCategory/ContactCategory';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Home.css';

const stats = [
  { label: 'Projects Completed', value: '50+', icon: '🚀' },
  { label: 'Technologies Mastered', value: '25+', icon: '💻' },
  { label: 'Years Experience', value: '2+', icon: '📈' },
  { label: 'Client Satisfaction', value: '100%', icon: '⭐' },
];

const skills = [
  'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Responsive Design',
  'UI/UX', 'Frontend Development', 'Web Performance', 'Modern Frameworks'
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

  return (
    <main className="home-page">
      {/* Enhanced Hero Section */ }
      <section className="home-hero">
        <div className="hero-background">
          <div className="hero-background-gradient"></div>
          <div className="hero-background-pattern"></div>
        </div>

        <div className="home-hero-content">
          <div className="hero-main-content">
            {/* Left Column - Text Content */ }
            <div className="hero-text-content">
              <motion.div
                className="hero-badge"
                initial={ { scale: 0 } }
                animate={ { scale: 1 } }
                transition={ { type: "spring", delay: 0.2 } }
              >
                <span className="badge-icon">👨‍💻</span>
                <span className="badge-text">Available for Opportunities</span>
              </motion.div>

              <motion.div
                className="hero-heading"
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { delay: 0.3 } }
              >
                <h1 className="hero-title">
                  <span className="title-line">Jade Ivan V.</span>
                  <span className="title-line highlight">Bringcola</span>
                </h1>
                <div className="hero-subtitle">
                  <span className="subtitle-text">Aspiring Software Engineer</span>
                  <div className="subtitle-divider"></div>
                  <span className="subtitle-text">Frontend Specialist</span>
                </div>
              </motion.div>

              <motion.p
                className="hero-description"
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { delay: 0.4 } }
              >
                I transform ideas into exceptional digital experiences through clean code
                and thoughtful design. Passionate about building scalable, user-friendly
                applications that make an impact.
              </motion.p>

              <motion.div
                className="hero-cta"
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { delay: 0.5 } }
              >
                <button className="cta-button primary">
                  <span>View My Work</span>
                  <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="cta-button secondary">
                  <span>Contact Me</span>
                  <svg className="message-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Right Column - Profile */ }
            <motion.div
              className="hero-profile"
              initial={ { opacity: 0, x: 50 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { delay: 0.4, duration: 0.6 } }
            >
              <div className="profile-container">
                <div className="profile-image-wrapper">
                  <img src="./ban.jpg" alt="Jade Ivan Bringcola" className="profile-image" />
                  <div className="profile-status">
                    <div className="status-indicator"></div>
                    <span className="status-text">Available</span>
                  </div>
                </div>

                <div className="profile-info">
                  <div className="experience-card">
                    <div className="experience-icon">⏳</div>
                    <div className="experience-content">
                      <div className="experience-title">Coding Journey</div>
                      <div className="experience-time">
                        <span className="time-number">{ timeLeft.years }</span>
                        <span className="time-label">Years</span>
                        <span className="time-number">{ timeLeft.months }</span>
                        <span className="time-label">Months</span>
                        <span className="time-number">{ timeLeft.days }</span>
                        <span className="time-label">Days</span>
                      </div>
                    </div>
                  </div>

                  <div className="profile-location">
                    <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Sibonga, Cebu, Philippines</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Marquee */ }
          <motion.div
            className="skills-marquee"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.6 } }
          >
            <div className="marquee-label">Technologies I Work With</div>
            <div className="marquee-container">
              <div className="marquee-track">
                { skills.map((skill, index) => (
                  <div key={ index } className="marquee-item">
                    <span className="marquee-skill">{ skill }</span>
                    <span className="marquee-dot">•</span>
                  </div>
                )) }
                { skills.map((skill, index) => (
                  <div key={ `dup-${index}` } className="marquee-item">
                    <span className="marquee-skill">{ skill }</span>
                    <span className="marquee-dot">•</span>
                  </div>
                )) }
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */ }
      <section className="home-stats">
        <div className="stats-background"></div>
        <div className="stats-container">
          <div className="stats-header">
            <h2 className="stats-title">By The Numbers</h2>
            <p className="stats-subtitle">A quick look at my development journey</p>
          </div>

          <motion.div
            className="stats-grid"
            variants={ staggerContainer }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true } }
          >
            { stats.map((stat, index) => (
              <motion.div
                key={ index }
                className="stat-card"
                variants={ itemAnimation }
                whileHover={ { scale: 1.05, y: -5 } }
                transition={ { duration: 0.3 } }
              >
                <div className="stat-icon">{ stat.icon }</div>
                <div className="stat-content">
                  <div className="stat-value">{ stat.value }</div>
                  <div className="stat-label">{ stat.label }</div>
                </div>
                <div className="stat-decoration"></div>
              </motion.div>
            )) }
          </motion.div>
        </div>
      </section>

      {/* Contact Section */ }
      <section className="home-contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">Reach out for collaborations or just to say hello!</p>
          </div>
          <ContactCategory />
        </div>
      </section>

      {/* Decorative Separator */ }
      <div className="home-separator">
        <div className="separator-wrapper">
          <div className="separator-line"></div>
          <img src={ flamesBorder } alt="Decorative separator" className="separator-image" />
          <div className="separator-line"></div>
        </div>
      </div>
      <Email />
      <Footer />
    </main>
  );
}

export default Home;
