import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import BanHotel from '../../img/PortfolioImages/BanHotel.png';
import BirthdayGift from '../../img/PortfolioImages/BirthdayGift.png';
import BulbOnOff from '../../img/PortfolioImages/BulbOnOff.png';
import Calculator from '../../img/PortfolioImages/Calculator.png';
import PizzaBan from '../../img/PortfolioImages/PizzaBan.png';
import Sukidesu from '../../img/PortfolioImages/Sukidesu.png';

import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: "BulbOnOff",
    description: "Our School Activity Bulb-Switch",
    date: "October 15, 2023",
    type: "Side-Project",
    link: "https://bulb-switch-six.vercel.app/",
    image: BulbOnOff
  },
  {
    id: 2,
    title: "PizzaBanSibonga",
    description: "My Project for 2nd-Year College Finals",
    date: "June 12, 2024",
    type: "Side-Project",
    link: "https://pizzabansibonga.netlify.app/",
    image: PizzaBan
  },
  {
    id: 3,
    title: "Basic-Calculator",
    description: "Basic Calculator using React",
    date: "Aug 1, 2024",
    type: "Side-Project",
    link: "https://calculator-sigma-hazel.vercel.app/",
    image: Calculator
  },
  {
    id: 4,
    title: "Sukidesu",
    description: "Confession To Your Crush",
    date: "Aug 10, 2024",
    type: "Side-Project",
    link: "https://sukidesu.vercel.app/",
    image: Sukidesu
  },
  {
    id: 5,
    title: "BirthdayGift",
    description: "My Birthday Gift For You",
    date: "Aug 18, 2024",
    type: "Side-Project",
    link: "https://birthday-gift-eight.vercel.app/",
    image: BirthdayGift
  },
  {
    id: 6,
    title: "BanHotel",
    description: "BanHotel UI Design For Frontend",
    date: "October 1, 2024",
    type: "Side-Project",
    link: "https://banhotel.netlify.app/",
    image: BanHotel
  }
];

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

function Portfolio() {
  return (
    <main className="container">
      <motion.section { ...animationProps } className="section">
        <motion.h1 { ...animationPropsUp } className="aboutTitle portfolio">
          PORTFOLIO 🛠️
        </motion.h1>
        <motion.p { ...animationProps } className="portfolioDescription">
          In my portfolio, I'll showcase projects and side projects I've worked on
          in my free time, highlighting my skills and creativity.
        </motion.p>
      </motion.section>

      <motion.article className="portfolioGrid">
        { portfolioItems.map((item, index) => (
          <motion.div
            key={ item.id }
            className="portfolioCardWrapper"
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.5, delay: index * 0.1 } }
          >
            <NavLink className="portfolioCard" target="_blank" to={ item.link }>
              <motion.img
                src={ item.image }
                alt={ item.title }
                className="portfolioImage"
                whileHover={ { scale: 1.03 } }
                transition={ { duration: 0.2 } }
              />
              <div className="portfolioCardBody">
                <h2 className="portfolioCardTitle">{ item.title }</h2>
                <p className="portfolioCardDescription">{ item.description }</p>
                <div className="portfolioMeta">
                  <p className="portfolioCardDate">
                    <span className="portfolioSemiTitle">Created:</span> { item.date }
                  </p>
                  <p className="portfolioCardType">
                    <span className="portfolioSemiTitle">Type:</span> { item.type }
                  </p>
                </div>
              </div>
            </NavLink>
          </motion.div>
        )) }
      </motion.article>

      <motion.section { ...animationProps } className="homeEmail">
        <Email />
      </motion.section>
      <motion.section { ...animationProps } className="section">
        <Footer />
      </motion.section>
    </main>
  );
}

export default Portfolio;
