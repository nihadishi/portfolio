import React from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='Navbar'>
        <ul>
            <li onClick={()=>{navigate("/")}}>Home</li>
            <li onClick={()=>{navigate("/about")}}>About</li>
            <li onClick={()=>{navigate("/cv")}}>Curriculum Vitae</li>
            <li onClick={()=>{navigate("/portfolio")}}>Portfolio</li>
            <li onClick={()=>{navigate("/contact")}}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar