import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { AboutSkills } from '../About/AboutSkills';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import CSS from '../../img/Skills/css.png';
import Git from '../../img/Skills/git.png';
import Github from '../../img/Skills/github.png';
import HTML from '../../img/Skills/html.png';
import JS from '../../img/Skills/js.png';
import Mysql from '../../img/Skills/mysql.png';
import PHP from '../../img/Skills/php.png';
import ReactImg from '../../img/Skills/React.png';
import Sass from '../../img/Skills/sass.png';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Skills.css';

const skills = [
  {
    src: HTML,
    alt: 'HTML',
    title: 'HTML5',
    category: 'Frontend',
    proficiency: 95,
    description:
      'Semantic markup, accessibility standards, and modern HTML5 APIs. Building structured, SEO-friendly foundations for web applications.',
  },
  {
    src: CSS,
    alt: 'CSS',
    title: 'CSS3',
    category: 'Frontend',
    proficiency: 90,
    description:
      'Advanced styling with Flexbox, Grid, animations, and responsive design. Creating visually compelling and adaptive user interfaces.',
  },
  {
    src: JS,
    alt: 'JavaScript',
    title: 'JavaScript',
    category: 'Frontend',
    proficiency: 85,
    description:
      'ES6+ features, DOM manipulation, async programming, and modern frameworks. Building interactive and dynamic web experiences.',
  },
  {
    src: ReactImg,
    alt: 'React',
    title: 'React',
    category: 'Frontend',
    proficiency: 80,
    description:
      'Component-based architecture, hooks, state management, and React ecosystem. Developing scalable single-page applications.',
  },
  {
    src: PHP,
    alt: 'PHP',
    title: 'PHP',
    category: 'Backend',
    proficiency: 75,
    description:
      'Server-side scripting, Laravel framework, and RESTful API development. Building robust backend systems and content management.',
  },
  {
    src: Git,
    alt: 'Git',
    title: 'Git',
    category: 'Tools',
    proficiency: 85,
    description:
      'Version control, branching strategies, and collaborative workflows. Managing code efficiently across team environments.',
  },
  {
    src: Mysql,
    alt: 'MySQL',
    title: 'MySQL',
    category: 'Database',
    proficiency: 70,
    description:
      'Database design, query optimization, and relational data modeling. Creating efficient data storage and retrieval systems.',
  },
  {
    src: Github,
    alt: 'GitHub',
    title: 'GitHub',
    category: 'Tools',
    proficiency: 90,
    description:
      'Repository management, pull requests, CI/CD pipelines, and open-source collaboration. Professional code hosting and deployment.',
  },
  {
    src: Sass,
    alt: 'Sass',
    title: 'Sass',
    category: 'Frontend',
    proficiency: 85,
    description:
      'CSS preprocessing with variables, mixins, and functions. Writing maintainable, scalable, and organized stylesheets.',
  },
];

const skillCategories = [
  {
    name: 'Frontend',
    icons: 'https://skillicons.dev/icons?i=html,css,js,ts,react,vite,tailwind,bootstrap,jquery&theme=dark&perline=8'
  },
  {
    name: 'Backend & Tools',
    icons: 'https://skillicons.dev/icons?i=php,mysql,laravel,postgres,supabase,cpp,postman,jwt,axios&theme=dark&perline=8'
  },
  {
    name: 'Dev Tools & Others',
    icons: 'https://skillicons.dev/icons?i=git,github,vscode,npm,eslint,prettier,xampp,openai&theme=dark&perline=8'
  },
  {
    name: 'Operating Systems',
    icons: 'https://skillicons.dev/icons?i=windows,debian,linux,mint,ubuntu&theme=dark&perline=5'
  }
];

function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <main className="skills-page">
      {/* Hero Section */ }
      <section className="skills-hero">
        <div className="skills-hero-content">
          <motion.div
            className="skills-badge"
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={ { type: "spring", delay: 0.2 } }
          >
            <img src={ flames } alt="Flame icon" className="flame-icon" />
            <span>👨‍💻</span>
            <img src={ flames } alt="Flame icon" className="flame-icon" />
          </motion.div>

          <motion.h1
            className="skills-title"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.3 } }
          >
            My <span className="highlight">Technical</span> Arsenal
          </motion.h1>

          <motion.p
            className="skills-subtitle"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.4 } }
          >
            A comprehensive collection of technologies and tools I've mastered to create
            exceptional digital experiences. From frontend magic to backend logic.
          </motion.p>
        </div>
      </section>

      {/* Skills Stats */ }
      <motion.section
        className="skills-stats"
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        transition={ { delay: 0.5 } }
      >
        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">{ skills.length }</span>
            <span className="stat-label">Core Skills</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{ categories.length }</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">25+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </motion.section>

      {/* AboutSkills Section */ }
      <section className="about-skills-section">
        <AboutSkills />
      </section>

      {/* Full Skill Icons Table */ }
      <motion.section
        className="skills-icons-section"
        initial={ { opacity: 0 } }
        whileInView={ { opacity: 1 } }
        viewport={ { once: true } }
      >
        <div className="section-header">
          <h2>Complete Tech Stack</h2>
          <p>All technologies and tools in my development toolkit</p>
        </div>

        <div className="skills-table-container">
          { skillCategories.map((category, index) => (
            <motion.div
              key={ category.name }
              className="skill-category-card"
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { delay: index * 0.1 } }
            >
              <div className="category-header">
                <h3 className="category-name">{ category.name }</h3>
                <span className="category-count">
                  { category.name === 'Frontend' && '8 icons' }
                  { category.name === 'Backend & Tools' && '8 icons' }
                  { category.name === 'Dev Tools & Others' && '8 icons' }
                  { category.name === 'Operating Systems' && '5 icons' }
                </span>
              </div>

              <div className="skill-icons-grid">
                <img
                  src={ category.icons }
                  alt={ `${category.name} technologies` }
                  className="skill-icons-image"
                  loading="lazy"
                />
              </div>

              <div className="category-description">
                { category.name === 'Frontend' && 'Modern web development technologies for creating responsive user interfaces' }
                { category.name === 'Backend & Tools' && 'Server-side technologies and APIs for building robust applications' }
                { category.name === 'Dev Tools & Others' && 'Essential development tools and utilities for productivity' }
                { category.name === 'Operating Systems' && 'Platforms I work with for development and deployment' }
              </div>
            </motion.div>
          )) }
        </div>
      </motion.section>

      {/* Category Filter */ }
      <motion.section
        className="skills-categories"
        initial={ { opacity: 0 } }
        whileInView={ { opacity: 1 } }
        viewport={ { once: true } }
      >
        <div className="categories-container">
          <h2 className="categories-title">Explore Core Skills</h2>
          <div className="category-tags">
            { categories.map((category, index) => (
              <motion.button
                key={ category }
                className="category-tag"
                whileHover={ { scale: 1.05 } }
                whileTap={ { scale: 0.95 } }
                initial={ { opacity: 0, x: -20 } }
                animate={ { opacity: 1, x: 0 } }
                transition={ { delay: index * 0.1 } }
              >
                { category }
              </motion.button>
            )) }
          </div>
        </div>
      </motion.section>

      {/* Detailed Skills Grid */ }
      <section className="skills-grid-section">
        <div className="section-header">
          <h2>Featured Skills</h2>
          <p>Detailed overview of my core development skills</p>
        </div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, margin: "-50px" } }
          variants={ {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          } }
        >
          { skills.map((skill, index) => (
            <motion.div
              key={ index }
              className="skill-card-wrapper"
              variants={ {
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              } }
              whileHover={ { y: -10 } }
              transition={ { duration: 0.3 } }
            >
              <NavLink
                className="skill-card"
                to={ skill.link || '#' }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="skill-card-header">
                  <div className="skill-icon-container">
                    <motion.img
                      src={ skill.src }
                      alt={ skill.alt }
                      className="skill-icon"
                      whileHover={ { rotate: 360 } }
                      transition={ { duration: 0.6, ease: "easeInOut" } }
                    />
                  </div>
                  <div className="skill-title-container">
                    <h3 className="skill-title">{ skill.title }</h3>
                    <span className="skill-category">{ skill.category }</span>
                  </div>
                </div>

                <div className="skill-progress">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={ { width: 0 } }
                      whileInView={ { width: `${skill.proficiency}%` } }
                      viewport={ { once: true } }
                      transition={ { duration: 1, delay: 0.2 } }
                    />
                  </div>
                  <span className="proficiency-text">{ skill.proficiency }%</span>
                </div>

                <p className="skill-description">{ skill.description }</p>

                <div className="skill-footer">
                  <motion.span
                    className="view-more"
                    whileHover={ { x: 5 } }
                    transition={ { duration: 0.2 } }
                  >
                    Learn More →
                  </motion.span>
                </div>
              </NavLink>
            </motion.div>
          )) }
        </motion.div>
      </section>

      {/* Separator */ }
      <div className="skills-separator">
        <img src={ flamesBorder } alt="Decorative separator" className="separator-image" />
      </div>


        <Email />

      <Footer />
    </main>
  );
}

export default Skills;
