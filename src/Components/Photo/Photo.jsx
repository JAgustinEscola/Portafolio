import React from 'react'
import Perfil from  '../../assets/Perfil.jpg';
import "./Photo.css"

const Photo = () => {
  return (
    <div className='DivPhoto'>
      <img  src={Perfil} alt="" className='CircularSmall' />
    </div>
  )
}

export default Photo
