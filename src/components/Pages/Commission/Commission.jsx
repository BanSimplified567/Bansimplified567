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

function Commission() {
   const pricingPlans = [
      {
         title: 'BASIC',
         features: ['HTML, CSS, JS', 'HOSTED DOMAIN'],
         price: '$4',
         buttonText: 'CLICK NOW',
         colorClass: 'basic-plan',
      },
      {
         title: 'STANDARD',
         features: ['HTML, CSS, JS, SASS, PHP, ', ' MySQL , JQUERY, HOSTED DOMAIN'],
         price: '$8',
         buttonText: 'CLICK NOW',
         colorClass: 'standard-plan',
         isFeatured: true,
      },
      {
         title: 'PREMIUM',
         features: ['REACT, SASS, TAILWIND,', ' FRAMER MOTION, REDUX, FORMIK, HOSTED DOMAIN'],
         price: '$15',
         buttonText: 'CLICK NOW',
         colorClass: 'premium-plan',
      },
   ];

   const navigate = useNavigate();

   // Function to handle button click and navigate
   const handleButtonClick = () => {
      navigate('/contact');
   };

   const socialMediaAccounts = [
      { name: 'Facebook', image: Facebook },
      { name: 'LinkedIn', image: Linkendin },
      { name: 'Fiverr', image: Fiverr },
      { name: 'Instagram', image: Instagram },
      { name: 'Twitter', image: Twitter },
      { name: 'TikTok', image: Tiktok },
   ];

   return (
      <div className="comContainer">
         <motion.div className="comSecOne" {...animationProps}>
            <img src={BanBan} alt="ban" className="banbanTwo" />
            <motion.div className="comSecTwo" {...animationPropsUp}>
               <h1 className="aboutTitle">
                  I&#39;M OPEN <br /> FOR COMMISSION
               </h1>
               <p className="aboutParagraph">Please feel free to contact me #+6393-1028-2926</p>
               <div className="comSecThree">
                  <SocialMediaLink />
               </div>
            </motion.div>
         </motion.div>

         <motion.div className="comWebsiteBuild" {...animationPropsUp}>
            <h1 className="aboutTitle">What Website Do I Build?</h1>
         </motion.div>

         <motion.div className="comSecFour" {...animationProps}>
            <section className="comSecFive">
               <div className="comImageWrapper">
                  <img src={EcommerceWeb} alt="Ecommerce" />
                  <div className="comOverlayText">
                     <h1>E-commerce</h1>
                  </div>
               </div>
            </section>
            <section className="comSecFive">
               <div className="comImageWrapper">
                  <img src={BlogPersonalWeb} alt="BlogPersonalWeb" />
                  <div className="comOverlayText">
                     <h1>Blog/Personal</h1>
                  </div>
               </div>
            </section>
            <section className="comSecFive">
               <div className="comImageWrapper">
                  <img src={BusinessWeb} alt="BusinessWeb" />
                  <div className="comOverlayText">
                     <h1>Business</h1>
                  </div>
               </div>
            </section>
            <section className="comSecFive">
               <div className="comImageWrapper">
                  <img src={ELearningWeb} alt="ELearningWeb" />
                  <div className="comOverlayText">
                     <h1>E-Learning Platform</h1>
                  </div>
               </div>
            </section>
            <section className="comSecFive">
               <div className="comImageWrapper">
                  <img src={SchoolActivityWeb} alt="SchoolActivityWeb" />
                  <div className="comOverlayText">
                     <h1>School Activity</h1>
                  </div>
               </div>
            </section>
         </motion.div>

         <motion.div className="comWindowBackground" {...animationPropsUp}>
            <h1 className="aboutTitle">Choose the plan that fits you, and only you.</h1>
            <p className="aboutParagraph">
               Dreaming about your websites coming to life in seconds? Now they can be.
            </p>
            <div className="comPanel comPricingTable">
               {pricingPlans.map((plan, index) => (
                  <motion.div
                     className={`comPricingPlan ${plan.colorClass}`}
                     key={index}
                     {...animationProps}
                  >
                     <h2 className={`planTitle ${plan.colorClass}`}>{plan.title}</h2>
                     <ul className="comPricingFeatures">
                        {plan.features.map((feature, i) => (
                           <li className="comPricingFeaturesItem aboutPargraph" key={i}>
                              {feature}
                           </li>
                        ))}
                     </ul>
                     <span className="comPricingPrice">{plan.price}</span>
                     <button
                        className={`comPricingButton ${plan.isFeatured ? 'comIsFeatured' : ''}`}
                        onClick={handleButtonClick} // Attach click handler
                     >
                        {plan.buttonText}
                     </button>
                  </motion.div>
               ))}
            </div>
         </motion.div>

         <motion.div className="comSectionOne" {...animationProps}>
            <section className="comSectionTwo">
               <img src={WebSiteFrontend} alt="WebSiteFrontend" />
               <motion.article className="comSectionThree" {...animationPropsUp}>
                  <h2>What does a frontend developer do? </h2>
                  <p className="aboutSemiTitle">
                     A frontend developer is responsible for creating the visual and interactive
                     parts of a website or web application. They work on the user interface (UI),
                     ensuring that users can interact with the site smoothly.
                  </p>
               </motion.article>
            </section>
         </motion.div>

         <motion.div className="comSectionFour" {...animationPropsUp}>
            <h1 className="aboutTitle">You can find me on</h1>
            <div className="comSectionFive">
               {socialMediaAccounts.map((account, index) => (
                  <motion.section className="comSectionSix" key={index} {...animationProps}>
                     <h1>{account.name}</h1>
                     <img src={account.image} alt={account.name} />
                  </motion.section>
               ))}
            </div>
         </motion.div>

         <motion.section className="homeEmail" {...animationPropsUp}>
            <p className="aboutSemiTitle">
               Thanks for your interest in me. I&#39;m always open for new ideas.
            </p>
            <Email />
         </motion.section>

         <Footer />
      </div>
   );
}

export default Commission;
