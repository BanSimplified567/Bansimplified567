import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BanBan from '../../img/BanBan/banban2.jpg';
import BlogPersonalWeb from '../../img/Commission/blogPersonalWebsite.png';
import BusinessWeb from '../../img/Commission/Business.png';
import ELearningWeb from '../../img/Commission/OnlineLearning.png';
import SchoolActivityWeb from '../../img/Commission/schoolActivity.jpeg';
import WebSiteFrontend from '../../img/Commission/WebsiteLaptop.svg';
import EcommerceWeb from '../../img/PortfolioImages/PizzaBan.png';

import Facebook from '../../img/SocialMediaAccounts/Facebook.png';
import Fiverr from '../../img/SocialMediaAccounts/Fiverr.png';
import Instagram from '../../img/SocialMediaAccounts/Instagram.png';
import Linkendin from '../../img/SocialMediaAccounts/Linkendin.png';
import Tiktok from '../../img/SocialMediaAccounts/TikTok.png';
import Twitter from '../../img/SocialMediaAccounts/Twitter.png';

import Footer from '../../Pages/Extra/Footer/Footer';
import { SocialMediaLink } from '../Extra/ContactCategory/ContactCategory';
import Email from '../Extra/Email/Email';
import './Commission.css';

const websiteTypes = [
  {
    name: 'E-commerce',
    image: EcommerceWeb,
    description: 'Online stores with shopping carts, payment integration, and inventory management',
    features: ['Shopping Cart', 'Payment Gateway', 'Product Management', 'Order Tracking']
  },
  {
    name: 'Blog/Personal',
    image: BlogPersonalWeb,
    description: 'Content-focused websites with blogging capabilities and personal portfolios',
    features: ['Blog System', 'Content Management', 'SEO Optimized', 'Responsive Design']
  },
  {
    name: 'Business',
    image: BusinessWeb,
    description: 'Professional business websites with service showcases and lead generation',
    features: ['Service Pages', 'Contact Forms', 'Testimonials', 'Lead Generation']
  },
  {
    name: 'E-Learning Platform',
    image: ELearningWeb,
    description: 'Educational platforms with course management and student dashboards',
    features: ['Course Management', 'Student Portal', 'Progress Tracking', 'Video Integration']
  },
  {
    name: 'School Activity',
    image: SchoolActivityWeb,
    description: 'Educational projects and school activity websites with interactive features',
    features: ['Project Showcase', 'Interactive Elements', 'Team Collaboration', 'Academic Focus']
  }
];

const pricingPlans = [
  {
    title: 'BASIC',
    level: 'School Activity',
    features: [
      'Responsive Design',
      '3-5 Pages',
      'Basic Animations',
      'Social Media Integration',
      '1 Revision'
    ],
    price: '$5',
    delivery: '3-5 Days',
    colorClass: 'basic-plan',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'STANDARD',
    level: 'Baby Capstone',
    features: [
      'Advanced UI/UX Design',
      '5-8 Pages',
      'Custom Animations',
      'Contact Form Integration',
      'Basic SEO',
      '3 Revisions',
      'Mobile Responsive'
    ],
    price: '$10',
    delivery: '1-2 Weeks',
    colorClass: 'standard-plan',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    isFeatured: true
  },
  {
    title: 'PREMIUM',
    level: 'Capstone Level',
    features: [
      'Full Stack Development',
      'Database Integration',
      'User Authentication',
      'Admin Dashboard',
      'Advanced SEO',
      'E-commerce Features',
      'Unlimited Revisions',
      'Performance Optimization'
    ],
    price: '$85',
    delivery: '3-4 Weeks',
    colorClass: 'premium-plan',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  }
];

const socialMediaAccounts = [
  { name: 'Facebook', image: Facebook, color: '#1877F2' },
  { name: 'LinkedIn', image: Linkendin, color: '#0A66C2' },
  { name: 'Fiverr', image: Fiverr, color: '#1DBF73' },
  { name: 'Instagram', image: Instagram, color: '#E4405F' },
  { name: 'Twitter', image: Twitter, color: '#1DA1F2' },
  { name: 'TikTok', image: Tiktok, color: '#000000' }
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
      duration: 0.5
    }
  }
};

function Commission() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <main className="commission-page">
      {/* Hero Section */ }
      <section className="commission-hero">
        <div className="commission-hero-content">
          <motion.div
            className="commission-badge"
            initial={ { scale: 0 } }
            animate={ { scale: 1 } }
            transition={ { type: "spring", delay: 0.2 } }
          >
            <span>💼</span>
            <span>Available for Work</span>
          </motion.div>

          <motion.h1
            className="commission-title"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.3 } }
          >
            Let's Build Something <span className="highlight">Amazing</span> Together
          </motion.h1>

          <motion.p
            className="commission-subtitle"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { delay: 0.4 } }
          >
            I transform your ideas into functional, beautiful websites. From simple school projects
            to complex business applications, I've got you covered.
          </motion.p>

          <motion.div
            className="commission-cta"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 0.5 } }
          >
            <button className="cta-button" onClick={ handleContactClick }>
              Start Your Project
            </button>
            <div className="contact-info">
              <span className="phone-number">📱 +63 93 1028 2926</span>
              <span className="email-text">✉️ banjames2004@gmail.com</span>
            </div>
          </motion.div>

          <motion.div
            className="commission-profile"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 0.6 } }
          >
            <img src={ BanBan } alt="James Ban" className="profile-image" />
            <div className="profile-social">
              <SocialMediaLink />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Stats */ }
      <section className="services-stats">
        <motion.div
          className="stats-container"
          variants={ staggerContainer }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true } }
        >
          <motion.div className="stat-card" variants={ itemAnimation }>
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Completed</span>
          </motion.div>
          <motion.div className="stat-card" variants={ itemAnimation }>
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </motion.div>
          <motion.div className="stat-card" variants={ itemAnimation }>
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </motion.div>
          <motion.div className="stat-card" variants={ itemAnimation }>
            <span className="stat-number">Fast</span>
            <span className="stat-label">Delivery</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Website Types */ }
      <section className="website-types">
        <div className="section-header">
          <h2>Types of Websites I Build</h2>
          <p>Custom solutions tailored to your specific needs</p>
        </div>

        <motion.div
          className="website-grid"
          variants={ staggerContainer }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, margin: "-50px" } }
        >
          { websiteTypes.map((website, index) => (
            <motion.div
              key={ index }
              className="website-card"
              variants={ itemAnimation }
              whileHover={ { y: -10 } }
              transition={ { duration: 0.3 } }
            >
              <div className="website-image-container">
                <motion.img
                  src={ website.image }
                  alt={ website.name }
                  className="website-image"
                  whileHover={ { scale: 1.05 } }
                  transition={ { duration: 0.3 } }
                />
                <div className="website-overlay">
                  <h3 className="website-name">{ website.name }</h3>
                </div>
              </div>

              <div className="website-content">
                <p className="website-description">{ website.description }</p>

                <div className="website-features">
                  { website.features.map((feature, idx) => (
                    <span key={ idx } className="feature-tag">
                      { feature }
                    </span>
                  )) }
                </div>
              </div>
            </motion.div>
          )) }
        </motion.div>
      </section>

      {/* Pricing Section */ }
      <section className="pricing-section">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that perfectly fits your project requirements</p>
        </div>

        <motion.div
          className="pricing-grid"
          variants={ staggerContainer }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true } }
        >
          { pricingPlans.map((plan, index) => (
            <motion.div
              key={ index }
              className={ `pricing-card ${plan.isFeatured ? 'featured' : ''}` }
              variants={ itemAnimation }
              whileHover={ { scale: plan.isFeatured ? 1.05 : 1.03 } }
              transition={ { duration: 0.3 } }
            >
              <div
                className="pricing-header"
                style={ { background: plan.gradient } }
              >
                <div className="plan-title-container">
                  <h3 className="plan-title">{ plan.title }</h3>
                  <span className="plan-level">{ plan.level }</span>
                </div>

                <div className="plan-price">
                  <span className="price-amount">{ plan.price }</span>
                  <span className="price-note">One-time payment</span>
                </div>
              </div>

              <div className="plan-delivery">
                <span className="delivery-icon">🚚</span>
                <span className="delivery-text">Delivery: { plan.delivery }</span>
              </div>

              <ul className="plan-features">
                { plan.features.map((feature, idx) => (
                  <li key={ idx } className="feature-item">
                    <span className="feature-check">✓</span>
                    { feature }
                  </li>
                )) }
              </ul>

              <button
                className={ `plan-button ${plan.isFeatured ? 'featured-button' : ''}` }
                onClick={ handleContactClick }
              >
                Get Started
              </button>
            </motion.div>
          )) }
        </motion.div>

        <div className="pricing-note">
          <p>All plans include free domain setup, hosting consultation, and 1 month of support.</p>
        </div>
      </section>

      {/* Development Process */ }
      <section className="process-section">
        <div className="section-header">
          <h2>My Development Process</h2>
          <p>Clear, structured workflow for successful project delivery</p>
        </div>

        <div className="process-container">
          <motion.div
            className="process-image"
            initial={ { opacity: 0, x: -50 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
          >
            <img src={ WebSiteFrontend } alt="Development Process" />
          </motion.div>

          <motion.div
            className="process-content"
            initial={ { opacity: 0, x: 50 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }
          >
            <h3>What I Do as a Frontend Developer</h3>
            <p>
              I specialize in creating engaging user interfaces and seamless user experiences.
              My process involves understanding your requirements, designing intuitive layouts,
              and implementing responsive, accessible websites that work perfectly across all devices.
            </p>

            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">01</span>
                <div className="step-content">
                  <h4>Consultation & Planning</h4>
                  <p>Understanding your goals and project requirements</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">02</span>
                <div className="step-content">
                  <h4>Design & Prototyping</h4>
                  <p>Creating wireframes and interactive prototypes</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">03</span>
                <div className="step-content">
                  <h4>Development</h4>
                  <p>Building the website with modern technologies</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">04</span>
                <div className="step-content">
                  <h4>Testing & Launch</h4>
                  <p>Quality assurance and deployment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */ }
      <section className="social-section">
        <div className="section-header">
          <h2>Connect With Me</h2>
          <p>Follow for updates, tips, and behind-the-scenes content</p>
        </div>

        <motion.div
          className="social-grid"
          variants={ staggerContainer }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true } }
        >
          { socialMediaAccounts.map((account, index) => (
            <motion.a
              key={ index }
              href="#"
              className="social-card"
              style={ { '--social-color': account.color } }
              variants={ itemAnimation }
              whileHover={ { scale: 1.05 } }
              transition={ { duration: 0.3 } }
            >
              <div className="social-icon">
                <img src={ account.image } alt={ account.name } />
              </div>
              <div className="social-content">
                <h3>{ account.name }</h3>
                <p>Follow for updates</p>
              </div>
              <div className="social-arrow">→</div>
            </motion.a>
          )) }
        </motion.div>
      </section>

      {/* Contact CTA */ }
      <section className="contact-cta">
        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              I'm excited to hear about your ideas and help bring them to life.
              Let's create something amazing together!
            </p>

            <div className="cta-buttons">
              <button className="cta-primary" onClick={ handleContactClick }>
                Get a Free Quote
              </button>
              <button className="cta-secondary">
                View My Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Email />
      <Footer />
    </main>
  );
}

export default Commission;
