import "../css/Dashboard.css";

function Sueldos({

nombre,
setNombre,

montoSueldo,
setMontoSueldo,

agregarSueldo,

sueldos,
eliminarSueldo

}) {

return (

<div className="seccion">

<hr />

<h2>
Sueldos
</h2>

<div className="fila">

<input

type="text"

placeholder="Nombre empleado"

value={nombre}

onChange={(e)=>
setNombre(
e.target.value
)}

className="input"

/>

<input

type="number"

placeholder="Monto"

value={montoSueldo}

onChange={(e)=>
setMontoSueldo(
e.target.value
)}

className="input"

/>

<button

onClick={agregarSueldo}

className="boton"

>

Agregar sueldo

</button>

</div>

<div className="lista">

{

sueldos.map(
(sueldo,index)=>(

<div

key={index}

className="item"

>

{sueldo.nombre}

-

${sueldo.monto}

<button

onClick={()=>
eliminarSueldo(
index
)
}

className="botonEliminar"

>

🗑️

</button>

</div>

))

}

</div>

<hr />

</div>

);

}

export default Sueldos;