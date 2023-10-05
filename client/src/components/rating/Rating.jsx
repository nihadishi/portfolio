import React from 'react'
import  {ReactComponent as StartS} from "./img/start-s.svg";
import  {ReactComponent as StartUS} from "./img/start-us.svg";
const Rating = ({ slc, uslc }) => {
    const stars = [];
    
    for (let index = 0; index < slc; index++) {
      stars.push(<StartS key={index} />);
    }
    
    for (let index = 0; index < uslc; index++) {
      stars.push(<StartUS key={index + slc} />);
    }
  
    return <div className="rating">{stars}</div>;
  };
  
  export default Rating;