import React from "react";
import Header from "../../components/header/Header";
import "./style.scss";
import PhoneSvg from "./img/phone.svg";
import MailSvg from "./img/mail.svg";
import LocationSvg from "./img/location.svg";
import Avatar from "./img/avatar.png";
import LineSvg from "../../assets/imgs/line.svg";
import Rating from "../../components/rating/Rating";
const AboutPage = () => {
  const firstskills = [
    { key: 1, name: "HTML", slc: 3, uslc: 2 },
    { key: 2, name: "CSS", slc: 4, uslc: 1 },
    { key: 3, name: "BootStrap", slc: 5, uslc: 0 },
    { key: 4, name: "SASS", slc: 5, uslc: 0 },
    { key: 5, name: "JavaScript", slc: 5, uslc: 0 },
    { key: 6, name: "React.js", slc: 5, uslc: 0 },
    { key: 7, name: "Redux.js", slc: 1, uslc: 4 },
    { key: 8, name: "MUI", slc: 2, uslc: 3 },
    { key: 9, name: "ANTD", slc: 3, uslc: 2 },
    { key: 10, name: "React.js", slc: 4, uslc: 1 },
    { key: 11, name: "React.js", slc: 3, uslc: 2 },
    { key: 12, name: "React.js", slc: 3, uslc: 2 },
    { key: 13, name: "React.js", slc: 3, uslc: 2 },
    { key: 14, name: "React.js", slc: 3, uslc: 2 },
    { key: 15, name: "React.js", slc: 3, uslc: 2 },
  ];
  const secondskills = [
    { key: 1, name: "React-Native", slc: 3, uslc: 2 },
    { key: 2, name: "Kotlin", slc: 4, uslc: 1 },
    { key: 3, name: "MVC", slc: 5, uslc: 0 },
    { key: 4, name: "MVVM", slc: 5, uslc: 0 },
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
  const thirdskills = [
    { key: 1, name: "Node.js", slc: 3, uslc: 2 },
    { key: 2, name: "Express.js", slc: 4, uslc: 1 },
    { key: 3, name: "JavaScript", slc: 5, uslc: 0 },
    { key: 4, name: "TypeScript", slc: 5, uslc: 0 },
    { key: 5, name: "Java", slc: 5, uslc: 0 },
    { key: 6, name: "Kotlin", slc: 5, uslc: 0 },
    { key: 7, name: "C#", slc: 1, uslc: 4 },
    { key: 8, name: "React.js", slc: 2, uslc: 3 },
    { key: 9, name: "React.js", slc: 3, uslc: 2 },
    { key: 10, name: "React.js", slc: 4, uslc: 1 },
    { key: 11, name: "MongoDB", slc: 3, uslc: 2 },
    { key: 12, name: "React.js", slc: 3, uslc: 2 },
    { key: 13, name: "React.js", slc: 3, uslc: 2 },
    { key: 14, name: "React.js", slc: 3, uslc: 2 },
    { key: 15, name: "React.js", slc: 3, uslc: 2 },
  ];
  return (
    <>
      <Header />
      <div className="About">
        <div className="AboutMain">
          <div className="AboutMainMe">
            <div className="AboutMainMe-left">
              <div className="AboutMainMe-left-name">
                <img src={LineSvg} alt="" />
                {" About "}
                <img src={LineSvg} alt="" />
              </div>
              <div className="AboutMainMe-left-speciality">
                Full stack developer
              </div>
              <div className="AboutMainMe-left-about">
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
              <div className="AboutMainMe-left-contact">
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
            <div className="AboutMainMe-right">
              <img src={Avatar} alt="" />
            </div>
          </div>
          <div className="AboutMainSkills">
            <div className="AboutMainSkills-name">
              <img src={LineSvg} alt="" />
              {"Skills"}
              <img src={LineSvg} alt="" />
            </div>
            <div className="AboutMainSkills-skill">
              <div className="AboutMainSkills-skill-name">FRONTEND</div>
              <div className="AboutMainSkills-skill-items">
                {firstskills.map((item) => (
                  <div className="AboutMainSkills-skill-item" key={item.key}>
                    {item.name}
                    <Rating slc={item.slc} uslc={item.uslc} />
                  </div>
                ))}
              </div>
            </div>
            <div className="AboutMainSkills-skill">
              <div className="AboutMainSkills-skill-name">MOBILE</div>
              <div className="AboutMainSkills-skill-items">
                {secondskills.map((item) => (
                  <div className="AboutMainSkills-skill-item" key={item.key}>
                    {item.name}
                    <Rating slc={item.slc} uslc={item.uslc} />
                  </div>
                ))}
              </div>
            </div>
            <div className="AboutMainSkills-skill">
              <div className="AboutMainSkills-skill-name">BACKEND</div>
              <div className="AboutMainSkills-skill-items">
                {thirdskills.map((item) => (
                  <div className="AboutMainSkills-skill-item" key={item.key}>
                    {item.name}
                    <Rating slc={item.slc} uslc={item.uslc} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="AboutMainComments">
            <div className="AboutMainComments-name">
              <img src={LineSvg} alt="" />
              {"Comments"}
              <img src={LineSvg} alt="" />
            </div>
            <div className="AboutMainComments-items">
              <div className="AboutMainComments-item"></div>
              <div className="AboutMainComments-item"></div>
              <div className="AboutMainComments-item"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
