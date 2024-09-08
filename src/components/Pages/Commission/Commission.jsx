import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import BanBan from '../../img/BanBan/banban2.jpg';
import BlogPersonalWeb from '../../img/Commission/blogPersonalWebsite.png';
import BusinessWeb from '../../img/Commission/Business.png';
import ELearningWeb from '../../img/Commission/OnlineLearning.png';
import SchoolActivityWeb from '../../img/Commission/schoolActivity.jpeg';
import WebSiteFrontend from '../../img/Commission/WebsiteLaptop.svg';
import EcommerceWeb from '../../img/PortfolioImages/PizzaBan.png';

import Facebook from '../../img/SocialMediaAccounts/Facebook.png';
import Fiverr from '../../img/SocialMediaAccounts/Fiverr.png';
import Linkendin from '../../img/SocialMediaAccounts/Linkendin.png';
import Instagram from '../../img/SocialMediaAccounts/Instagram.png';
import Twitter from '../../img/SocialMediaAccounts/Twitter.png';
import Tiktok from '../../img/SocialMediaAccounts/TikTok.png';

import Footer from '../../Pages/Extra/Footer/Footer';
import { SocialMediaLink } from '../Extra/ContactCategory/ContactCategory';
import Email from '../Extra/Email/Email';
import './Commission.css';

const slideInVariants = {
   hidden: { opacity: 0, x: -100 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideOutVariants = {
   hidden: { opacity: 0, x: 100 },
   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Commission() {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [firstPersonBioRef, firstPersonBioInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });
   const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
         <div className="comSection">
            <motion.div
               className="comSecOne"
               ref={aboutRef}
               variants={slideInVariants}
               initial="hidden"
               animate={aboutInView ? 'visible' : 'hidden'}
            >
               <img src={BanBan} alt="ban" className="banbanTwo" />
               <div className="comSecTwo">
                  <h1 className="aboutTitle">
                     I&#39;M OPEN <br /> FOR COMMISSION
                  </h1>
                  <p className="aboutParagraph">Please feel free to contact me #+6393-1028-2926</p>
                  <div className="comSecThree">
                     <SocialMediaLink />
                  </div>
               </div>
            </motion.div>

            <motion.div
               className="comWebsiteBuild"
               ref={firstPersonBioRef}
               variants={slideInVariants}
               initial="hidden"
               animate={firstPersonBioInView ? 'visible' : 'hidden'}
            >
               <h1 className="aboutTitle">What Website Do I Build?</h1>
            </motion.div>

            <motion.div
               className="comSecFour"
               ref={skillsRef}
               variants={slideOutVariants}
               initial="hidden"
               animate={skillsInView ? 'visible' : 'hidden'}
            >
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
         </div>
         <div className="comWindowBackground">
            <h1 className="aboutTitle">Choose the plan that fits you, and only you.</h1>
            <p className="aboutParagraph">
               Dreaming about your websites coming to life in seconds? Now they can be.
            </p>
            <div className="comPanel comPricingTable">
               {pricingPlans.map((plan, index) => (
                  <div className={`comPricingPlan ${plan.colorClass}`} key={index}>
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
                     >
                        {plan.buttonText}
                     </button>
                  </div>
               ))}
            </div>
         </div>
         <div className="comSectionOne">
            <section className="comSectionTwo">
               <img src={WebSiteFrontend} alt="WebSiteFrontend" />
               <article className="comSectionThree">
                  <h2>What does a frontend developer do? </h2>
                  <p className="aboutSemiTitle">
                     A frontend developer is responsible for creating the visual and interactive
                     parts of a website or web application. They work on the user interface (UI),
                     ensuring that users can interact with the site smoothly.
                  </p>
               </article>
            </section>
         </div>
         <div className="comSectionFour">
            <h1 className="aboutTitle">You can find me on</h1>
            <div className="comSectionFive">
               {socialMediaAccounts.map((account, index) => (
                  <section className="comSectionSix" key={index}>
                     <h1 className="">{account.name}</h1>
                     <img src={account.image} alt={account.name} />
                  </section>
               ))}
            </div>
         </div>

         <section className="homeEmail">
            <p className="aboutSemiTitle">
               Thanks for your interest in me. I&#39;m always open for new ideas.
            </p>
            <Email />
         </section>
         <Footer />
      </div>
   );
}

export default Commission;
