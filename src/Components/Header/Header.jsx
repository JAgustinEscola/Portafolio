import React from 'react'
import "./Header.css"
import LogoJE from "../../assets/LogoJE.jpg"

const Header = () => {
  return (
    <div className='DivHeader'>
        <div className='Logo'>
            <img src={LogoJE} alt=""/>
        </div>
        <div className='Button'>
            <button><h2>INICIO</h2></button>
            
            <button><h2>ACERCA DE MI</h2></button>

            <button><h2>PORTAFOLIO</h2></button>

            <button><h2>SERVICIOS</h2></button>

            <button><h2>CONTACTAME</h2></button>
        </div>
    </div>
  )
}

export default Header
