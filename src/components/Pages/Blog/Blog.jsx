import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Blog.css';

import codeacademyImg from '../../img/Activities/Codeacademy.png';
import devImg from '../../img/Activities/Dev.png';
import freecodecampImg from '../../img/Activities/FreeCodeCamp.jpg';
import geeksforgeeksImg from '../../img/Activities/GeeksforGeeks.jpeg';
import mediumImg from '../../img/Activities/Medium.png';
import w3schoolsImg from '../../img/Activities/W3Schools.png';
import youtubeImg from '../../img/Activities/Youtube.png';

import brocodeImg from '../../img/Activities/BroCode.jpg';
import codingwithlewisImg from '../../img/Activities/CodingWithLewis.jpg';
import connerardmanImg from '../../img/Activities/ConnerArdman.jpg';
import fireshipImg from '../../img/Activities/Fireship.jpg';
import freecodecampChannelImg from '../../img/Activities/FreeCodeCamp.jpg';
import netninjaImg from '../../img/Activities/Netninja.jpg';
import techwithtimImg from '../../img/Activities/TechWithTim.jpg';
import t3dotggImg from '../../img/Activities/t3dotgg.jpg';
import webdevsimplifiedImg from '../../img/Activities/webdevSimplified.jpg';

const allResources = [
  {
    category: 'Learning Resources',
    items: [
      {
        name: 'Codeacademy',
        link: 'https:/www.codecademy.com/',
        title: 'Codeacademy',
        description: 'Codecademy offers free coding classes in various programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, and Swift, as well as markup languages HTML and CSS.',
        src: codeacademyImg,
      },
      {
        name: 'FreeCodeCamp',
        link: 'https:/www.freecodecamp.org/',
        title: 'FreeCodeCamp',
        description: 'freeCodeCamp is a non-profit educational organization that offers an interactive learning web platform, an online community forum, chat rooms, online publications, and local organizations to make learning software development accessible to anyone.',
        src: freecodecampImg,
      },
      {
        name: 'W3Schools',
        link: 'https:/www.w3schools.com/',
        title: 'W3Schools',
        description: 'W3Schools provides web development tutorials and references for various web technologies, serving as a comprehensive resource for learning HTML, CSS, JavaScript, and other related technologies.',
        src: w3schoolsImg,
      },
      {
        name: 'GeeksforGeeks',
        link: 'https:/www.geeksforgeeks.org/',
        title: 'GeeksforGeeks',
        description: 'GeeksforGeeks provides coding resources and challenges, empowering programmers with practical skills through tutorials and practice problems.',
        src: geeksforgeeksImg,
      },
      {
        name: 'Dev',
        link: 'https:/dev.to/',
        title: 'Dev',
        description: 'DEV is a community of software developers collaborating to help one another out.',
        src: devImg,
      },
      {
        name: 'Medium',
        link: 'https:/medium.com/',
        title: 'Medium',
        description: 'Medium is a platform for sharing insightful perspectives, useful knowledge, and life wisdom with the world.',
        src: mediumImg,
      },
      {
        name: 'Youtube',
        link: 'https:/www.youtube.com/',
        title: 'Youtube',
        description: 'YouTube is a video sharing platform providing a platform for video content worldwide.',
        src: youtubeImg,
      },
    ]
  },
  {
    category: 'Programming Channels',
    items: [
      {
        name: 'Fireship',
        link: 'https:/www.youtube.com/@Fireship',
        title: 'Fireship',
        description: 'Fireship provides concise tutorials and overviews of various software development topics, often with a humorous twist.',
        src: fireshipImg,
      },
      {
        name: 'WebDevSimplified',
        link: 'https:/www.youtube.com/@WebDevSimplified',
        title: 'WebDevSimplified',
        description: 'WebDevSimplified offers practical web development tutorials, focusing on modern technologies and best practices.',
        src: webdevsimplifiedImg,
      },
      {
        name: 'ConnerArdman',
        link: 'https:/www.youtube.com/@ConnerArdman',
        title: 'ConnerArdman',
        description: 'Conner Ardman provides web development tutorials and resources, with a focus on full-stack development.',
        src: connerardmanImg,
      },
      {
        name: 'NetNinja',
        link: 'https:/www.youtube.com/@NetNinja',
        title: 'NetNinja',
        description: 'NetNinja offers coding tutorials and resources, covering a wide range of programming languages and frameworks.',
        src: netninjaImg,
      },
      {
        name: 'BroCode',
        link: 'https:/www.youtube.com/@BroCodez',
        title: 'BroCode',
        description: 'BroCode offers coding tutorials and developer resources, specializing in Python and web development.',
        src: brocodeImg,
      },
      {
        name: 'CodingWithLewis',
        link: 'https:/www.youtube.com/@CodingWithLewis',
        title: 'CodingWithLewis',
        description: 'CodingWithLewis shares coding tutorials and insights, focusing on game development and web technologies.',
        src: codingwithlewisImg,
      },
      {
        name: 'TechWithTim',
        link: 'https:/www.youtube.com/@TechWithTim',
        title: 'TechWithTim',
        description: 'TechWithTim offers coding tutorials and software development insights, with a focus on Python and AI.',
        src: techwithtimImg,
      },
      {
        name: 't3dotgg',
        link: 'https:/www.youtube.com/@t3dotgg',
        title: 't3dotgg',
        description: 't3dotgg offers coding tutorials and software development insights, focusing on web development and TypeScript.',
        src: t3dotggImg,
      },
      {
        name: 'FreeCodeCamp',
        link: 'https:/www.youtube.com/@freecodecamp',
        title: 'FreeCodeCamp',
        description: 'FreeCodeCamp offers comprehensive coding tutorials and software development insights, covering a wide range of technologies.',
        src: freecodecampChannelImg,
      },
    ]
  }
];

function Blog() {
  return (
    <main className="section">
      <motion.section className="aboutMain">
        <motion.h1
          className="aboutTitle blog"
          initial={ { opacity: 0, x: 100 } }
          whileInView={ { opacity: 1, x: 0 } }
          transition={ { duration: 0.5 } }
        >
          BLOG
        </motion.h1>

        <motion.div>
          <motion.img
            src={ flamesBorder }
            className="flamesBorder"
            alt="flamesBorder"
            initial={ { opacity: 0, x: 100 } }
            whileInView={ { opacity: 1, x: 0 } }
            transition={ { duration: 0.5 } }
          />
          <motion.h1
            className="aboutParagraph"
            initial={ { opacity: 0, x: 100 } }
            whileInView={ { opacity: 1, x: 0 } }
            transition={ { duration: 0.5 } }
          >
            <img src={ flames } className="flames" alt="flames" />
            Resources that help me with Web Development
          </motion.h1>
        </motion.div>

        <motion.article className="blogArticle">
          { allResources.map((section, sectionIndex) => (
            <motion.div key={ sectionIndex } className="blogSection">
              <motion.h2
                className="blogSectionTitle"
                initial={ { opacity: 0, y: -20 } }
                whileInView={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.5 } }
              >
                { section.category }
              </motion.h2>
              <div className="blogGrid">
                { section.items.map((resource, index) => (
                  <motion.div
                    className="blogCardContainer"
                    key={ index }
                    initial={ { opacity: 0, y: 20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.5, delay: index * 0.1 } }
                  >
                    <NavLink className="blogCard" to={ resource.link } target="_blank">
                      <motion.img
                        src={ resource.src }
                        alt={ resource.name }
                        className="blogImage"
                        whileHover={ { scale: 1.05 } }
                        transition={ { duration: 0.2 } }
                      />
                      <div className="portCardBody">
                        <h2 className="portCardTitle">{ resource.title }</h2>
                        <p className="portCardDescription">{ resource.description }</p>
                      </div>
                    </NavLink>
                  </motion.div>
                )) }
              </div>
            </motion.div>
          )) }
        </motion.article>
      </motion.section>

      <motion.section className="homeEmail">
        <Email />
      </motion.section>
      <motion.section className="section">
        <Footer />
      </motion.section>
    </main>
  );
}

export default Blog;
