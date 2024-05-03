import React from 'react'
import "./Feet.css"
import Linkedin from "../../assets/Linkedin.png"
import LogoJe from "../../assets/LogoJEGray.png"

const Feet = () => {
  return (
    <div className='DivFeet'>
      <div className='LogoJE'>
        <img src={LogoJe} alt="" />
      </div>
      <div>numero, gmail</div>
      <div className='LogoSocial'>
        <img src={Linkedin} alt="" />
      </div>
    </div>
  )
}

export default Feet
