import React from 'react'
import logo from '../img/header.jpg'
import '../styles/Header.css'

function Header() {
  return (
    <div>
      <div className='contenedorH'>
        <img className='Imagen' src={logo} alt="Biblioteca Blue Spirit" />
        <h1>BLUE SPIRIT</h1>
      </div>  
    </div>
  )
}

export default Header