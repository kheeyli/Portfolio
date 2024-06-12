import React,  { useState }from "react";  
import UserPic from './images/UserPic.jpg';
import './LPStyles.css';
import git from './images/github.png';
import job from './images/jobstreet.png';
import lnkin from './images/linkedin.png';
import mail from './images/mail.png';
import phone from './images/phone.png';
import loc from './images/location.png';
import db from './images/database.png';
import ntwrk from './images/network.png';
import sap from './images/sap.png';
import ojt from './images/ojt.png';
import btncert from './images/cert-button.png';
import exit from './images/close.png';

const LandingPage = () => {

    const [showPopup, setShowPopup] = useState(false);

  const handleCertificationsClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
    
    return (
    <html>
        <header>
            <ul>
                <li>< a href="#home"> Home</a></li>
                <li><a href="#certifications" onClick={handleCertificationsClick}>Certifications</a></li>
                <li> < a href="#projects"> Projects </a></li>

                <div className="links">
                    <a href="https://github.com/kheeyli"> <img src={git}  className="github" /></a>
                    
                    <a href="https://www.linkedin.com/in/khellyroselibed"><img src={lnkin} className="linked"/> </a>                    
                    <a href="https://www.jobstreet.com.ph/profile/khellyrose-libed-2cpfFjd6RX"><img src= {job} className="jobstrt"/> </a>   
                </div>
               
            </ul>
        </header>

        <body>
            <div className="intro">
                <div className="con">

                </div>

                <img src={UserPic} className="profile" alt="user"/>
                
                <p className="name"> Khelly Rose Eballonado Libed</p>
                
                <hr className="divider"/>

                <p className="course">Bachelor of Science in Information Technology</p>

                <div className="contacts">
                    <div className="contact-details">
                        <a href="https://www.google.com/maps/place/Makati+City" target="_blank" className="loc"> Makati City, Philippines</a>
                        <a href="mailto:libed.khellyrose@gmail.com" className="gmail">libed.khellyrose@gmail.com</a>
                        <a href="tel:09951203547" className="num" >09951203547  </a>
                    </div>
                    <img src={loc} className="location" alt="loc" />
                    <img src={mail} className="mail" alt="mail" />
                    <img src={phone} className="phone" alt="phone" />
                </div>

                <p className="techskills"> Technical Skillsets : <br/> &lt;React&gt; , &lt;ReactNative&gt; , &lt;JavaScript&gt; , &lt;TypeScript&gt;, &lt;HTML&gt;, &lt;CSS&gt;, &lt;Github&gt;</p>
                <p className="softskills"> Soft Skills : <br/> Used in working in a fast-paced environment | Multitasker | Fast Learner | Good Communication Skill | Team Player </p>

            </div>

            <div className="after">

            <div className="head2">
                <p>Certifications and some of the latest projects :</p>
            </div>
                <img src={btncert} className="btnCert" alt="button" onClick={handleCertificationsClick} />
                        {showPopup && (
                            <div className="popup">
                                <div className="popup-content">

                                    <div className="certpics">
                                            <img src={db} className="database" alt="certificate"/>
                                            <img src={sap} className="Sap" alt="certificate"/>
                                            <img src={ntwrk} className="network" alt="certificate"/>
                                            <img src={ojt} className="coc" alt="certificate"/>
                                    </div>
                                    
                                <img src={exit} className="btnExit" alt="button" onClick={closePopup} />
                                </div>
                            </div>
                        )}

            </div>



        </body>

    </html>

    );
  }

export default LandingPage;