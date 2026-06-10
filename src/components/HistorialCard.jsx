function HistorialCard({
  corte,
  corteSeleccionado,
  setCorteSeleccionado
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

<p>

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

</p>

<p>
💰 ${corte.ventaTotal}
</p>

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