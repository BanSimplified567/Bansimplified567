import Email from '../../Pages/Extra/Email/Email';
import Footer from '../../Pages/Extra/Footer/Footer';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useState } from 'react';
import './Contact.css';
import { ContactCategory, SocialMediaLink } from '../Extra/ContactCategory/ContactCategory';

function Contact() {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [firstPersonBioRef, firstPersonBioInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

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
               <div>
                  <motion.section
                     className="contactContactMe"
                     ref={aboutRef}
                     initial="hidden"
                     animate={aboutInView ? 'visible' : 'hidden'}
                     variants={slideOutVariants}
                  >
                     <h1 className="aboutTitle">LET&#39;S WORK TOGETHER 📨</h1>

                     <ContactCategory />
                  </motion.section>
               </div>

               <motion.section
                  className="contactSendMessage"
                  ref={firstPersonBioRef}
                  initial="hidden"
                  animate={firstPersonBioInView ? 'visible' : 'hidden'}
                  variants={slideInVariants}
               >
                  <form className="contactForm" onSubmit={handleSubmit}>
                     <h1 className="contactTitle">Send me a message</h1>
                     <div className="contactFormGroup">
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
                     </div>
                     <div className="contactFormGroup">
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
                     </div>
                     <div className="contactFormGroup">
                        <label>Message: </label>
                        <textarea
                           className="contactMessage"
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your message..."
                        ></textarea>
                     </div>
                     <button type="submit" className="contactSubmit">
                        Send Message
                     </button>
                  </form>
                  {submitted && (
                     <div className="submittedDataContainer">
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
                     </div>
                  )}

                  <div className="contactInformation">
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
                        <div className="socialIcons">
                           <h4>Follow Me: </h4>
                           <div className="contactSocialLink">
                              <SocialMediaLink />
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.section>
            </div>
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

export default Contact;
