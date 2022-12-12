import React from "react";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";



export default function MenuPrincipal(){
    return (
     <>
      <Card style={{width:'13rem',paddingBottom:'39.2rem', backgroundColor:'white', borderRadius:'0rem'}}>
        <img src="https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2015/01/0010_logo_design.jpg" style={{height:'130px'}}/>
            <Button style={{borderRadius:'0rem',textAlign:'left', marginTop:'1px', paddingLeft:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16" >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
            </svg>
                Inicio</Button>
            <Button style={{borderRadius:'0rem',textAlign:'left', marginTop:'0.2rem', paddingLeft:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
            </svg>Talleres y almacen</Button>
            <Button style={{borderRadius:'0rem',textAlign:'left',marginTop:'0.2rem', paddingLeft:'5px'}}>Gestionar Maquinaria</Button>
            <Button style={{borderRadius:'0rem',textAlign:'left',marginTop:'0.2rem', paddingLeft:'5px'}}>Reportes</Button>
      </Card>
    </>
);
}