import "../css/Dashboard.css";

function Gastos({

concepto,
setConcepto,

monto,
setMonto,

agregarGasto,

gastos,
eliminarGasto

}) {

return (

<div className="seccion">

<hr />

<h2>

Gastos

</h2>

<div className="fila">

<input

type="text"

placeholder="Concepto"

value={concepto}

onChange={(e)=>
setConcepto(
e.target.value
)}

className="input"

/>

<input

type="number"

placeholder="Monto"

value={monto}

onChange={(e)=>
setMonto(
e.target.value
)}

className="input"

/>

<button

onClick={agregarGasto}

className="boton"

>

Agregar gasto

</button>

</div>

<div className="lista">

{

gastos.map(
(gasto,index)=>(

<div

key={index}

className="item"

>

{gasto.concepto}

-

${gasto.monto}

<button

onClick={()=>
eliminarGasto(
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

export default Gastos;