import React from 'react'
import Header from '../../Components/Header/Header'
import Feet from '../../Components/Feet/Feet'
import Home from '../Home/Home'
import Photo from '../../Components/Photo/Photo'
import "./Landing.css"

const Landing = () => {
  return (
    <div className='Landing'>
        <div>
            <Header/>    
        </div>
        <div>
            <Home/>
        </div>
        <div>
          <h1>Juan Agustin Escola</h1>
          <hr className='lineaSeparadora' />
          <p>Full Stack Developer</p>
        </div>
        <div>
          <Photo/>
        </div>
        <div className='Description'>
          <p>Soy un Programador full stack developer con facilidad para back-end  </p>
          <button>CONTRATAME</button>
          <button>CURRICULUM</button>
        </div>
        <div>
          PORTAFOLIO
        </div>
        <div className='FeetBottom'>
            <Feet/>
        </div>  

    </div>
  )
}

export default Landing
