import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./style.scss"
import Loading from '../loading/Loading'
const Header = () => {
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setloading(true);
        }, 300);
        setloading(false)
    }, [])
    
  return (
    loading?<div className='header'>
    <div className="headerText">Nihad Maharramov</div>
    <Navbar/>
</div>:<Loading/>
  )
}

export default Header