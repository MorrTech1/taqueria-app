import { useEffect, useState } from "react";

import {
obtenerHistorial
}

from "../services/historialService";

function ResumenMensual(){

const [historial,setHistorial]=useState([]);

const [
mesSeleccionado,
setMesSeleccionado
]=useState("");

useEffect(()=>{

async function cargar(){

const datos=
await obtenerHistorial();

setHistorial(
datos
);

}

cargar();

},[]);

const meses=[

...new Set(

historial.map(

(corte)=>{

const fecha=

new Date(
corte.fecha+
"T12:00:00"
);

return fecha
.toLocaleDateString(
"es-MX",
{
month:"long",
year:"numeric"
}
);

}

)

)

];

const cortesFiltrados=

historial.filter(

(corte)=>{

const fecha=

new Date(
corte.fecha+
"T12:00:00"
);

const mes=

fecha
.toLocaleDateString(
"es-MX",
{
month:"long",
year:"numeric"
}
);

return mes===mesSeleccionado;

}

);

const ventas=

cortesFiltrados.reduce(

(total,corte)=>

total+

Number(
corte.ventaTotal||0
),

0

);

const gastos=

cortesFiltrados.reduce(

(total,corte)=>{

const gastosDia=

(corte.gastos||[])

.reduce(

(suma,gasto)=>

suma+

Number(
gasto.monto||0
),

0

);

const sueldos=

(corte.sueldos||[])

.reduce(

(suma,sueldo)=>

suma+

Number(
sueldo.monto||0
),

0

);

return total+
gastosDia+
sueldos;

},

0

);

const ganancia=
ventas-gastos;

return(

<div
style={{
padding:"20px"
}}
>

<h2>

📊 Resúmenes

</h2>

<select

value={
mesSeleccionado
}

onChange={(e)=>

setMesSeleccionado(
e.target.value
)

}

>

<option value="">

Selecciona mes

</option>

{

meses.map(

(mes)=>(

<option

key={mes}

value={mes}

>

{mes}

</option>

)

)

}

</select>

{

mesSeleccionado && (

<div

style={{

marginTop:"20px",

background:

document.body.classList.contains("dark")

?

"#181818"

:

"#fff",

color:

document.body.classList.contains("dark")

?

"white"

:

"black",

padding:"20px",

borderRadius:"12px",

boxShadow:
"0 2px 10px rgba(0,0,0,0.1)",

border:

document.body.classList.contains("dark")

?

"1px solid #333"

:

"1px solid #ddd"

}}

>

<h1>

📊 {mesSeleccionado}

</h1>

<h3>

💰 Ventas

${ventas}

</h3>

<h3>

💸 Gastos

${gastos}

</h3>

<h3>

📈 Ganancia

${ganancia}

</h3>

</div>

)

}

</div>

);

}

export default ResumenMensual;