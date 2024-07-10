import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Blog.css';

// Dynamically import all images from the specified folder
const importImages = import.meta.glob('../../img/Activities/*');

const resourcesData = [
   {
      name: 'Codeacademy',
      link: 'https://www.codecademy.com/',
      title: 'Codeacademy',
      description:
         'Codecademy offers free coding classes in various programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, and Swift, as well as markup languages HTML and CSS.',
   },
   {
      name: 'FreeCodeCamp',
      link: 'https://www.freecodecamp.org/',
      title: 'FreeCodeCamp',
      description:
         'freeCodeCamp is a non-profit educational organization that offers an interactive learning web platform, an online community forum, chat rooms, online publications, and local organizations to make learning software development accessible to anyone.',
   },
   {
      name: 'W3Schools',
      link: 'https://www.w3schools.com/',
      title: 'W3Schools',
      description:
         'W3Schools provides web development tutorials and references for various web technologies, serving as a comprehensive resource for learning HTML, CSS, JavaScript, and other related technologies.',
   },
   {
      name: 'GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/',
      title: 'GeeksforGeeks',
      description:
         'GeeksforGeeks provides coding resources and challenges, empowering programmers with practical skills through tutorials and practice problems.',
   },
   {
      name: 'Dev',
      link: 'https://dev.to/',
      title: 'Dev',
      description:
         'DEV is a community of software developers collaborating to help one another out.',
   },
   {
      name: 'Medium',
      link: 'https://medium.com/',
      title: 'Medium',
      description:
         'Medium is a platform for sharing insightful perspectives, useful knowledge, and life wisdom with the world.',
   },
   {
      name: 'Youtube',
      link: 'https://www.youtube.com/',
      title: 'Youtube',
      description:
         'YouTube is a video sharing platform providing a platform for video content worldwide.',
   },
];

const programmersData = [
   {
      name: 'Fireship',
      link: 'https://www.youtube.com/@Fireship',
      title: 'Fireship',
      description:
         'Fireship provides concise tutorials and overviews of various software development topics, often with a humorous twist.',
   },
   {
      name: 'WebDevSimplified',
      link: 'https://www.youtube.com/@WebDevSimplified',
      title: 'WebDevSimplified',
      description:
         'WebDevSimplified offers practical web development tutorials, focusing on modern technologies and best practices.',
   },
   {
      name: 'ConnerArdman',
      link: 'https://www.youtube.com/@ConnerArdman',
      title: 'ConnerArdman',
      description:
         'Conner Ardman provides web development tutorials and resources, with a focus on full-stack development.',
   },
   {
      name: 'NetNinja',
      link: 'https://www.youtube.com/@NetNinja',
      title: 'NetNinja',
      description:
         'NetNinja offers coding tutorials and resources, covering a wide range of programming languages and frameworks.',
   },
   {
      name: 'BroCode',
      link: 'https://www.youtube.com/@BroCodez',
      title: 'BroCode',
      description:
         'BroCode offers coding tutorials and developer resources, specializing in Python and web development.',
   },
   {
      name: 'CodingWithLewis',
      link: 'https://www.youtube.com/@CodingWithLewis',
      title: 'CodingWithLewis',
      description:
         'CodingWithLewis shares coding tutorials and insights, focusing on game development and web technologies.',
   },
   {
      name: 'TechWithTim',
      link: 'https://www.youtube.com/@TechWithTim',
      title: 'TechWithTim',
      description:
         'TechWithTim offers coding tutorials and software development insights, with a focus on Python and AI.',
   },
   {
      name: 't3dotgg',
      link: 'https://www.youtube.com/@t3dotgg',
      title: 't3dotgg',
      description:
         't3dotgg offers coding tutorials and software development insights, focusing on web development and TypeScript.',
   },
   {
      name: 'FreeCodeCamp',
      link: 'https://www.youtube.com/@freecodecamp',
      title: 'FreeCodeCamp',
      description:
         'FreeCodeCamp offers comprehensive coding tutorials and software development insights, covering a wide range of technologies.',
   },
];

const importAllImages = async (importGlob, data) => {
   const images = await Promise.all(
      Object.keys(importGlob).map(async (path) => {
         const name = path.split('/').pop().split('.')[0];
         const image = await importGlob[path]();
         return { name, src: image.default };
      })
   );

   return data.map((item) => {
      const image = images.find((img) => img.name.toLowerCase() === item.name.toLowerCase());
      return { ...item, src: image ? image.src : '' };
   });
};

function Blog() {
   const [resources, setResources] = useState([]);
   const [programmers, setProgrammers] = useState([]);

   useEffect(() => {
      importAllImages(importImages, resourcesData).then(setResources);
      importAllImages(importImages, programmersData).then(setProgrammers);
   }, []);

   return (
      <main className="section">
         <h1 className="aboutTitle blog">BLOG</h1>

         <section className="aboutMain">
            <div>
               <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
               <h1 className="aboutParagraph">
                  <img src={flames} width="26px" alt="flames" /> These websites help me understand
                  how code works.
               </h1>
            </div>
            <article className="blogArticle">
               {resources.map((resource, index) => (
                  <div className="blogCards" key={index}>
                     <NavLink className="blogCard" to={resource.link} target="_blank">
                        <img src={resource.src} alt={resource.name} className="freeCodeCamp" />
                        <div className="portCardBody">
                           <h2 className="portCardTitle">{resource.title}</h2>
                           <p className="portCardDescription">{resource.description}</p>
                        </div>
                     </NavLink>
                  </div>
               ))}
            </article>
            <div>
               <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
               <h1 className="aboutParagraph">
                  <img src={flames} width="26px" alt="flames" /> These are the programmers that
                  helps me understand more about Web Development.
               </h1>
            </div>

            <article className="blogArticle">
               {programmers.map((programmer, index) => (
                  <div className="blogCards" key={index}>
                     <NavLink className="blogCard" to={programmer.link} target="_blank">
                        <img src={programmer.src} alt={programmer.name} className="freeCodeCamp" />
                        <div className="portCardBody">
                           <h2 className="portCardTitle">{programmer.title}</h2>
                           <p className="portCardDescription">{programmer.description}</p>
                        </div>
                     </NavLink>
                  </div>
               ))}
            </article>
         </section>

         <section className="homeEmail">
            <Email />
         </section>
         <section className="section">
            <Footer />
         </section>
      </main>
   );
}

export default Blog;
