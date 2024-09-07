import imagesMail from '../../../img/assets/vaporwave-aesthetic.gif';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Email.css';
import { SocialMediaLink } from '../ContactCategory/ContactCategory';

function Email() {
   const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   return (
      <>
         <motion.div
            ref={experienceRef}
            initial="hidden"
            animate={experienceInView ? 'visible' : 'hidden'}
            variants={slideOutVariants}
            className="emailContainer"
         >
            <form action="" className="emailFormSection">
               <img src={imagesMail} alt="imagesMail" className="emailImage" />
               <div className="emailDescriptions">
                  <h1 className="aboutParagraph">SUBSCRIBE TO MY SOCIAL MEDIA TODAY</h1>
                  <p className="aboutSemiTitle">
                     In my social-media, I share personal and career learnings, advice,
                     collaboration opportunities, and more.
                  </p>
                  <div className="emailIcons">
                     <SocialMediaLink />
                  </div>
                  <div className="emailContainerInput">
                     <div className="inputWrapper">
                        <input type="email" className="emailInput" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                     </div>
                  </div>
               </div>
            </form>
         </motion.div>
      </>
   );
}

export default Email;
