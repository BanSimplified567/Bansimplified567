import { NavLink } from 'react-router-dom';

import Codeacademy from '../../img/Activities/Codeacademy.png';
import FreeCodeCamp from '../../img/Activities/FreeCodeCamp.png';
import W3Schools from '../../img/Activities/W3Schools.png';
import GeeksforGeeks from '../../img/Activities/GeeksforGeeks.jpeg';
import Youtube from '../../img/Activities/Youtube.png';
import Dev from '../../img/Activities/Dev.png';
import Medium from '../../img/Activities/Medium.png';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';

import './Blog.css';
const resources = [
   {
      src: Codeacademy,
      alt: 'Codeacademy',
      link: 'https://www.codecademy.com/',
      title: 'Codeacademy',
      description:
         'Codecademy is an American online interactive platform that offers free coding classes in various programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, and Swift, as well as markup languages HTML and CSS.',
   },
   {
      src: FreeCodeCamp,
      alt: 'FreeCodeCamp',
      link: 'https://www.freecodecamp.org/',
      title: 'FreeCodeCamp',
      description:
         'freeCodeCamp is a non-profit educational organization that offers an interactive learning web platform, an online community forum, chat rooms, online publications, and local organizations to make learning software development accessible to anyone.',
   },
   {
      src: W3Schools,
      alt: 'W3Schools',
      link: 'https://www.w3schools.com/',
      title: 'W3Schools',
      description:
         'W3Schools is a popular online platform that provides web development tutorials and references for various web technologies, serving as a comprehensive resource for learning HTML, CSS, JavaScript, and other related technologies.',
   },
   {
      src: GeeksforGeeks,
      alt: 'GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/',
      title: 'GeeksforGeeks',
      description:
         'GeeksforGeeks, founded in 2008 by Sandeep Jain, is a premier platform providing coding resources and challenges to over 12 million users globally, empowering programmers with practical skills through tutorials and practice problems.',
   },

   {
      src: Dev,
      alt: 'Dev',
      link: 'https://dev.to/',
      title: 'Dev',
      description:
         'DEV is a community of software developers collaborating to help one another out. The software industry relies on networked learning and collaboration, and DEV provides a place for that to happen.',
   },
   {
      src: Medium,
      alt: 'Medium',
      link: 'https://medium.com/',
      title: 'Medium',
      description:
         'Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.',
   },
   {
      src: Youtube,
      alt: 'Youtube',
      link: 'https://www.youtube.com/',
      title: 'Youtube',
      description:
         'YouTube is an American online video sharing platform owned by Google, launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, providing a platform for video content worldwide.',
   },
];

function Blog() {
   return (
      <main className="section">
         <h1 className="aboutTitle blog">BLOG</h1>
         <h1 className="aboutParagraph">These websites help me understand how code works.</h1>
         <article className="blogArticle">
            {resources.map((resource, index) => (
               <div className="blogCards" key={index}>
                  <NavLink className="blogCard" to={resource.link} target="_blank">
                     <img src={resource.src} alt={resource.alt} className="freeCodeCamp" />
                     <div className="portCardBody">
                        <h2 className="portCardTitle">{resource.title}</h2>
                        <p className="portCardDescription">{resource.description}</p>
                     </div>
                  </NavLink>
               </div>
            ))}
         </article>
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
