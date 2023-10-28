import React from 'react'
import Header from '../../components/header/Header'
import LineSvg from "../../assets/imgs/line.svg";
import "./style.scss"
const PortfolioPage = () => {
  return (
    <><Header/>
     <div className="Portfolio">
        <div className="PortfolioMain">
          <div className="PortfolioMain-name">
            <img src={LineSvg} alt="" />
            {" Portfolio "}
            <img src={LineSvg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioPage