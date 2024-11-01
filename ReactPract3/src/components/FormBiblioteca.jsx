import React from 'react'
import '../styles/FormBiblioteca.css'
import libro1 from '../img/descarga (1).jpg'
import libro2 from '../img/descarga (2).jpg'
import libro3 from '../img/descarga (3).jpg'
import libro4 from '../img/descarga (4).jpg'
import libro5 from '../img/descarga (5).jpg'
import libro6 from '../img/descarga (6).jpg'
import libro7 from '../img/descarga.jpg'
import libro8 from '../img/images (1).jpg'
import libro9 from '../img/images (2).jpg'
import libro10 from '../img/images (3).jpg'
import libro11 from '../img/images (4).jpg'
import libro12 from '../img/images (5).jpg'
import libro13 from '../img/images (6).jpg'
import libro14 from '../img/images (7).jpg'
import libro15 from '../img/images.jpg'

function FormBiblioteca() {
  return (
    <div>
      <div className='ContenedorB'>
        <img src= {libro1} alt="HASTA QUE EL VERANO SE ACABE" />
        <img src= {libro2} alt="HARRY POTTER Y LA PIEDRA FILOSOFAL" />
        <img src= {libro3} alt="BOULEVARD" />
        <img src= {libro4} alt="DAMIAN" />
        <img src= {libro5} alt="PERFECTOS MENTIROSOS" />
        <img src= {libro6} alt="STRANGE" />
        <img src= {libro7} alt="REYES CAIDOS" />
        <img src= {libro8} alt="A TRAVES DE MI VENTANA" />
        <img src= {libro9} alt="ENTRE AMIGOS" />
        <img src= {libro10} alt="EL QUINTO INFIERNO" />
        <img src= {libro11} alt="FLEUR" />
        <img src= {libro12} alt="MI AMOR DE WATTPAD" />
        <img className='imagLibro' src= {libro13} alt="CULPA NUESTRA" />
        <img src= {libro14} alt="HEIST" />
        <img src= {libro15} alt="LOS JUICIOS DE SALEM" />
      </div> 
    </div>
  )
}

export default FormBiblioteca