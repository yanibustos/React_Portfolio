import React from 'react'
import {Link} from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>Hola, soy Yanina Bustos y estudio Licenciatura en Sistemas.
        Ofrezco mis servicios de programación y desarrollo en todo tipo de proyectos.
      </h1>

      <h2>Al momento de realizar este proyecto, culminaba mi primer semestre de carrera</h2>
      <Link to="/contacto">Contacta conmigo.</Link>

      <section className='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajados de desarrollo web</p>
      
      <div className='works'></div>


      
      </section>
    </div>
  )
}
