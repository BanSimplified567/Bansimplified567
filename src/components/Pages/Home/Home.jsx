import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <section className="homeSection">
               <div className="homeSectionOne">
                  <img src="./ban.jpg" alt="banban" className="banbanImage" />
                  <div className="homePerson">
                     <img src={flames} width="40px" alt="flames" />
                     <p className="homeParagraph">
                        Jade Ivan V. Bringcola is an Aspiring Software Engineer from the
                        Philippines. 👋👨‍💻
                     </p>
                     <img src={flames} width="40px" alt="flames" />
                  </div>
               </div>
               <div className="homeLinkSectionContainer">
                  {[
                     {
                        to: '/contact',
                        title: 'SPEAKING',
                        subtitle: 'Invite me to speak',
                        text: 'I love sharing my journey and enjoy speaking on both personal technical topics.',
                        icon: (
                           <svg
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5Zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11Zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z"></path>
                           </svg>
                        ),
                     },
                     {
                        to: '/activities',
                        title: 'ACTIVITIES',
                        subtitle: 'Look My Activities',
                        text: 'I would love to share my knowledge with you and give you ideas, tips, and tricks.',
                        icon: (
                           <svg
                              width="26"
                              height="26"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14ZM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99 8-8Z"></path>
                           </svg>
                        ),
                     },
                     {
                        to: '/blog',
                        title: 'BLOG',
                        subtitle: 'Look For My Blog',
                        text: 'I will be sharing my daily blog in my journey as an Aspiring Software Engineer.',
                        icon: (
                           <svg
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2ZM4 5h16v11H4V5Z"></path>
                              <path d="M23 19H1v2h22v-2Z"></path>
                              <path d="M13.97 7.53a3.495 3.495 0 0 0-4.95 0 3.495 3.495 0 0 0 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09 1.06-1.06-2.09-2.09c.87-1.36.72-3.18-.47-4.36Zm-1.06 3.88c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.79.78 2.05 0 2.83Z"></path>
                           </svg>
                        ),
                     },
                     {
                        to: '/portfolio',
                        title: 'PORTFOLIO',
                        subtitle: 'Visit My Portfolio',
                        text: 'My portfolio showcases projects I’ve launched at work and side projects I’ve tinkered on.',
                        icon: (
                           <svg
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="m18.364 2-4.546 4.09v10L18.364 12V2ZM7 4.727c-1.773 0-3.682.364-5 1.364v13.327a.49.49 0 0 0 .455.455c.09 0 .136-.064.227-.064 1.227-.59 3-.99 4.318-.99 1.773 0 3.682.363 5 1.363 1.227-.773 3.454-1.364 5-1.364 1.5 0 3.046.282 4.318.964.091.045.136.027.227.027a.489.489 0 0 0 .455-.454V6.09c-.546-.41-1.136-.682-1.818-.91v12.273C19.182 17.136 18.09 17 17 17c-1.546 0-3.773.59-5 1.364V6.09c-1.318-1-3.227-1.363-5-1.363Z"></path>
                           </svg>
                        ),
                     },
                  ].map((link, index) => (
                     <div key={index} className="homeLinkContainer">
                        <NavLink className="homeNavLink" to={link.to}>
                           <h1 className="aboutParagraph">
                              {link.title} {link.icon}
                           </h1>
                           <h3 className="aboutSemiTitle">{link.subtitle}</h3>
                           <p>{link.text}</p>
                        </NavLink>
                     </div>
                  ))}
               </div>
            </section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <div>
               <HomeSlider repeatCount={repeatCount} text={text} timeLeft={timeLeft} />
            </div>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <section className="homeInfomationToLink section">
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
            </section>
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
