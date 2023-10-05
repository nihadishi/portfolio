import React from "react";
import Header from "../../components/header/Header";
import "./style.scss";
import PhoneSvg from "./img/phone.svg";
import MailSvg from "./img/mail.svg";
import LocationSvg from "./img/location.svg";
import Avatar from "./img/avatar.png";
const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="About">
        <div className="AboutC">
          <div className="AboutCMe">
            <div className="AboutCMe-left">
              <div className="AboutCMe-left-name">About</div>
              <div className="AboutCMe-left-speciality">
                Full stack developer
              </div>
              <div className="AboutCMe-left-about">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium perferendis eum voluptatem laborum, beatae
                recusandae ex earum ducimus? Quaerat consequuntur repudiandae
                voluptatum praesentium! Amet nihil sunt repellendus, ab pariatur
                veniam.
              </div>
              <div className="AboutCMe-left-contact">
                <ul>
                  <li>
                    <img src={PhoneSvg} alt="" />
                    <p>+994776373838</p>
                  </li>
                  <li>
                    <img src={MailSvg} alt="" />
                    <p>nihadishi@gmail.com</p>
                  </li>
                  <li>
                    <img src={LocationSvg} alt="" />
                    <p>Baku, Azerbaijan</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="AboutCMe-right">
              <img src={Avatar} alt="" />
            </div>
          </div>
          <div className="AboutCSkills">
            <div className="AboutCSkills-name">Skills</div>
            <div className="AboutCSkills-skill">asd</div>
            <div className="AboutCSkills-skill">asd</div>
            <div className="AboutCSkills-skill">asd</div>
          </div>
          <div className="AboutCComments">asd</div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
