import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { useState} from "react";


function Cliente() {

    const [ClienteNombre, setClienteNombre] = useState('');
    const [ClienteApellido, setClienteApellido] = useState('');
    const [ClienteCedula, setClienteCedula] = useState('');
    const [ClienteTelefono, setClienteTelefono] = useState('');

    const handleClienteNombre = (event) => {
        const Cliente_Nombre = event.target.value;
       
        setClienteNombre(Cliente_Nombre);

    }
    const handleClienteApellido = (event) => {
        const Cliente_Apellido = event.target.value;
        
        setClienteApellido( Cliente_Apellido);

    }
    const handleClienteCedula = (event) => {
        const Cliente_Cedula = event.target.value;
   
        setClienteCedula(Cliente_Cedula);

    }
    const handleClienteTelefono = (event) => {
        const Cliente_Telefono = event.target.value;
        
        setClienteTelefono(  Cliente_Telefono);

    }



 const submitUser= async (e)=>{
    e.preventDefault();
    const Cliente = {ClienteNombre:ClienteNombre, ClienteApellido: ClienteApellido, ClienteCedula: ClienteCedula, Cliente_Telefono: ClienteTelefono};
   console.log(Cliente);
    fetch("https://localhost:7107/ClienteAPI",{
       method: "POST",
       body: JSON.stringify(Cliente),
       headers:{
        
'Accept': 'application/json',
'Content-Type': 'application/json',
'Access-Control-Allow-Headers': '*',

       }
    }).then(response=> response.json())
    .then(data => {
       
        if(data > 0)
            console.log("Cliente creado Exitosamente")
    })
       
    
     }



    return (
     
        <Card style={{ marginLeft: '12rem', marginRight: '12rem', marginTop: '5rem' }}>
               <h1>Cliente</h1>
            <Form onSubmit={submitUser} style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem' }} >
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Nombre" required onChange={(e) => handleClienteNombre(e)} />


                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control placeholder="Apellido" required onChange={(e) => handleClienteApellido(e)}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" >
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control placeholder="xxx-xxxxxxx-x" required onChange={(e) => handleClienteCedula(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control placeholder="xxx-xxx-xxxx" required onChange={(e) => handleClienteTelefono(e)}/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );

};


export default Cliente