import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Cliente(){
    return (
       <Card style={{marginLeft:'12rem' , marginRight:'12rem' , marginTop: '5rem'}}>
                <Form style={{paddingLeft:'1.5rem' , paddingRight:'1.5rem' , paddingTop: '1.5rem' , paddingBottom:'1rem'}} >
                <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control  placeholder="Nombre" />
                </Form.Group>
        
                <Form.Group as={Col} >
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control placeholder="Apellido" />
                </Form.Group>
                </Row>
        
                <Form.Group className="mb-3" >
                <Form.Label>Cedula</Form.Label>
                <Form.Control placeholder="xxx-xxxxxxx-x" />
                </Form.Group>
        
                <Form.Group className="mb-3" >
                <Form.Label>Telefono</Form.Label>
                <Form.Control placeholder="xxx-xxx" />
                </Form.Group>
        
        
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
       </Card>
    );

};  


export default Cliente