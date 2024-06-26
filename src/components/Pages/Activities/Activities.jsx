import { NavLink } from 'react-router-dom';

import BackGround from '../../img/assets/pixel-neon.gif';
import Activity01 from '../../img/Activities/Activity01.png';
import Activity02 from '../../img/Activities/Activity02.png';
import Activity03 from '../../img/Activities/Activity03.png';
import Activity04 from '../../img/Activities/Activity04.png';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';

import './Activities.css';

const activities = [
   {
      src: Activity01,
      alt: 'Activity01',
      link: 'https://web.facebook.com/him.blacklion567/videos/1362680517723712',
      title: 'Weather Data Fetching',
      description:
         'This is my first code explanation, which is about fetching data to check the weather of any city, country, province, or barangay. The website retrieves the temperature, pressure, and daytime information for the specified location.',
   },
   {
      src: Activity02,
      alt: 'Activity02',
      link: 'https://web.facebook.com/him.blacklion567/videos/970403707848208',
      title: 'Calculates Grades',
      description:
         'In this video, I will kindly explain our school activity or our preliminary examination. It calculates the grade of your quizzes and major exams. After calculating your final grade, it will be displayed. So, I will be explaining how it happened.',
   },
   {
      src: Activity03,
      alt: 'Activity03',
      link: 'https://web.facebook.com/him.blacklion567/videos/1186005469492945',
      title: 'Counting StartToEnd',
      description:
         'In this video, I will kindly explain our school activity, which involves displaying the starting and ending values of a number.',
   },
   {
      src: Activity04,
      alt: 'Activity04',
      link: 'https://web.facebook.com/him.blacklion567/videos/1166506001439419',
      title: 'LightBulb ON/OFF',
      description:
         "In this video, I explain how the bulb on and off function works. When you click the button, the bulb image appears, and when you click the button again, the off bulb image appears. You'll understand the reasons behind this behavior. This video isn't about claiming expertise but about sharing knowledge and fostering discussion. Let's dive in.",
   },
];

function Activities() {
   return (
      <main className="container">
         <div className="active">
            <section className="activeWelcome">
               <div>
                  <h1 className="aboutTitle">Welcome to Activities👋</h1>
                  <p>
                     What are my recent online activities as I learn coding to become a frontend
                     developer?
                  </p>
               </div>
               <img src={BackGround} alt="BackGround" />
            </section>
            <article className="blogArticle">
               {activities.map((activity, index) => (
                  <div className="blogCards" key={index}>
                     <NavLink className="blogCard" to={activity.link} target="_blank">
                        <img src={activity.src} alt={activity.alt} className="freeCodeCamp" />
                        <div className="portCardBody">
                           <h2 className="portCardTitle">{activity.title}</h2>
                           <p className="portCardDescription">{activity.description}</p>
                        </div>
                     </NavLink>
                  </div>
               ))}
            </article>
         </div>

         <h1 className="activeTitle">
            <svg
               width="30"
               height="25"
               fill="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M7.125 2.25h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M14.25 2.25h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M21.375 2.25h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M7.125 9.375h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M14.25 9.375h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M21.375 9.375h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M7.125 16.5h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M14.25 16.5h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
               <path d="M21.375 16.5h-4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375Z" />
            </svg>
            WakaTime Activity
         </h1>
         <section className="activeExternal">
            <div>
               <img src="./ban.jpg" alt="banban" className="banbanImage" />
            </div>
            <div>
               <div className="activeStatItem">
                  <h1>🏆 WakaTime Stats</h1>
                  <a href="https://wakatime.com/@BanBan" target="_blank" rel="noopener noreferrer">
                     <img
                        src="https://github-readme-stats.vercel.app/api/wakatime?username=BanBan&theme=radical&layout=compact"
                        alt="WakaTime Coding Time"
                        width="100%"
                     />
                  </a>
               </div>
               <div>
                  <h1>
                     <svg
                        width="20"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z" />
                        <path d="m16.5 8.25-6.3 7.5-2.7-3" />
                     </svg>
                     WakaTime Active
                  </h1>
                  <a href="https://wakatime.com" target="_blank" rel="noopener noreferrer">
                     <img
                        src="https://wakatime.com/share/@BanBan/8f2a2577-a6d4-4a17-b839-30c5da0183d9.png"
                        alt="WakaTime Link"
                     />
                  </a>
               </div>
            </div>
         </section>
         <div className="active">
            <h1 className="activeTitle">🏆 My Github Stats </h1>
            <section className="activeExternal">
               <div>
                  <div className="activeStatsContainer">
                     <div className="activeStatItem">
                        <a
                           href="https://wakatime.com/@BanBan"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              src="https://github-readme-stats.vercel.app/api/top-langs/?username=BanSimplified567&theme=radical&langs_count=10&card_width=540&layout=compact"
                              alt="Most Used Languages"
                           />
                        </a>
                     </div>
                     <div className="activeStatItem">
                        <a
                           href="https://wakatime.com/@BanBan"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              src="https://streak-stats.demolab.com?user=BanSimplified567&theme=radical"
                              alt="Streaks Graph"
                           />
                        </a>
                        <a
                           href="https://wakatime.com/@BanBan"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <img
                              src="https://github-readme-stats.vercel.app/api?username=BanSimplified567&theme=radical&show_icons=true&count_private=true"
                              alt="GitHub Stats Graph"
                           />
                        </a>
                     </div>
                  </div>
               </div>
               <div>
                  <img src="./banban.jpg" alt="banban" className="banbanImage" />
               </div>
            </section>
         </div>
         <section>
            <Email />
         </section>
         <section>
            <Footer />
         </section>
      </main>
   );
}

export default Activities;
