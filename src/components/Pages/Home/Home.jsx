import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Home.css';
import { ContactCategory } from '../Extra/ContactCategory/ContactCategory';

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

const calculateTimeLeft = (startDate) => {
   const targetDate = new Date(startDate);
   targetDate.setFullYear(targetDate.getFullYear() + 2);
   targetDate.setMonth(targetDate.getMonth() + 8); // Adjusting the target month
   targetDate.setDate(targetDate.getDate() + 5); // Adjusting the target day

   const now = new Date();
   const difference = targetDate - now;
   let timeLeft = {};

   if (difference > 0) {
      timeLeft = {
         years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
         months: Math.floor(
            (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
         ),
         days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)),
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

const HomeSlider = ({ repeatCount, text, timeLeft }) => {
   return (
      <section className="homeSlider">
         <div className="homeSlideTrack">
            {Array.from({ length: repeatCount }).map((_, index) => (
               <div className="homeSlide" key={index}>
                  <h1 className="aboutParagraph slides">
                     {text} - {timeLeft.years} years, {timeLeft.months} months, {timeLeft.days} days
                  </h1>
               </div>
            ))}
         </div>
      </section>
   );
};

const Home = () => {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [firstPersonBioRef, firstPersonBioInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });
   const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const startDate = new Date();
   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(calculateTimeLeft(startDate));
      }, 1000);

      return () => clearInterval(timer);
   }, [startDate]);

   const text =
      'Jade Ivan Bringcola Known as BanBan @Aspiring Software-Engineer | Frontend Enthusiast';
   const repeatCount = 10; // Adjust this count to control how many times the text repeats

   return (
      <>
         <main className="section">
            <motion.section
               ref={aboutRef}
               initial="hidden"
               animate={aboutInView ? 'visible' : 'hidden'}
               variants={slideInVariants}
               className="homeSection"
            >
               <div className="homeSectionOne">
                  <img src="./ban.jpg" alt="banban" className="banbanImage" />
                  <div className="homePerson">
                     <img src={flames} className="flames" alt="flames" />
                     <p className="homeParagraph">
                        Jade Ivan V. Bringcola is an Aspiring Software Engineer from the
                        Philippines. 👋👨‍💻
                     </p>
                     <img src={flames} className="flames" alt="flames" />
                  </div>
               </div>
               <ContactCategory />
            </motion.section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <motion.section
               ref={firstPersonBioRef}
               initial="hidden"
               animate={firstPersonBioInView ? 'visible' : 'hidden'}
               variants={slideOutVariants}
            >
               <HomeSlider repeatCount={repeatCount} text={text} timeLeft={timeLeft} />
            </motion.section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <motion.section
               ref={skillsRef}
               initial="hidden"
               animate={skillsInView ? 'visible' : 'hidden'}
               variants={slideInVariants}
               className="homeInfomationToLink section"
            >
               {sections.map((section, index) => (
                  <div key={index} className="homeInfomationSection">
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
                           <p dangerouslySetInnerHTML={{ __html: section.content }} />
                           {section.additionalContent && <p>{section.additionalContent}</p>}
                        </div>
                     </div>
                  </div>
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
