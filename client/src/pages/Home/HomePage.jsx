import React, { useEffect, useState } from "react";
import "./style.scss";
import AvatarImg from "./img/avatar.png";
import Navbar from "../../components/navbar/Navbar";
import Social from "../../components/social/Social";
const HomePage = () => {
  const [nameText, setNameText] = useState("");
  const fullName = "ihad Maharramov"; 
  const delayBetweenLetters = 300; 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setNameText(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delayBetweenLetters);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="main">
      <div className="roundedbg"></div>
      <div className="container">
        <div className="image">
          <img src={AvatarImg} alt="Me" />
        </div>
        <div className="texts">
          <div className="name">N{nameText}</div>
          <div className="speciality">Full-stack developer</div>
          <div className="about">Salam</div>
          <div className="navbar"><Navbar/></div>
          <div className="social"><Social/></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
