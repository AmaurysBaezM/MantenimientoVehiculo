import React from "react";
import { useState, useEffect } from "react";
import "../App.css";


function Mantenimiento() {

  const [Vehiculo, setVehiculo] = useState([]);
  const [Mecanico, setMecanico] = useState([]);

  const [Descripcion, setDescripcion] = useState("");
  const [Costo, setCosto] = useState();
  const [TipoMantenimiento, setTipoMantenimiento] = useState();
  const [EleccionMecanico, setEleccionMecanico] = useState();
  const [EleccionVehiculo, setEleccionVehiculo] = useState();
  const Estado = 4;


  function MetodoGet() {
    fetch('https://localhost:7107/VehiculoAPI')
      .then(res => res.json())
      .then(veh => {
       
        setVehiculo(veh);

        setEleccionVehiculo(veh[0].idVehiculo)
      })

    fetch('https://localhost:7107/MecanicoAPI')
      .then(res => res.json())
      .then(data => {
      
        setMecanico(data);

        setEleccionMecanico(data[0].idMecanico)
        setTipoMantenimiento(1);
      })


  }

  useEffect(() => {
    MetodoGet();
   
    
  }, []);


  const handleDescripcion = (event) => {
    const Descripcion = event.target.value;

    setDescripcion(Descripcion);

  }

  const handleCosto = (event) => {
    const Costo = parseInt(event.target.value, 10);
  
    setCosto(Costo);

  }
  const handleTipo = (event) => {
    const Tipo =  parseInt(event.target.value, 10);
  
    setTipoMantenimiento(Tipo);

  }

  const handleEMecanico = (event) => {
    const EMecanico =  parseInt(event.target.value, 10);

    setEleccionMecanico(EMecanico);

  }

    const handleEVehiculo = (event) => {
    const EVehiculo =  parseInt(event.target.value, 10);

    setEleccionVehiculo(EVehiculo);


  }

  const submitUser= async (e)=>{
    e.preventDefault();

    const Mantenimiento = {Descripcion:Descripcion, Costo: Costo, Tipo: TipoMantenimiento, Mecanico: EleccionMecanico,Vehiculo: EleccionVehiculo, Estado: Estado};
  



    fetch("https://localhost:7107/MantenimientoAPI",{
       method: "POST",
       body: JSON.stringify(Mantenimiento),
       headers:{
        
'Accept': 'application/json',
'Content-Type': 'application/json',
'Access-Control-Allow-Headers': '*',

       }
    }).then(response=> response.json())
    .then(data => {
       
        if(data > 0)
            console.log("Citas de Mantenimiento creada Exitosamente")
    })
       
    
     }




  
  return (
    <section className="body">
      <div class="container">
        <div class="title">Mantenimiento</div>
        <form onSubmit={submitUser}>
          <div class="detalles">
            <div class="input-box">
              <span class="details">Mecanico</span>
              <select type="text" class="form-control" onChange={(e) => handleEMecanico(e)}>

                {
                  Mecanico.map(meca => <option value={meca.idMecanico}>{meca.mecanicoNombre}</option>)
                }
              </select>
            </div>
            <div class="input-box">
              <span class="details">Vehiculo</span>
              <select type="text" class="form-control"  onChange={(e) => handleEVehiculo(e)}>

                {
                  Vehiculo.map(post => <option value={post.idVehiculo}>{post.modelo}</option>)
                }
              </select>
            </div>

            <div class="input-box">
              <span class="details">Tipo de Mantenimiento</span>
              <select type="text" class="form-control" onChange={(e) => handleTipo(e)}>

                <option value={1}>General</option>
                <option value={2}>Rutinario</option>
                <option value={3}>Emergencia</option>
              </select>
            </div>

            <div class="input-box">
              <span class="details">Costo</span>
              <input
                type="text"
                placeholder="Introduce un precio"
                required  onChange={(e) => handleCosto(e)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
            </div>

            <div class="input-box">
              <span class="details">Descripcion</span>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                required onChange={(e) => handleDescripcion(e)} ></textarea>
            </div>

            <div class="button">
              <input type="submit" value="Registrar"></input>
            </div>
          </div>
        </form>
      </div>
    </section>



  );
}

export default Mantenimiento;
