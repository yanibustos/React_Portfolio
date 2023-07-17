import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/*Header & Nav*/}
      <HeaderNav />
      {/*Main Content*/}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/portafolio' element={<Portafolio />}></Route>
          <Route path='/servicios' element={<Servicios />}></Route>
          <Route path='/curriculum' element={<Curriculum />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
        </Routes>
      </section>

      {/*Footer*/}
      <Footer />
    </BrowserRouter>
  )
}
