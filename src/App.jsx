// import NavScrollExample from './Components/navbar';
import Login from './Components/login';
import Menu from './Components/menu';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import { Component } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import Mantenimiento from './Components/Mantenimiento';
import Mecanico from './Components/Mecanico';
import NavScrollExample from './Components/navbarC';
import TablaMantenimiento from './Components/TablaMantenimiento';
import FormularioVehiculo from './Components/FormularioVehiculo';
import TablaVehiculos from './Components/TablaVehiculos';
import Cliente from './Components/Cliente';


function App()  {
  return (
   <>
      <NavScrollExample/>
      <Routes>

         {/* <Route path='/' element={<Login/>} /> */}

         <Route path='/' element={<NavScrollExample/>} />

         <Route path='/Mantenimiento' element={<Mantenimiento/>} />

         <Route path='/Mecanico' element={<Mecanico/>} />

         <Route path='/Cliente' element={<Cliente/>} />

         <Route path='/FormularioVehiculo' element={<FormularioVehiculo/>} />

         <Route path='/TablaMantenimiento' element={<TablaMantenimiento/>} />

         <Route path='/TablaVehiculos' element={<TablaVehiculos/>} />

      </Routes>
      
   </>
  )
}

export default App;