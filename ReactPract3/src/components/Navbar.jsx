import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


function Navbar() {
  return (
    <div>
      <div className='navegar'>
      <Link to = "/InicioSesion" className="link">Inicio Sesion</Link>
      <Link to = "/" className="link">Home</Link>
      <Link to = "/Biblioteca" className="link">Biblioteca</Link>
      <Link to = "/AdministracionT" className="link">Tareas</Link>
      </div>
    </div>
  )
}

export default Navbar