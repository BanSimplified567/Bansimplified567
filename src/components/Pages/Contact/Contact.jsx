import Email from '../../Pages/Extra/Email/Email';
import Footer from '../../Pages/Extra/Footer/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';
import { ContactCategory, SocialMediaLink } from '../Extra/ContactCategory/ContactCategory';

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

function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const [submitted, setSubmitted] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
   };

   return (
      <>
         <main className="section">
            <div className="contact">
               <motion.div {...animationProps} className="contactContactMe">
                  <motion.section {...animationPropsUp}>
                     <h1 className="aboutTitle">LET&#39;S WORK TOGETHER 📨</h1>
                  </motion.section>
                  <ContactCategory />
               </motion.div>

               <motion.section {...animationProps} className="contactSendMessage">
                  <form className="contactForm" onSubmit={handleSubmit}>
                     <motion.h1 {...animationPropsUp} className="contactTitle">
                        Send me a message
                     </motion.h1>
                     <motion.div {...animationProps} className="contactFormGroup">
                        <label>Name: </label>
                        <input
                           type="text"
                           className="contactName"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your name..."
                        />
                     </motion.div>
                     <motion.div {...animationProps} className="contactFormGroup">
                        <label>Email: </label>
                        <input
                           type="email"
                           className="contactEmail"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your email..."
                        />
                     </motion.div>
                     <motion.div {...animationProps} className="contactFormGroup">
                        <label>Message: </label>
                        <textarea
                           className="contactMessage"
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your message..."
                        ></textarea>
                     </motion.div>
                     <motion.button type="submit" className="contactSubmit" {...animationPropsUp}>
                        Send Message
                     </motion.button>
                  </form>
                  {submitted && (
                     <motion.div {...animationProps} className="submittedDataContainer">
                        <h2>Submitted Information</h2>
                        <p>
                           <strong>Name:</strong> {formData.name}
                        </p>
                        <p>
                           <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                           <strong>Message:</strong> {formData.message}
                        </p>
                     </motion.div>
                  )}

                  <motion.div {...animationProps} className="contactInformation">
                     <div className="contactInfoLoc">
                        <div className="contactInfo">
                           <h1>Contact Information</h1>
                           <p>Name: Jade Ivan V. Bringcola(Ban Ban)</p>
                           <p>Location: Sibonga Cebu Philippines</p>
                           <p>Number: +63 93 1028 2926</p>
                           <p>Email: bansimplified567@gmail.com</p>
                        </div>
                        <div className="contactHelpInfo">
                           <h1>What Can We Help You?</h1>
                           <p>
                              Please follow my social media to get in touch with me and learn more
                              about me.
                           </p>
                        </div>
                        <motion.div {...animationPropsUp} className="socialIcons">
                           <h4>Follow Me: </h4>
                           <div className="contactSocialLink">
                              <SocialMediaLink />
                           </div>
                        </motion.div>
                     </div>
                  </motion.div>
               </motion.section>
            </div>
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

export default Contact;
