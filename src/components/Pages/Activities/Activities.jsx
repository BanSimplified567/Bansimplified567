import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Activity01 from '../../img/Activities/Activity01.png';
import Activity02 from '../../img/Activities/Activity02.png';
import Activity03 from '../../img/Activities/Activity03.png';
import Activity04 from '../../img/Activities/Activity04.png';
import JavascriptTutorial from '../../img/Activities/JSimage.jpg';
import BackGround from '../../img/assets/pixel-neon.gif';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Activities.css';

const activities = [
  {
    src: Activity01,
    alt: 'Activity01',
    link: 'https://web.facebook.com/him.blacklion567/videos/1362680517723712',
    title: 'Weather Data Fetching',
    description: 'This is my first code explanation, which is about fetching data to check the weather of any city, country, province, or barangay. The website retrieves the temperature, pressure, and daytime information for the specified location.',
    tags: ['JavaScript', 'API', 'Web Dev']
  },
  {
    src: Activity02,
    alt: 'Activity02',
    link: 'https://web.facebook.com/him.blacklion567/videos/970403707848208',
    title: 'Grade Calculator',
    description: 'In this video, I explain our school activity that calculates grades from quizzes and major exams. The system computes your final grade and displays the results.',
    tags: ['JavaScript', 'Calculator', 'Education']
  },
  {
    src: Activity03,
    alt: 'Activity03',
    link: 'https://web.facebook.com/him.blacklion567/videos/1186005469492945',
    title: 'Number Range Counter',
    description: 'In this tutorial, I demonstrate a program that displays starting and ending number ranges with clean, efficient JavaScript implementation.',
    tags: ['JavaScript', 'Logic', 'Tutorial']
  },
  {
    src: Activity04,
    alt: 'Activity04',
    link: 'https://web.facebook.com/him.blacklion567/videos/1166506001439419',
    title: 'Interactive Light Bulb',
    description: 'A demonstration of DOM manipulation where clicking toggles between bulb ON/OFF states. Perfect example of interactive web development.',
    tags: ['JavaScript', 'DOM', 'Interactive']
  },
  {
    src: JavascriptTutorial,
    alt: 'JavaScript Tutorial Beginner Guide',
    link: 'https://www.youtube.com/watch?v=7LIyhZFDiX0&list=PLnqszaQYMLok3hQn_5-fs-EdotIFSBZwC',
    title: 'JavaScript Tutorial (Cebuano)',
    description: 'Complete JavaScript tutorial series for Cebuano/Bisaya speakers. Covering fundamentals to advanced concepts with practical examples and clear explanations.',
    tags: ['Tutorial', 'JavaScript', 'Video Series']
  },
];

function Activities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardImageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <main className="activities-container">
      {/* Hero Section */ }
      <motion.section
        className="activities-hero"
        initial="hidden"
        animate="visible"
        variants={ containerVariants }
      >
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            variants={ fadeInUp }
          >
            My Development Journey
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            variants={ fadeInUp }
          >
            Explore my coding activities, tutorials, and projects as I grow from beginner to frontend developer. Each project represents a step in my learning journey.
          </motion.p>
          <motion.div
            className="hero-cta"
            variants={ fadeInUp }
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={ { scale: 1.05 } }
              whileTap={ { scale: 0.98 } }
            >
              View Projects
            </motion.a>
            <motion.a
              href="#stats"
              className="btn-secondary"
              whileHover={ { scale: 1.05 } }
              whileTap={ { scale: 0.98 } }
            >
              See Stats
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="hero-background"
          initial={ { opacity: 0, scale: 1.1 } }
          animate={ { opacity: 1, scale: 1 } }
          transition={ { duration: 0.8 } }
        >
          <motion.img
            src={ BackGround }
            alt="Coding Background"
            className="background-image"
            animate={ {
              filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
            } }
            transition={ {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            } }
          />
          <div className="background-overlay"></div>
        </motion.div>
      </motion.section>

      {/* Projects Grid Section */ }
      <section id="projects" className="projects-section">
        <div className="section-container">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
            viewport={ { once: true, amount: 0.3 } }
          >
            <h2 className="section-title">
              <span className="title-icon">💻</span>
              Featured Projects & Tutorials
            </h2>
            <p className="section-subtitle">
              Interactive web projects and educational content showcasing JavaScript fundamentals
            </p>
          </motion.div>

          <motion.div
            className="projects-grid"
            variants={ containerVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.1 } }
          >
            { activities.map((activity, index) => (
              <motion.article
                key={ index }
                className="project-card"
                variants={ itemVariants }
                whileHover="hover"
              >
                <NavLink
                  to={ activity.link }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <div className="card-image-container">
                    <motion.div
                      className="image-wrapper"
                      variants={ cardImageVariants }
                    >
                      <img
                        src={ activity.src }
                        alt={ activity.alt }
                        className="project-image"
                      />
                    </motion.div>
                    <div className="card-overlay">
                      <motion.span
                        className="view-project"
                        initial={ { x: 20, opacity: 0 } }
                        whileHover={ { x: 0, opacity: 1 } }
                        transition={ { duration: 0.2 } }
                      >
                        View Project →
                      </motion.span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{ activity.title }</h3>
                    <p className="card-description">{ activity.description }</p>
                    <div className="card-tags">
                      { activity.tags.map((tag, i) => (
                        <span key={ i } className="tag">{ tag }</span>
                      )) }
                    </div>
                  </div>
                </NavLink>
              </motion.article>
            )) }
          </motion.div>
        </div>
      </section>

      {/* Stats Section */ }
      <section id="stats" className="stats-section">
        <div className="section-container">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
            viewport={ { once: true, amount: 0.3 } }
          >
            <h2 className="section-title">
              <span className="title-icon">📊</span>
              Development Analytics
            </h2>
          </motion.div>

          <div className="stats-grid">
            <motion.div
              className="stats-card"
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: 0.1 } }
              viewport={ { once: true } }
            >
              <h3 className="stats-card-title">🏆 WakaTime Statistics</h3>
              <p className="stats-card-description">Tracking my coding activity and productivity metrics</p>

              <div className="stats-images">
                <a href="https://wakatime.com/@BanBan" target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src="https://wakatime.com/badge/user/018c974d-1366-4d7f-9b95-0e80821d2165.svg" alt="wakatime"
                    className="stats-image"
                    whileHover={ { scale: 1.03 } }
                    transition={ { duration: 0.3 } }
                  />
                </a>

              </div>
              <a href="https://wakatime.com" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src="https://wakatime.com/share/@BanBan/8f2a2577-a6d4-4a17-b839-30c5da0183d9.png"
                  alt="WakaTime Activity"
                  className="stats-image"
                  whileHover={ { scale: 1.03 } }
                  transition={ { duration: 0.3 } }
                />
              </a>
            </motion.div>

            <motion.div
              className="profile-highlight"
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: 0.2 } }
              viewport={ { once: true } }
            >
              <motion.div
                className="profile-image-container"
                whileHover={ { scale: 1.05 } }
                transition={ { duration: 0.3 } }
              >
                <img src="./ban.jpg" alt="Profile" className="profile-image" />
              </motion.div>
              <div className="profile-content">
                <h4 className="profile-title">Continuous Learning</h4>
                <p className="profile-text">Tracking progress and improving skills daily through consistent coding practice.</p>
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-value">Daily</span>
                    <span className="stat-label">Practice</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">Progress</span>
                    <span className="stat-label">Tracking</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GitHub Section */ }
      <section className="github-section">
        <div className="section-container">
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
            viewport={ { once: true, amount: 0.3 } }
          >
            <h2 className="section-title">
              <span className="title-icon">⚡</span>
              GitHub Performance
            </h2>
          </motion.div>

          <div className="github-content">
            <motion.div
              className="github-stats"
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: 0.1 } }
              viewport={ { once: true } }
            >
              <div className="stats-row">
                <figure><embed src="https://wakatime.com/share/@BanBan/e9200521-aebd-4178-b4d6-fabb2d541b2c.svg"></embed></figure>

                <a href="https://wakatime.com"><img src="https://wakatime.com/share/@BanBan/c2d1fd52-bb72-450a-a48d-1e4747c1a50d.png" /></a>

              </div>
            </motion.div>

            <motion.div
              className="github-profile"
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: 0.2 } }
              viewport={ { once: true } }
            >
              <div className="github-profile-content">
                <motion.div
                  className="github-image-container"
                  whileHover={ { scale: 1.05 } }
                  transition={ { duration: 0.3 } }
                >
                  <img src="./banban.jpg" alt="GitHub Profile" className="github-avatar" />
                </motion.div>
                <div className="github-info">
                  <h4 className="github-title">Open Source Contributions</h4>
                  <p className="github-text">Regular commits and contributions showing dedication to growth and learning.</p>
                  <motion.a
                    href="https://github.com/BanSimplified567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                    whileHover={ { x: 5 } }
                    transition={ { duration: 0.2 } }
                  >
                    View GitHub Profile →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        <Email />

      <Footer />
    </main>
  );
}

export default Activities;
