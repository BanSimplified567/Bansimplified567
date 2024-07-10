import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';
import Lunocan from '../../img/logos/Lunocan.jpg';
import Manolo from '../../img/logos/Manolo.png';
import Rebisco from '../../img/logos/rebisco.svg.png';
import Sibonga from '../../img/logos/Sibonga.jpg';

import './About.css';

const badgeData = [
   {
      src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      alt: 'html5',
   },
   {
      src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
      alt: 'css3',
   },
   {
      src: 'https://img.shields.io/badge/javascript-%2314354C.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      alt: 'javascript',
   },
   {
      src: 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
      alt: 'Sass',
   },
   {
      src: 'https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white',
      alt: 'json',
   },
   {
      src: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      alt: 'tailwind',
   },
   {
      src: 'https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E',
      alt: 'vite',
   },
   {
      src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      alt: 'react',
   },
   {
      src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
      alt: 'typescript',
   },
   {
      src: 'https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
      alt: 'php',
   },
   {
      src: 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
      alt: 'cpp',
   },
   {
      src: 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
      alt: 'python',
   },
   {
      src: 'https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E',
      alt: 'prettier',
   },
   {
      src: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      alt: 'github',
   },
   {
      src: 'https://img.shields.io/badge/NPM-CA4245?style=for-the-badge&logo=npm&logoColor=white',
      alt: 'npm',
   },
   {
      src: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      alt: 'git',
   },
   {
      src: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white',
      alt: 'vscode',
   },
   {
      src: 'https://img.shields.io/badge/Open%20AI-0f9e7b.svg?style=for-the-badge&logo=openAI&logoColor=white',
      alt: 'open-AI',
   },
   {
      src: 'https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white',
      alt: 'powershell',
   },
   {
      src: 'https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white',
      alt: 'xampp',
   },
   {
      src: 'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white',
      alt: 'windows',
   },
   {
      src: 'https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white',
      alt: 'debian',
   },
   {
      src: 'https://img.shields.io/badge/Linux_Mint-87CF3E?style=for-the-badge&logo=linux-mint&logoColor=white',
      alt: 'linux-mint',
   },
   {
      src: 'https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white',
      alt: 'ubuntu',
   },
];

const AboutSkills = () => {
   return (
      <>
         <section>
            <div className="aboutTBody">
               {badgeData.map((badge, index) => (
                  <div key={index}>
                     <img src={badge.src} alt={badge.alt} height="35" width="100" />
                  </div>
               ))}
            </div>
         </section>
         <p className="aboutSemiTitle">
            - While I continue to focus on front-end technologies, I am dedicated to expanding my
            backend skills to create more comprehensive and robust web applications. My goal is to
            deliver exceptional user experiences by combining the best of both front-end and backend
            development.
         </p>
      </>
   );
};

const experiences = [
   {
      image: Rebisco,
      alt: 'Rebisco',
      role: 'Factory Worker \n (NOT-RELATED)',
      company: 'Republic Biscuit Corporation (REBISCO)',
      description:
         'The Republic Biscuit Corporation, doing business as Rebisco and also known as the Rebisco Group of Companies, is a Philippine privately held multinational snack food company headquartered in Ortigas Center, Pasig.',
      location: 'Bukidnon, Northern Mindanao, Philippines',
      duration: 'Nov 2021 - Apr 2022',
      type: 'Full-time',
      mode: 'On-site',
   },
];

const education = [
   {
      image: Lunocan,
      alt: 'Lunocan',
      role: 'Lunocan Elementary School',
      description:
         'Lunocan Elementary School is one of the elementary schools within the Los Lunas Public School District in New Mexico.',
      location: 'Bukidnon, Northern Mindanao, Philippines',
      duration: 'Apr 2015-2016',
      type: 'Lunocan MF Buk',
      mode: 'Fulltime-Student',
   },
   {
      image: Manolo,
      alt: 'Manolo',
      role: 'Manolo Fortich National Senior High School',
      description:
         'Manolo Fortich National High School is a school located in Manolo Fortich, Bukidnon. It is one of the top-performing schools in the Division of Bukidnon.',
      location: 'Bukidnon, Northern Mindanao, Philippines',
      duration: 'Apr 2021-2022',
      type: 'Manolo Fortich Buk',
      mode: 'Working-Student',
   },
   {
      image: Sibonga,
      alt: 'Sibonga',
      role: 'Sibonga Community College',
      description:
         'Sibonga Community College is a private educational institution located in Cebu, Philippines. It is classified as a school and offers various programs and services to its students.',
      location: 'Sibonga, Poblacion, 6000, Cebu, Philippines',
      duration: 'August 2025-2026',
      type: 'Manolo Fortich Buk',
      mode: 'Working-Student',
   },
];

const AboutExperienceArticle = ({
   image,
   alt,
   role,
   company,
   description,
   location,
   duration,
   type,
   mode,
}) => (
   <article className="aboutExperienceArticle">
      <div className="aboutExperienceRebisco">
         <img src={image} alt={alt} className="aboutRebisco" />
         <div className="aboutExperienceRebiscoDescription">
            <h1 className="aboutParagraph">{role}</h1>
            {company && <p>{company}</p>}
            <p>{description}</p>
            <p>{location}</p>
         </div>
      </div>
      <div className="aboutExperienceData">
         <p>{duration}</p>
         <p>{type}</p>
         <p>{mode}</p>
      </div>
   </article>
);

const AboutExperience = () => (
   <>
      <div>
         <div className="aboutSection section">
            <img src={flames} width="26px" alt="flames" />
            <h1 className="aboutTitle">Experience</h1>
            <img src={flames} width="26px" alt="flames" />
         </div>
         <div className="aboutSectionEducation">
            {experiences.map((exp, index) => (
               <AboutExperienceArticle key={index} {...exp} />
            ))}
         </div>
      </div>
      <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />

      <div>
         <div className="aboutSection">
            <img src={flames} width="26px" alt="flames" />
            <h1 className="aboutTitle">Education</h1>
            <img src={flames} width="26px" alt="flames" />
         </div>

         <div className="aboutSectionEducation section">
            {education.map((edu, index) => (
               <AboutExperienceArticle key={index} {...edu} />
            ))}
         </div>
      </div>
   </>
);

export { AboutExperience, AboutSkills };
