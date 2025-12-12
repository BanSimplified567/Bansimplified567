import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Blog.css';

import codeacademyImg from '../../img/Activities/Codeacademy.png';
import devImg from '../../img/Activities/Dev.png';
import freecodecampImg from '../../img/Activities/FreeCodeCamp.jpg';
import geeksforgeeksImg from '../../img/Activities/GeeksforGeeks.jpeg';
import mediumImg from '../../img/Activities/Medium.png';
import w3schoolsImg from '../../img/Activities/W3Schools.png';
import youtubeImg from '../../img/Activities/Youtube.png';

import brocodeImg from '../../img/Activities/BroCode.jpg';
import codingwithlewisImg from '../../img/Activities/CodingWithLewis.jpg';
import connerardmanImg from '../../img/Activities/ConnerArdman.jpg';
import fireshipImg from '../../img/Activities/Fireship.jpg';
import freecodecampChannelImg from '../../img/Activities/FreeCodeCamp.jpg';
import netninjaImg from '../../img/Activities/Netninja.jpg';
import techwithtimImg from '../../img/Activities/TechWithTim.jpg';
import t3dotggImg from '../../img/Activities/t3dotgg.jpg';
import webdevsimplifiedImg from '../../img/Activities/webdevSimplified.jpg';

const resources = [
  {
    category: 'Learning Platforms',
    description: 'Comprehensive platforms for structured learning and skill development',
    count: 7,
    items: [
      {
        name: 'Codeacademy',
        link: 'https://www.codecademy.com/',
        title: 'Codeacademy',
        description: 'Interactive coding classes in multiple programming languages with hands-on exercises and projects.',
        src: codeacademyImg,
        type: 'Interactive Learning'
      },
      {
        name: 'FreeCodeCamp',
        link: 'https://www.freecodecamp.org/',
        title: 'FreeCodeCamp',
        description: 'Non-profit platform with full curriculum, certifications, and project-based learning approach.',
        src: freecodecampImg,
        type: 'Free Curriculum'
      },
      {
        name: 'W3Schools',
        link: 'https://www.w3schools.com/',
        title: 'W3Schools',
        description: 'Comprehensive reference and tutorials for web technologies with interactive code examples.',
        src: w3schoolsImg,
        type: 'Web Reference'
      },
      {
        name: 'GeeksforGeeks',
        link: 'https://www.geeksforgeeks.org/',
        title: 'GeeksforGeeks',
        description: 'Coding resources with DSA practice, tutorials, and competitive programming challenges.',
        src: geeksforgeeksImg,
        type: 'Programming Practice'
      },
      {
        name: 'DEV Community',
        link: 'https://dev.to/',
        title: 'DEV',
        description: 'Collaborative platform where developers share knowledge, tutorials, and experiences.',
        src: devImg,
        type: 'Community'
      },
      {
        name: 'Medium',
        link: 'https://medium.com/',
        title: 'Medium',
        description: 'Platform for technical articles, tutorials, and insights from industry professionals.',
        src: mediumImg,
        type: 'Articles'
      },
      {
        name: 'YouTube',
        link: 'https://www.youtube.com/',
        title: 'YouTube',
        description: 'Vast collection of programming tutorials, lectures, and development content.',
        src: youtubeImg,
        type: 'Video Content'
      },
    ]
  },
  {
    category: 'Programming Channels',
    description: 'YouTube channels that provide valuable programming content',
    count: 9,
    items: [
      {
        name: 'Fireship',
        link: 'https://www.youtube.com/@Fireship',
        title: 'Fireship',
        description: 'Concise, fast-paced tutorials on modern web technologies with engaging presentations.',
        src: fireshipImg,
        type: 'Web Development'
      },
      {
        name: 'WebDevSimplified',
        link: 'https://www.youtube.com/@WebDevSimplified',
        title: 'WebDevSimplified',
        description: 'Clear, practical web development tutorials focusing on modern best practices.',
        src: webdevsimplifiedImg,
        type: 'Tutorials'
      },
      {
        name: 'ConnerArdman',
        link: 'https://www.youtube.com/@ConnerArdman',
        title: 'ConnerArdman',
        description: 'Full-stack development tutorials with emphasis on practical project building.',
        src: connerardmanImg,
        type: 'Full-Stack'
      },
      {
        name: 'NetNinja',
        link: 'https://www.youtube.com/@NetNinja',
        title: 'NetNinja',
        description: 'Comprehensive series on various frameworks and technologies with detailed explanations.',
        src: netninjaImg,
        type: 'Learning Series'
      },
      {
        name: 'BroCode',
        link: 'https://www.youtube.com/@BroCodez',
        title: 'BroCode',
        description: 'Complete programming tutorials with a focus on Python and web development fundamentals.',
        src: brocodeImg,
        type: 'Beginners'
      },
      {
        name: 'CodingWithLewis',
        link: 'https://www.youtube.com/@CodingWithLewis',
        title: 'CodingWithLewis',
        description: 'Game development and web technology tutorials with practical coding sessions.',
        src: codingwithlewisImg,
        type: 'Game Dev'
      },
      {
        name: 'TechWithTim',
        link: 'https://www.youtube.com/@TechWithTim',
        title: 'TechWithTim',
        description: 'Python and AI tutorials with a focus on practical applications and project building.',
        src: techwithtimImg,
        type: 'Python & AI'
      },
      {
        name: 't3dotgg',
        link: 'https://www.youtube.com/@t3dotgg',
        title: 't3dotgg',
        description: 'Modern web development content with a focus on TypeScript and full-stack applications.',
        src: t3dotggImg,
        type: 'TypeScript'
      },
      {
        name: 'FreeCodeCamp',
        link: 'https://www.youtube.com/@freecodecamp',
        title: 'FreeCodeCamp',
        description: 'Long-form comprehensive tutorials covering a wide range of programming topics.',
        src: freecodecampChannelImg,
        type: 'Comprehensive'
      },
    ]
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function Blog() {
  return (
    <main className="blog-page">
      {/* Hero Section */ }
      <section className="blog-hero">
        <div className="blog-hero-content">
          <motion.div
            className="blog-badge"
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={ { type: "spring", delay: 0.2 } }
          >
            <img src={ flames } alt="Animated flame" className="flame-icon" />
            <span>📚</span>
            <img src={ flames } alt="Animated flame" className="flame-icon" />
          </motion.div>

          <motion.h1
            className="blog-title"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.3 } }
          >
            Development <span className="highlight">Resources</span>
          </motion.h1>

          <motion.p
            className="blog-subtitle"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.4 } }
          >
            Curated collection of platforms, tutorials, and channels that have been
            invaluable in my web development journey.
          </motion.p>

          <div className="blog-stats">
            <div className="blog-stat">
              <span className="stat-number">{ resources.length }</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="blog-stat">
              <span className="stat-number">{ resources.reduce((acc, curr) => acc + curr.items.length, 0) }</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="blog-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */ }
      <section className="resources-section">
        <motion.div
          className="resources-container"
          variants={ staggerContainer }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, margin: "-50px" } }
        >
          { resources.map((category, categoryIndex) => (
            <motion.div
              key={ categoryIndex }
              className="category-section"
              variants={ itemAnimation }
            >
              <div className="category-header">
                <div className="category-title-container">
                  <h2 className="category-title">{ category.category }</h2>
                  <span className="category-count">{ category.count } Resources</span>
                </div>
                <p className="category-description">{ category.description }</p>
              </div>

              <motion.div
                className="resources-grid"
                variants={ staggerContainer }
              >
                { category.items.map((resource, index) => (
                  <motion.div
                    key={ index }
                    className="resource-card-wrapper"
                    variants={ itemAnimation }
                    whileHover={ { y: -10 } }
                    transition={ { duration: 0.3 } }
                  >
                    <NavLink
                      className="resource-card"
                      to={ resource.link }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="resource-image-container">
                        <motion.img
                          src={ resource.src }
                          alt={ resource.name }
                          className="resource-image"
                          whileHover={ { scale: 1.05 } }
                          transition={ { duration: 0.3 } }
                        />
                        <div className="resource-type">
                          { resource.type }
                        </div>
                      </div>

                      <div className="resource-content">
                        <div className="resource-title-container">
                          <h3 className="resource-title">{ resource.title }</h3>
                          <span className="resource-platform">
                            { category.category === 'Learning Platforms' ? '🌐 Platform' : '🎬 YouTube' }
                          </span>
                        </div>

                        <p className="resource-description">{ resource.description }</p>

                        <div className="resource-footer">
                          <motion.span
                            className="visit-resource"
                            whileHover={ { x: 5 } }
                            transition={ { duration: 0.2 } }
                          >
                            Visit Resource →
                          </motion.span>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                )) }
              </motion.div>
            </motion.div>
          )) }
        </motion.div>
      </section>

      {/* Separator */ }
      <div className="blog-separator">
        <img src={ flamesBorder } alt="Decorative separator" className="separator-image" />
      </div>
          <Email />

      <Footer />
    </main>
  );
}

export default Blog;
