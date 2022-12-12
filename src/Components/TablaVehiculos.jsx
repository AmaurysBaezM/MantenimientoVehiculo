import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function TablaVehiculos() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año</th>
          <th>Color</th>
          <th>Chasis</th>
          <th>Matriucla</th>
          <th>Descripcion</th>
          <th>Dueño</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Camion</td>
          <td>Daihatsu</td>
          <td>Delta</td>
          <td>2000</td>
          <td>Azul</td>
          <td>Autoportante</td>
          <td>5693 NAH</td>
          <td>Camion Daihatsu Delta color Azul y calcomanias rojas</td>
          <td>Braulio</td>
          <td><Button variant="light">Ver</Button>{' '}</td>
          <td><Button variant="warning">Modificar</Button>{' '}</td>
          <td><Button variant="danger">Eliminar</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablaVehiculos;