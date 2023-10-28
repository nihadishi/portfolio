import React from 'react'
import Header from '../../components/header/Header'
import LineSvg from "../../assets/imgs/line.svg";
import "./style.scss"
const ContactPage = () => {
  return (
    <><Header/>
     <div className="Contact">
        <div className="ContactMain">
          <div className="ContactMain-name">
            <img src={LineSvg} alt="" />
            {" Contact "}
            <img src={LineSvg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage