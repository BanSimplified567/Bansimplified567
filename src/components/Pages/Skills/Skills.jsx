import { NavLink } from 'react-router-dom';
import { AboutSkills } from '../About/AboutSkills';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import CSS from '../../img/Skills/css.png';
import Git from '../../img/Skills/git.png';
import Github from '../../img/Skills/github.png';
import HTML from '../../img/Skills/html.png';
import JS from '../../img/Skills/js.png';
import Mysql from '../../img/Skills/mysql.png';
import PHP from '../../img/Skills/php.png';
import React from '../../img/Skills/React.png';
import Sass from '../../img/Skills/sass.png';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Skills.css';

const resources = [
   {
      src: HTML,
      alt: 'HTML',
      title: 'HTML',
      description:
         'HTML (HyperText Markup Language) is the standard markup language for creating web pages. Codecademy offers interactive lessons to learn HTML and build foundational web development skills.',
   },
   {
      src: CSS,
      alt: 'CSS',
      title: 'CSS',
      description:
         'CSS (Cascading Style Sheets) is used to style and layout web pages. freeCodeCamp provides tutorials and projects to help you master CSS and make your web pages visually appealing.',
   },
   {
      src: JS,
      alt: 'JS',
      title: 'JS',
      description:
         'JavaScript (JS) is a versatile programming language used to create dynamic content on websites. W3Schools offers comprehensive tutorials and references to help you learn JavaScript effectively.',
   },
   {
      src: React,
      alt: 'React',
      title: 'React',
      description:
         'React is a popular JavaScript library for building user interfaces. GeeksforGeeks provides resources and tutorials to help you understand and build applications using React.',
   },
   {
      src: PHP,
      alt: 'PHP',
      title: 'PHP',
      description:
         'PHP (Hypertext Preprocessor) is a server-side scripting language used to create dynamic web pages. DEV offers a platform where developers can share knowledge and collaborate on PHP projects.',
   },
   {
      src: Git,
      alt: 'Git',
      title: 'Git',
      description:
         'Git is a version control system for tracking changes in code during software development. Medium hosts a variety of articles and tutorials to help you learn and utilize Git efficiently.',
   },
   {
      src: Mysql,
      alt: 'Mysql',
      title: 'Mysql',
      description:
         'MySQL is an open-source relational database management system. YouTube offers numerous tutorials and videos to help you understand and work with MySQL databases.',
   },
   {
      src: Github,
      alt: 'Github',
      title: 'Github',
      description:
         'GitHub is a platform for version control and collaboration. Codecademy provides lessons on using GitHub to manage your projects and collaborate with other developers.',
   },
   {
      src: Sass,
      alt: 'Sass',
      title: 'Sass',
      description:
         'Sass is a powerful CSS preprocessor that allows you to write more maintainable and efficient CSS. It offers variables, nested rules, and mixins to enhance your CSS workflow.',
   },
];
function Skills() {
   return (
      <main className="section">
         <div className="skillsContainer">
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <article className="section">
               <section>
                  <div className="aboutSkillsOfMine">
                     <img src={flames} width="26px" alt="flames" />
                     <h1 className="aboutTitle border">Skills Of Mine 👨‍💻</h1>
                     <img src={flames} width="26px" alt="flames" />
                  </div>

                  <p className="aboutSemiTitle">
                     Hello!👋 I am an enthusiastic Front-end Developer passionate about creating
                     dynamic and engaging web experiences. With a solid foundation in front-end
                     technologies, I strive to build websites and applications that are not only
                     visually appealing but also highly functional and user-friendly. My expertise
                     lies primarily in the front-end domain, where I employ a variety of tools and
                     technologies to bring designs to life. Here are some of the skills I utilize:
                  </p>
               </section>

               <section className="aboutSkills section">
                  <AboutSkills />
               </section>
            </article>
            <article className="skillsArticle">
               {resources.map((resource, index) => (
                  <div className="skillsCards" key={index}>
                     <NavLink className="skillsCard" to={resource.link} target="_blank">
                        <img src={resource.src} alt={resource.alt} className="skillsCardsImages" />
                        <div className="portCardBody">
                           <h2 className="portCardTitle skillsTitle">{resource.title}</h2>
                           <p className="portCardDescription skillsdescription">
                              {resource.description}
                           </p>
                        </div>
                     </NavLink>
                  </div>
               ))}
            </article>
         </div>

         <section className="homeEmail">
            <Email />
         </section>
         <section className="section">
            <Footer />
         </section>
      </main>
   );
}

export default Skills;
