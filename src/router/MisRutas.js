import React from 'react';
import {Routes,Route,BrowserRouter,NavLink} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/*Header & Nav*/}

        {/*Main Content*/}

        <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/portafolio' element={<Portafolio/>}></Route>
            <Route path='/servicios' element={<Servicios/>}></Route>
            <Route path='/curriculum' element={<Curriculum/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>

        {/*Footer*/}
    </BrowserRouter>
  )
}
