import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import PizzaBan from '../../img/PortfolioImages/PizzaBan.png';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Portfolio.css';

function Portfolio() {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };
   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   return (
      <>
         <main className="container">
            <motion.section
               className="section"
               ref={aboutRef}
               initial="hidden"
               animate={aboutInView ? 'visible' : 'hidden'}
               variants={slideInVariants}
            >
               <h1 className="aboutTitle portfolio">PORTFOLIO 🛠️</h1>
               <p>
                  In my portfolio, I&#39;ll showcase projects and side projects I&#39;ve worked on
                  in my free time, highlighting my skills and creativity.
               </p>
            </motion.section>
            <motion.article
               ref={aboutRef}
               initial="hidden"
               animate={aboutInView ? 'visible' : 'hidden'}
               variants={slideOutVariants}
               className="portArticle"
            >
               <NavLink className="portCard" to="https://pizzabansibonga.netlify.app/">
                  <img src={PizzaBan} alt="PizzaBan" className="portImage" />
                  <div className="portCardBody">
                     <h2 className="portCardTitle">PizzaBanSibonga</h2>
                     <p className="portCardDescription">
                        Welcome to PizzaBan! Enjoy the best pizza in town, crafted with fresh
                        ingredients and served with a smile. Taste the difference at PizzaBan!
                     </p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> June 12, 2024
                     </p>
                     <p className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </p>
                  </div>
               </NavLink>
            </motion.article>

            <section className="homeEmail">
               <Email />
            </section>
            <section className="section">
               <Footer />
            </section>
         </main>
      </>
   );
}

export default Portfolio;
