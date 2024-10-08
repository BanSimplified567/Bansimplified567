import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import { ContactCategory } from '../Extra/ContactCategory/ContactCategory';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Home.css';

const sections = [
   {
      title: 'WHO AM I',
      link: '/about',
      buttonText: 'LEARN MORE',
      content: `
            Hello! I'm Jade Ivan V. Bringcola, or BanBan, hailing proudly from
            Sibonga, Cebu, Philippines. Currently, I'm pursuing a Bachelor of Science
            in Information Technology (Programming) in my home country. 👨‍💻 My passion
            lies in crafting dynamic and intuitive websites, constantly refining my
            skills in web development to create seamless digital experiences. 🐾
            <br>
            <br>

            Driven by a desire to make a positive impact in the tech industry, I'm
            dedicated to harnessing technology for meaningful digital innovations. 🌊
            Born on September 10, 2002, in Manila, Quezon City, my journey in IT
            began with a profound curiosity and a commitment to innovation. I'm eager
            to contribute to the transformative power of technology and excited about
            what lies ahead in this dynamic field. Nice to meet you! 👋
         `,
      additionalContent: '',
   },
   {
      title: 'BLOG',
      link: '/blog',
      buttonText: 'WATCH MY BLOG',
      content: `
            As an Aspiring Software Engineer, I encourage others to pursue their
            dreams and never give up. I share my journey, provide support, and
            celebrate achievements to keep everyone motivated. By fostering a
            positive environment, I help others stay focused and confident in their
            path to success. 🐾
            <br>
            <br>

            I lead by example as an Aspiring Software Engineer, emphasizing
            perseverance and a positive mindset. I offer guidance, share resources,
            and collaborate on projects to help peers develop their skills. My goal
            is to inspire others to believe in their potential and achieve their
            aspirations. 👋
         `,
      additionalContent: '',
   },
   {
      title: 'EXPERIENCE',
      link: '/about',
      buttonText: 'VIEW MY EXPERIENCE',
      content: `
            During my tenure as a Factory Worker at Republic Biscuit Corporation
            (REBISCO) from November 2021 to April 2022, I gained valuable hands-on
            experience in a high-paced manufacturing environment. Located in
            Bukidnon, Northern Mindanao, Philippines, I worked full-time on-site for
            six months, contributing to various aspects of the biscuit production
            process.🐾
            <br>
            <br>

            My responsibilities included operating machinery, maintaining a clean and
            safe workspace, and adhering to strict quality control standards to
            ensure that all products met the company’s high standards. This role
            demanded precision, attention to detail, and the ability to work
            efficiently under pressure. Through this experience, I developed strong
            teamwork skills, the ability to follow complex instructions, and a solid
            understanding of manufacturing operations.👋
         `,
      additionalContent: '',
   },
   {
      title: 'LEADERSHIP',
      link: '/contact',
      buttonText: 'CONTACT ME',
      content: `
            As an Aspiring Software Engineer, I encourage others to pursue their
            dreams and never give up. I share my journey, provide support, and
            celebrate achievements to keep everyone motivated. By fostering a
            positive environment, I help others stay focused and confident in their
            path to success. 🐾
            <br>
            <br>

            I lead by example as an Aspiring Software Engineer, emphasizing
            perseverance and a positive mindset. I offer guidance, share resources,
            and collaborate on projects to help peers develop their skills. My goal
            is to inspire others to believe in their potential and achieve their
            aspirations. 👋
         `,
      additionalContent: '',
   },

   {
      title: 'ACTIVITIES',
      link: '/activities',
      buttonText: 'LOOK AT MY ACTIVITIES',
      content: `
            I am deeply focused on improving as a Software Engineer, spending my days coding, designing user interfaces, and staying updated with the latest web technologies. Through disciplined practice and consistent learning, I strive to enhance my skills daily, trusting in God for guidance in this journey.🐾
            <br>
            <br>

         Previously, I gained experience in backend development and graphic design, which equipped me with valuable technical and creative insights. With discipline and consistency, I dedicated myself to learning and growing, relying on faith to navigate challenges and seize opportunities for advancement. 👋
         `,
      additionalContent: '',
   },
];
const calculateTimeLeft = () => {
   const targetDate = new Date('2022-09-10T00:00:00'); // Set target date to September 10, 2022

   const now = new Date(); // Get the current date and time
   const difference = now - targetDate; // Calculate the difference in milliseconds

   let timeLeft = {};

   if (difference > 0) {
      timeLeft = {
         years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)), // Convert to years
         months: Math.floor(
            (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
         ), // Convert remainder to months
         days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)), // Convert remainder to days
      };
   } else {
      timeLeft = {
         years: 0,
         months: 0,
         days: 0,
      };
   }

   return timeLeft;
};

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

const HomeSlider = ({ repeatCount, text, timeLeft }) => {
   return (
      <motion.section className="homeSlider" {...animationProps}>
         <div className="homeSlideTrack">
            {Array.from({ length: repeatCount }).map((_, index) => (
               <div className="homeSlide" key={index}>
                  <h1 className="aboutParagraph slides">
                     {text} - {timeLeft.years} years, {timeLeft.months} months, {timeLeft.days} days
                  </h1>
               </div>
            ))}
         </div>
      </motion.section>
   );
};

const Home = () => {
   const startDate = '2026-01-01T00:00:00'; // The start date from which the target is calculated

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

   // Update time left every second
   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(calculateTimeLeft(startDate));
      }, 1000);

      return () => clearInterval(timer); // Cleanup on unmount
   }, [startDate]);

   const text =
      'Jade Ivan Bringcola Known as BanBan @Aspiring Software-Engineer | Frontend Enthusiast';
   const repeatCount = 10; // Adjust this count to control how many times the text repeats

   return (
      <>
         <main className="section">
            <motion.section className="homeSection" {...animationPropsUp}>
               <div className="homeSectionOne">
                  <img src="./ban.jpg" alt="banban" className="banbanImage" />
                  <div className="homePerson">
                     <img src={flames} className="flames" alt="flames" />
                     <motion.p {...animationProps} className="homeParagraph">
                        Jade Ivan V. Bringcola is an Aspiring Software Engineer from the
                        Philippines. 👋👨‍💻
                     </motion.p>
                     <img src={flames} className="flames" alt="flames" />
                  </div>
               </div>
               <ContactCategory />
            </motion.section>

            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />

            <motion.section>
               <HomeSlider repeatCount={repeatCount} text={text} timeLeft={timeLeft} />
            </motion.section>

            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />

            <motion.section className="homeInfomationToLink section" {...animationPropsUp}>
               {sections.map((section, index) => (
                  <motion.div key={index} className="homeInfomationSection" {...animationProps}>
                     <div className="homeIntroduction">
                        <div className="homeWhoAmI">
                           <h1 className="homeSemiTitle">{section.title}</h1>
                           <NavLink className="homeLearnMore" to={section.link}>
                              {section.buttonText}
                              <svg
                                 width="25"
                                 height="25"
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                              </svg>
                           </NavLink>
                        </div>

                        <div className="homeWhoAmIParagraph">
                           <motion.p
                              {...animationProps}
                              dangerouslySetInnerHTML={{ __html: section.content }}
                           />
                           {section.additionalContent && (
                              <motion.p {...animationProps}>{section.additionalContent}</motion.p>
                           )}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.section>

            <section className="homeEmail">
               <Email />
            </section>

            <section className="section">
               <Footer />
            </section>
         </main>
      </>
   );
};

export default Home;
