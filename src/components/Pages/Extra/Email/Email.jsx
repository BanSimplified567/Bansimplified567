import imagesMail from '../../../img/assets/vaporwave-aesthetic.gif';
import Linkedin from '../../../img/logos/neon-linkedin.png';
import Facebook from '../../../img/logos/neon-facebook.png';
import Instagram from '../../../img/logos/neon-instagram.png';
import Messenger from '../../../img/logos/neon-twitter.png';
import Tiktok from '../../../img/logos/neon-tiktok.png';
import Youtube from '../../../img/logos/neon-youtube.png';

import { Link } from 'react-router-dom';
import './Email.css';

function Email() {
   return (
      <>
         <div className="emailContainer">
            <form action="" className="emailFormSection">
               <img src={imagesMail} alt="imagesMail" className="emailImage" />
               <div className="emailDescriptions">
                  <h1 className="aboutParagraph">SUBSCRIBE TO MY SOCIAL MEDIA TODAY</h1>
                  <p className="aboutSemiTitle">
                     In my social-media, I share personal and career learnings, advice,
                     collaboration opportunities, and more.
                  </p>
                  <div className="emailIcons">
                     <Link to="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/">
                        <img src={Linkedin} alt="Linkedin" width="50px" />
                     </Link>
                     <Link to="https://www.instagram.com/nocodearea/">
                        <img src={Instagram} alt="Instagram" width="50px" />
                     </Link>
                     <Link to="https://web.facebook.com/him.blacklion567/">
                        <img src={Facebook} alt="Facebook" width="50px" />
                     </Link>
                     <Link to="https://x.com/JBringcola">
                        <img src={Messenger} alt="Messenger" width="50px" />
                     </Link>
                     <Link to="https://www.tiktok.com/@bansimplified?is_from_webapp=1&sender_device=pc">
                        <img src={Tiktok} alt="Tiktok" width="50px" />
                     </Link>
                     <Link to="https://www.youtube.com/channel/UCHuVTj0sCJA5YQ_BUTcSPaw">
                        <img src={Youtube} alt="Youtube" width="50px" />
                     </Link>
                  </div>
                  <div className="emailContainerInput">
                     <div className="inputWrapper">
                        <input type="email" className="emailInput" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
}

export default Email;
