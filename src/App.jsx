
// import NavScrollExample from './Components/navbar';
import Login from './Components/login';
import Menu from './Components/menu';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Mantenimiento from './Components/Mantenimiento';
import Mecanico from './Components/Mecanico';
import NavScrollExample from './Components/navbarC';


function App()  {
  return (
   <>
{/* <Mecanico></Mecanico> */}
<NavScrollExample/>
{/* ---------------------- */}
   {/* <NavScrollExample/> */}
   {/* <Login/> */}
   {/* <Routes> */}
      {/* <Route path='/' element={ <Login/>} /> */}
      {/* <Route path='/Home' element={<NavScrollExample/>} /> */}
   {/* </Routes> */}
   
   </>
  )
}

export default App;
 