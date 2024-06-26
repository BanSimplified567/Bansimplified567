import { NavLink } from 'react-router-dom';
import PizzaBan from '../../img/PortfolioImages/PizzaBan.png';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import './Portfolio.css';

function Portfolio() {
   return (
      <>
         <main className="container">
            <section className="section">
               <h1 className="aboutTitle portfolio">PORTFOLIO 🛠️</h1>
               <p>
                  In my portfolio, I&#39;ll showcase projects and side projects I&#39;ve worked on
                  in my free time, highlighting my skills and creativity.
               </p>
            </section>
            <article className="portArticle">
               <NavLink className="portCard" to="https://pizzabansibonga.netlify.app/">
                  <img src={PizzaBan} alt="PizzaBan" className="portImage" />
                  <div className="portCardBody">
                     <h2 className="portCardTitle">PizzaBanSibonga</h2>
                     <p className="portCardDescription">
                        Welcome to PizzaBan! Enjoy the best pizza in town, crafted with fresh
                        ingredients and served with a smile. Taste the difference at PizzaBan!
                     </p>
                     <p className="portCardDate">
                        <span className="aboutSemiTitle">Created:</span> June 12, 2024
                     </p>
                     <p className="portCardType">
                        <span className="aboutSemiTitle">Type:</span> Side-Project
                     </p>
                  </div>
               </NavLink>
            </article>

            <section className="homeEmail">
               <Email />
            </section>
            <section className="section">
               <Footer />
            </section>
         </main>
      </>
   );
}

export default Portfolio;
