import React from 'react'
import {Link} from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy <strong>Yanina Bustos</strong> y estudio Licenciatura en Sistemas.
        Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyectos.
      </h1>

      <h2 className='title'>Al momento de realizar este proyecto, 
        culminaba mi primer semestre de carrera. <Link to="/contacto">Contacta conmigo.</Link></h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajados de desarrollo web</p>
      
        <ListadoTrabajos limite="2"/>
      
      </section>
    </div>
  )
}
