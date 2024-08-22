import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import BirthdayGift from '../../img/PortfolioImages/BirthdayGift.png';
import BulbOnOff from '../../img/PortfolioImages/BulbOnOff.png';
import Calculator from '../../img/PortfolioImages/Calculator.png';
import PizzaBan from '../../img/PortfolioImages/PizzaBan.png';
import Sukidesu from '../../img/PortfolioImages/Sukidesu.png';

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
                     <p className="portCardDescription">My Project for 2nd-Year College Finals</p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> June 12, 2024
                     </p>
                     <p className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </p>
                  </div>
               </NavLink>
               <NavLink className="portCard" to="https://calculator-sigma-hazel.vercel.app/">
                  <img src={Calculator} alt="Calculator" className="portImage" />
                  <div className="portCardBody">
                     <h2 className="portCardTitle">Basic-Calculator</h2>
                     <p className="portCardDescription">Basic Calculator using React</p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> Aug 1, 2024
                     </p>
                     <p className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </p>
                  </div>
               </NavLink>
               <NavLink className="portCard" to="https://bulb-switch-six.vercel.app/">
                  <img src={BulbOnOff} alt="BulbOnOff" className="portImage" />
                  <div className="portCardBody">
                     <h2 className="portCardTitle">BulbOnOff</h2>
                     <p className="portCardDescription">Our School Activity Bulb-Switch</p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> 2nd Semester
                     </p>
                     <p className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </p>
                  </div>
               </NavLink>
               <NavLink className="portCard" to="https://sukidesu.vercel.app/">
                  <img src={Sukidesu} alt="sukidesu" className="portImage" />
                  <div className="portCardBody">
                     <h2 className="portCardTitle">Sukidesu</h2>
                     <p className="portCardDescription">Confession To Your Crush</p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> Aug 10, 2024
                     </p>
                     <p className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </p>
                  </div>
               </NavLink>
               <NavLink className="portCard" to="https://birthday-gift-eight.vercel.app/">
                  <img src={BirthdayGift} alt="BirthdayGift" className="portImage" />
                  <div className="portCardBody">
                     <h2 className="portCardTitle">BirthdayGift</h2>
                     <p className="portCardDescription">My Birthday Gift For You</p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> Aug 18, 2024
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
