import React from "react";
import Header from "../../components/header/Header";
import "./style.scss";
import PhoneSvg from "./img/phone.svg";
import MailSvg from "./img/mail.svg";
import LocationSvg from "./img/location.svg";
import Avatar from "./img/avatar.png";
import LineSvg from "./img/line.svg";
import Rating from "../../components/rating/Rating";
const AboutPage = () => {
  const firstskills = [
    { key: 1, name: "React.js", slc: 3, uslc: 2 },
    { key: 2, name: "React.js", slc: 4, uslc: 1 },
    { key: 3, name: "React.js", slc: 5, uslc: 0 },
    { key: 4, name: "React.js", slc: 5, uslc: 0 },
    { key: 5, name: "React.js", slc: 5, uslc: 0 },
    { key: 6, name: "React.js", slc: 5, uslc: 0 },
    { key: 7, name: "React.js", slc: 1, uslc: 4 },
    { key: 8, name: "React.js", slc: 2, uslc: 3 },
    { key: 9, name: "React.js", slc: 3, uslc: 2 },
    { key: 10, name: "React.js", slc: 4, uslc: 1 },
    { key: 11, name: "React.js", slc: 3, uslc: 2 },
    { key: 12, name: "React.js", slc: 3, uslc: 2 },
    { key: 13, name: "React.js", slc: 3, uslc: 2 },
    { key: 14, name: "React.js", slc: 3, uslc: 2 },
    { key: 15, name: "React.js", slc: 3, uslc: 2 },
  ];
  return (
    <>
      <Header />
      <div className="AboutMain">
        <div className="About">
          <div className="AboutMe">
            <div className="AboutMe-left">
              <div className="AboutMe-left-name">
                <img src={LineSvg} alt="" />
                {" About "}
                <img src={LineSvg} alt="" />
              </div>
              <div className="AboutMe-left-speciality">
                Full stack developer
              </div>
              <div className="AboutMe-left-about">
                Nihad Maharramov, I'm Full stack Web and Mobile Developer, and
                constantly learning, developing new technical knowledge in web
                and mobile development. Also, soft skills are as important as
                technical knowledge. My communication skills enable me to work
                harmoniously in a team and to successfully complete projects by
                collaborating with team members. My problem solving ability and
                analytical thinking make me strong to overcome the difficulties
                and produce effective solutions. I constantly follow new
                technologies and take care to have the most up-to-date
                information in the field. Also, I care about listening to
                feedback and constantly improving myself with my mistakes.Nihad
                Maharramov, I'm Full stack Web and Mobile Developer, and
                constantly learning, developing new technical knowledge in web
                and mobile development. Also, soft skills are as important as
                technical knowledge. My communication skills enable me to work
                harmoniously in a team and to successfully complete projects by
                collaborating with team members. My problem solving ability and
                analytical thinking make me strong to overcome the difficulties
                and produce effective solutions. I constantly follow new
                technologies and take care to have the most up-to-date
                information in the field. Also, I care about listening to
                feedback and constantly improving myself with my mistakes.
              </div>
              <div className="AboutMe-left-contact">
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
            <div className="AboutMe-right">
              <img src={Avatar} alt="" />
            </div>
          </div>
          <div className="AboutSkills">
            <div className="AboutSkills-name">
              <img src={LineSvg} alt="" />
              {"Skills"}
              <img src={LineSvg} alt="" />
            </div>
            <div className="AboutSkills-skill">
              <div className="AboutSkills-skill-name">SOFTWARE</div>
              <div className="AboutSkills-skill-items">
                {firstskills.map((item) => (
                  <div className="AboutSkills-skill-item" key={item.key}>
                    {item.name}
                    <Rating slc={item.slc} uslc={item.uslc} />
                  </div>
                ))}
              </div>
            </div>
            <div className="AboutSkills-skill">
              <div className="AboutSkills-skill-name">HARDWARE</div>
              <div className="AboutSkills-skill-items">
                {firstskills.map((item) => (
                  <div className="AboutSkills-skill-item" key={item.key}>
                    {item.name}
                    <Rating slc={item.slc} uslc={item.uslc} />
                  </div>
                ))}
              </div>
            </div>
            <div className="AboutSkills-skill">
              <div className="AboutSkills-skill-name">SOFTWARE</div>
              <div className="AboutSkills-skill-items">
                {firstskills.map((item) => (
                  <div className="AboutSkills-skill-item" key={item.key}>
                    {item.name}
                    <Rating slc={item.slc} uslc={item.uslc} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="AboutComments">
            <div className="AboutComments-name">
              <img src={LineSvg} alt="" />
              {"Comments"}
              <img src={LineSvg} alt="" />
            </div>
            <div className="AboutComments-items">
              <div className="AboutComments-item"></div>
              <div className="AboutComments-item"></div>
              <div className="AboutComments-item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
