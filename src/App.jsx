
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

function App()  {
  return (
   <>

     
      {/* <Login/>


      <NavScrollExample/> */}

      
      <Routes>
         <Route path='/' element={<Login/>} />
         {/* <Route path='/Home' element={<NavScrollExample/>} />
         <Route path='/FormularioVehiculo' element={<FormularioVehiculo/>} />
         <Route path='/TablaMantenimiento' element={<TablaMantenimiento/>} />
         <Route path='/TablaVehiculos' element={<TablaVehiculos/>} /> */}
      </Routes> 
      
   </>
  )
}

export default App;
 