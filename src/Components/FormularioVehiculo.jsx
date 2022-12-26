import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function FormularioVehiculo() {
  return (
   <Card style={{width: '25rem', height: '51.8rem', paddingTop: '1rem' , marginLeft:'53px', paddingLeft:'1rem', paddingRight:'1rem', backgroundColor:'teal'}}>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="Text" placeholder="Tipo" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Marca</Form.Label>
                <Form.Control type="Text" placeholder="Marca" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="Text" placeholder="Modelo" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Año</Form.Label>
                <Form.Control type="Text" placeholder="Año" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Color</Form.Label>
                <Form.Control type="Text" placeholder="Color" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Chasis</Form.Label>
                <Form.Control type="Text" placeholder="Chasis" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Matricula</Form.Label>
                <Form.Control type="Text" placeholder="Matricula" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" placeholder="Descripcion" />
            </Form.Group>
        
            <Form.Group className='mb-3' controlId="exampleForm.ControlTextarea1">
                <Form.Select aria-label="Default select example">
                    <option>Dueño</option>
                    <option value="1">Braulio</option>
                    <option value="2">Manuel</option>
                    <option value="3">Jocias</option>
                </Form.Select>
            </Form.Group>
        
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
   </Card>
  );
}

export default FormularioVehiculo;