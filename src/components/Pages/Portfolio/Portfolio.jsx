import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import BirthdayGift from '../../img/PortfolioImages/BirthdayGift.png';
import BulbOnOff from '../../img/PortfolioImages/BulbOnOff.png';
import Calculator from '../../img/PortfolioImages/Calculator.png';
import PizzaBan from '../../img/PortfolioImages/PizzaBan.png';
import Sukidesu from '../../img/PortfolioImages/Sukidesu.png';
import BanHotel from '../../img/PortfolioImages/BanHotel.png';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Portfolio.css';

const animationProps = {
   initial: { opacity: 0, x: -100 },
   whileInView: { opacity: 1, x: 0 },
   transition: { duration: 0.5 },
};

const animationPropsUp = {
   initial: { opacity: 0, y: -100 },
   whileInView: { opacity: 1, y: 0 },
   transition: { duration: 0.5 },
};
function Portfolio() {
   return (
      <>
         <main className="container">
            <motion.section {...animationProps} className="section">
               <motion.h1 {...animationPropsUp} className="aboutTitle portfolio">
                  PORTFOLIO 🛠️
               </motion.h1>
               <motion.p {...animationProps}>
                  In my portfolio, I&#39;ll showcase projects and side projects I&#39;ve worked on
                  in my free time, highlighting my skills and creativity.
               </motion.p>
            </motion.section>

            <motion.article {...animationProps} className="portArticle">
               <NavLink
                  className="portCard"
                  target="_blank"
                  to="https://bulb-switch-six.vercel.app/"
               >
                  <motion.img
                     {...animationPropsUp}
                     src={BulbOnOff}
                     alt="BulbOnOff"
                     className="portImage"
                  />
                  <motion.div {...animationPropsUp} className="portCardBody">
                     <motion.h2 {...animationProps} className="portCardTitle">
                        BulbOnOff
                     </motion.h2>
                     <motion.p {...animationProps} className="portCardDescription">
                        Our School Activity Bulb-Switch
                     </motion.p>
                     <motion.p {...animationProps} className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> October 15, 2023
                     </motion.p>
                     <motion.p {...animationProps} className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </motion.p>
                  </motion.div>
               </NavLink>
               <NavLink
                  className="portCard"
                  target="_blank"
                  to="https://pizzabansibonga.netlify.app/"
               >
                  <motion.img
                     {...animationPropsUp}
                     src={PizzaBan}
                     alt="PizzaBan"
                     className="portImage"
                  />
                  <motion.div {...animationPropsUp} className="portCardBody">
                     <motion.h2 {...animationProps} className="portCardTitle">
                        PizzaBanSibonga
                     </motion.h2>
                     <motion.p {...animationPropsUp} className="portCardDescription">
                        My Project for 2nd-Year College Finals
                     </motion.p>
                     <motion.p {...animationProps} className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> June 12, 2024
                     </motion.p>
                     <motion.p {...animationProps} className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </motion.p>
                  </motion.div>
               </NavLink>

               <NavLink
                  className="portCard"
                  target="_blank"
                  to="https://calculator-sigma-hazel.vercel.app/"
               >
                  <motion.img
                     {...animationPropsUp}
                     src={Calculator}
                     alt="Calculator"
                     className="portImage"
                  />
                  <motion.div {...animationPropsUp} className="portCardBody">
                     <motion.h2 {...animationProps} className="portCardTitle">
                        Basic-Calculator
                     </motion.h2>
                     <motion.p {...animationProps} className="portCardDescription">
                        Basic Calculator using React
                     </motion.p>
                     <motion.p {...animationPropsUp} className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> Aug 1, 2024
                     </motion.p>
                     <motion.p {...animationProps} className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </motion.p>
                  </motion.div>
               </NavLink>

               <NavLink className="portCard" target="_blank" to="https://sukidesu.vercel.app/">
                  <motion.img
                     {...animationPropsUp}
                     src={Sukidesu}
                     alt="sukidesu"
                     className="portImage"
                  />
                  <motion.div {...animationPropsUp} className="portCardBody">
                     <motion.h2 {...animationPropsUp} className="portCardTitle">
                        Sukidesu
                     </motion.h2>
                     <motion.p {...animationProps} className="portCardDescription">
                        Confession To Your Crush
                     </motion.p>
                     <motion.p {...animationPropsUp} className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> Aug 10, 2024
                     </motion.p>
                     <motion.p {...animationProps} className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </motion.p>
                  </motion.div>
               </NavLink>

               <NavLink
                  className="portCard"
                  target="_blank"
                  to="https://birthday-gift-eight.vercel.app/"
               >
                  <motion.img
                     {...animationPropsUp}
                     src={BirthdayGift}
                     alt="BirthdayGift"
                     className="portImage"
                  />
                  <motion.div {...animationPropsUp} className="portCardBody">
                     <motion.h2 {...animationPropsUp} className="portCardTitle">
                        BirthdayGift
                     </motion.h2>
                     <motion.p {...animationProps} className="portCardDescription">
                        My Birthday Gift For You
                     </motion.p>
                     <motion.p {...animationProps} className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> Aug 18, 2024
                     </motion.p>
                     <motion.p {...animationPropsUp} className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </motion.p>
                  </motion.div>
               </NavLink>

               <NavLink className="portCard" target="_blank" to="https://banhotel.netlify.app/">
                  <motion.img
                     {...animationPropsUp}
                     src={BanHotel}
                     alt="BanHotel"
                     className="portImage"
                  />
                  <motion.div {...animationPropsUp} className="portCardBody">
                     <motion.h2 {...animationPropsUp} className="portCardTitle">
                        BanHotel
                     </motion.h2>
                     <motion.p {...animationProps} className="portCardDescription">
                        BanHotel UI Design For Frontend
                     </motion.p>
                     <motion.p {...animationPropsUp} className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> October 1, 2024
                     </motion.p>
                     <motion.p {...animationPropsUp} className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </motion.p>
                  </motion.div>
               </NavLink>
            </motion.article>

            <motion.section {...animationProps} className="homeEmail">
               <Email />
            </motion.section>
            <motion.section {...animationProps} className="section">
               <Footer />
            </motion.section>
         </main>
      </>
   );
}

export default Portfolio;
