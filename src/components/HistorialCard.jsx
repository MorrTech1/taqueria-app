import {
actualizarCorte
}
from
"../services/historialService";

function HistorialCard({
  corte,
  corteSeleccionado,
  setCorteSeleccionado,
  setHistorial,
  historial
}) {

const abierto =
corteSeleccionado === corte;

return (

<div
onClick={()=>
setCorteSeleccionado(
abierto
? null
: corte
)
}

style={{
border:"1px solid #ddd",
borderRadius:"12px",
padding:"15px",
marginBottom:"12px",
cursor:"pointer"
}}
>

<h3>


📅 {
  
  (() => {
    
    const fecha =
    new Date(
      corte.fecha +
      "T12:00:00"
    );
    
    const dia =
    fecha.toLocaleDateString(
      "es-MX",
      {
        weekday:"long"
      }
    );
    
    return `${dia} ${corte.fecha}`;
    
  })()
  
}
  </h3>



<h3>

💰 ${corte.ventaTotal}
</h3>


<p>

📦 Inversión:
$

{

corte.inversion||0

}

</p>

<button

onClick={async(e)=>{

e.stopPropagation();

const nueva=

prompt(

"Inversión para mañana",

corte.inversion||0

);

if(
nueva===null
)

return;

await actualizarCorte(

corte.id,

{

inversion:

Number(
nueva
)

}

);

setHistorial(

historial.map(

(item)=>

item.id===corte.id

?

{

...item,

inversion:

Number(
nueva
)

}

:

item

)

);

}}

>

✏️ Agregar inversión

</button>

{abierto && (

<div>

<hr />

<h4>Gastos 💸</h4>

{corte.gastos.map(
(gasto,index)=>(
<div key={index}>
{gasto.concepto}
-
${gasto.monto}
</div>
))}

<h4>Sueldos 🧑‍🍳:</h4>

{corte.sueldos.map(
(sueldo,index)=>(
<div key={index}>
{sueldo.nombre}
-
${sueldo.monto}
</div>
))}

<h4>
Efectivo:
${corte.efectivo} 💵
</h4>
<h4>
Monedas:
${corte.monedas} 🪙
</h4>
<h4>
Transferencia:
${corte.transferencia} 💳
</h4>

</div>

)}

</div>

);

}

export default HistorialCard;