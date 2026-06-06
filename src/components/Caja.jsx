import "../css/Dashboard.css";

import ResumenCard
from "./ResumenCard";

function Caja({

efectivo,
setEfectivo,

transferencia,
setTransferencia,

totalGastos,

totalSueldos,

ventaTotal,

cerrarDia

}) {

return (

<div className="seccion">

<hr />

<h2>
Caja
</h2>

<div className="fila">

<input

type="number"

placeholder="Efectivo"

value={efectivo}

onChange={(e)=>
setEfectivo(
e.target.value
)}

className="input"

/>

<input

type="number"

placeholder="Transferencia"

value={transferencia}

onChange={(e)=>
setTransferencia(
e.target.value
)}

className="input"

/>

</div>

<div
style={{
marginTop:"20px"
}}
>

<div className="fila">

<ResumenCard

emoji="💸"

titulo="Gastos"

valor={totalGastos}

/>

<ResumenCard

emoji="🧑‍🍳"

titulo="Sueldos"

valor={totalSueldos}

/>

<ResumenCard

emoji="💵"

titulo="Efectivo"

valor={efectivo||0}

/>

<ResumenCard

emoji="💳"

titulo="Transferencia"

valor={transferencia||0}

/>

</div>

</div>

<h2>

Venta total:

${ventaTotal}

</h2>

<button

onClick={cerrarDia}

className="botonCerrar"

>

Cerrar día

</button>

<hr />

</div>

);

}

export default Caja;