import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import { AboutSkills, AboutExperience } from './AboutSkills';
import './About.css';

const About = () => {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [firstPersonBioRef, firstPersonBioInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });
   const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   return (
      <div className="container about">
         <article className="aboutContainer">
            <motion.section
               ref={aboutRef}
               initial="hidden"
               animate={aboutInView ? 'visible' : 'hidden'}
               variants={slideInVariants}
               className="aboutInformation"
            >
               <h1 className="aboutTitle">NICE TO MEET YOU! I&#39;M BANBAN 👋👨‍💻</h1>
               <p className="aboutSemiTitle">
                  As an Aspiring Software Engineer, I&#39;m passionate about continuous learning and
                  growth. I eagerly explore new technologies and embrace challenges that expand my
                  skills.
                  <a
                     href="./Blacklion567.pdf"
                     className="aboutResume"
                     download="Blacklion567.pdf"
                     title="Welcome Back"
                  >
                     Download Resume
                  </a>
               </p>
               <p className="aboutParagraph">
                  <span className="navbarTitle">2+ years</span> | learning Web development
               </p>
               <NavLink
                  className="aboutButton"
                  to="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/"
               >
                  <p className="aboutParagraph">CONNECT ON LINKEDIN</p>
                  <svg
                     width="25"
                     height="15"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M12 4L10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                  </svg>
               </NavLink>
            </motion.section>
            <section>
               <img className="aboutImages" src="./banban.jpg" alt="banban" />
            </section>
         </article>
         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         <motion.article
            ref={firstPersonBioRef}
            initial="hidden"
            animate={firstPersonBioInView ? 'visible' : 'hidden'}
            variants={slideOutVariants}
            className="aboutArticle section"
         >
            <div className="aboutArticleSection">
               <section className="aboutFirstPersonBio">
                  <h1 className="aboutTitleArticle">First Person Bio</h1>
                  <figure className="aboutArticleList">
                     {[
                        "Hello! I'm Jade Ivan V. Bringcola, also known as BanBan, from Sibonga, Cebu, Philippines. 👋",
                        "I'm currently pursuing a Bachelor of Science in Information Technology (Programming) in the Philippines. 👨‍💻",
                        'I enjoy mastering the art of creating dynamic and intuitive websites. 🐾',
                        'Driven to make a positive impact through digital experiences in the tech industry. 🌊',
                        'Jade Ivan V. Bringcola, was born on September 10, 2002, in Manila, Quezon City. 🌳',
                     ].map((text, index) => (
                        <p key={index} className="aboutSemiTitle">
                           <img src={flames} className="flames" alt="flames" /> {text}
                        </p>
                     ))}
                  </figure>
               </section>
            </div>
            <div className="aboutArticleSection">
               <section className="aboutThirdPersonBio">
                  <h1 className="aboutTitleArticle">Third Person Bio</h1>
                  <figure className="aboutArticleList">
                     {[
                        'Jade Ivan V. Bringcola, also known as BanBan, from Sibonga, Cebu, Philippines. 👋',
                        'His curiosity about how websites work led him to explore and study the web development roadmap. 👨‍💻',
                        'Mastering the art of crafting dynamic and intuitive websites, Jade finds joy in creating seamless digital experiences. 🐾',
                        'Motivated by a passion for technology and driving positive change in the tech industry. 🌊',
                        'Actively explores emerging web technologies and industry trends to stay innovative. 🌳',
                     ].map((text, index) => (
                        <p key={index} className="aboutSemiTitle">
                           <img src={flames} className="flames" alt="flames" /> {text}
                        </p>
                     ))}
                  </figure>
               </section>
            </div>
         </motion.article>
         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         <motion.article
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
            variants={slideInVariants}
            className="section"
         >
            <section>
               <div className="aboutSkillsOfMine">
                  <img src={flames} className="flames" alt="flames" />
                  <h1 className="aboutTitle border">Skills Of Mine 👨‍💻</h1>
                  <img src={flames} className="flames" alt="flames" />
               </div>
               <p className="aboutSemiTitle">
                  Hello!👋 I am an enthusiastic Front-end Developer passionate about creating
                  dynamic and engaging web experiences. With a solid foundation in front-end
                  technologies, I strive to build websites and applications that are not only
                  visually appealing but also highly functional and user-friendly. My expertise lies
                  primarily in the front-end domain, where I employ a variety of tools and
                  technologies to bring designs to life. Here are some of the skills I utilize:
               </p>
            </section>
            <section className="aboutSkills section">
               <AboutSkills />
            </section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <motion.section
               className="aboutExperience section"
               animate={experienceInView ? 'visible' : 'hidden'}
               variants={slideInVariants}
               ref={experienceRef}
            >
               <AboutExperience />
            </motion.section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         </motion.article>

         <section className="section">
            <Email />
         </section>
         <section className="section">
            <Footer />
         </section>
      </div>
   );
};

export default About;
