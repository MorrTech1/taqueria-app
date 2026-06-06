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

<h3>
📅 {corte.fecha}
</h3>

<p>
💰 ${corte.ventaTotal}
</p>

{abierto && (

<div>

<hr />

<h4>Gastos</h4>

{corte.gastos.map(
(gasto,index)=>(
<div key={index}>
{gasto.concepto}
-
${gasto.monto}
</div>
))}

<h4>Sueldos</h4>

{corte.sueldos.map(
(sueldo,index)=>(
<div key={index}>
{sueldo.nombre}
-
${sueldo.monto}
</div>
))}

<p>
Efectivo:
${corte.efectivo}
</p>

<p>
Transferencia:
${corte.transferencia}
</p>

</div>

)}

</div>

);

}

export default HistorialCard;