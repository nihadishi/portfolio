import React from "react";
import Header from "../../components/header/Header";
import LineSvg from "../../assets/imgs/line.svg";
import "./style.scss";
const CVPage = () => {
  return (
    <>
      <Header />
      <div className="CV">
        <div className="CVMain">
          <div className="CVMain-name">
            <img src={LineSvg} alt="" />
            {" Resume "}
            <img src={LineSvg} alt="" />
          </div>
          <div className="CVMain-CV">
          <div className="CVMain-CV-Resume"></div>
          <div className="CVMain-CV-Education"></div>
          <div className="CVMain-CV-Experience"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVPage;
