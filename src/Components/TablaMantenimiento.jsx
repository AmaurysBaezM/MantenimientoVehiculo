import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TablaMantenimiento() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Descripcion</th>
          <th>Costo</th>
          <th>Tipo</th>
          <th>Mecanico</th>
          <th>Estado</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1003</td>
          <td>Mantenimiento porque se daño el motor, aparte de....</td>
          <td>10000.00</td>
          <td>Emergencia</td>
          <td>Juan</td>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-button-dark-example1">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Completado</Dropdown.Item>
                <Dropdown.Item href="#/action-2">En curso</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cancelado</Dropdown.Item>
                <Dropdown.Item href="#/action-3">En espera</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </tr>
        <tr>
          <td>1004</td>
          <td>Se cayo en un hoyo </td>
          <td>600.00</td>
          <td>Rutinario</td>
          <td>Juan</td>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-button-dark-example1">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Completado</Dropdown.Item>
                <Dropdown.Item href="#/action-2">En curso</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cancelado</Dropdown.Item>
                <Dropdown.Item href="#/action-3">En espera</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </tr>
      </tbody>
    </Table>
  );
}

export default TablaMantenimiento;