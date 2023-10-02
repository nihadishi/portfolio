import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate, useParams } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const [pathname, setpathname] = useState("")
  useEffect(() => {
     setpathname(window.location.pathname) ;
  }, [pathname])
  console.log(pathname);
  return (
    <div className='Navbar'>
        <ul>
        <li className={pathname === '/' ? 'active' : ''} onClick={() => { navigate("/") }}>Home</li>
        <li className={pathname === '/about' ? 'active' : ''} onClick={() => { navigate("/about") }}>About</li>
        <li className={pathname === '/cv' ? 'active' : ''} onClick={() => { navigate("/cv") }}>CV</li>
        <li className={pathname === '/portfolio' ? 'active' : ''} onClick={() => { navigate("/portfolio") }}>Portfolio</li>
        <li className={pathname === '/contact' ? 'active' : ''} onClick={() => { navigate("/contact") }}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar