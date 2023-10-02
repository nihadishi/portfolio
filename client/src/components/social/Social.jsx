import React from 'react'
import "./style.scss"
import linkedin from "./img/linkedin.svg";
import whatsapp from "./img/whatsapp.svg";
import facebook from "./img/facebook.svg";
import github from "./img/github.svg";
const Social = () => {
  return (
    <div className='SocialNetworks'>
       <a href='https://www.linkedin.com/in/nihadishi' target='blank' className="SocialNetworksImg"> <img src={linkedin} alt="" /></a>
       <a href='https://wa.me/+994776373838' target='blank' className="SocialNetworksImg"> <img src={whatsapp} alt="" /></a>
       <a href='https://www.facebook.com/nihadishi' target='blank' className="SocialNetworksImg"> <img src={facebook} alt="" /></a>
       <a href='https://www.github.com/nihadishi' target='blank' className="SocialNetworksImg"> <img src={github} alt="" /></a>
    </div>
  )
}

export default Social