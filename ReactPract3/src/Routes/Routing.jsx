
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from '../pages/Registro';
import  InicioSesion from '../pages/InicioSesion'
import Home from "../pages/Home";
import AdministracionT from '../pages/AdministracionT';
import Biblioteca from '../pages/Biblioteca';
import ProtectedRoute from '../Routes/ProtectedRoute'; 

const Routing = () => {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/InicioSesion' element={<InicioSesion />} />
            <Route path='/Registro' element={<Registro />} />
            <Route path='/AdministracionT' element={<ProtectedRoute><AdministracionT/></ProtectedRoute>} />
            <Route path='/Biblioteca' element={<ProtectedRoute><Biblioteca /></ProtectedRoute>} />
         </Routes>
      </Router>
    )
}

export default Routing;