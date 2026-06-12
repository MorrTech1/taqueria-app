import { useState, useEffect } from "react";
import ResumenMensual from "./ResumenMensual";

function Header({ pantalla, setPantalla }) {
const [menuAbierto, setMenuAbierto] = useState(false);
useEffect(()=>{

const modo=

localStorage.getItem(
"modoOscuro"
);

if(
modo==="true"
){

document.body.classList.add(
"dark"
);

}

},[]);

const [mostrarResumen, setMostrarResumen] = useState(false);

return (

<div

style={{

top: 0,

background: "inherit",

zIndex: 10,

padding: "20px",

display: "flex",

alignItems: "center",

gap: "10px",

marginBottom: "30px",

justifyContent: "space-between",

width: "100%",

borderBottom: "1px solid #ddd",

position: "relative"

}}

>

{/* BOTÓN MENÚ */}

<button

className="botonMenu"

onClick={() => {

setMenuAbierto(!menuAbierto);

}}

style={{

fontSize: "24px",

border: "none",

background: "transparent",

cursor: "pointer"

}}

>

☰

</button>



{/* LOGO */}

<img

src="/logo.png"

alt="Logo"

style={{

width: "60px",

height: "60px",

borderRadius: "50%",

objectFit: "cover"

}}

/>



{/* TÍTULO */}

<h1

style={{

margin: 0,

fontSize: "24px"

}}

>

Taquería Los Güeros

</h1>

{

pantalla==="resumen"

&&(

<button

style ={{

padding: "8px 16px",  
borderRadius: "8px",
border: "none",
background: "#0004ee",
color: "white",
cursor: "pointer"}}

onClick={()=>setPantalla("dashboard")}

>

← Inicio

</button>

)

}



{/* MENÚ */}

{

menuAbierto && (

<div

style={{

position: "absolute",

top: "90px",

left: "20px",

background: "#fff",

padding: "12px",

borderRadius: "10px",

boxShadow:

"0 2px 10px rgba(0,0,0,.2)",

display: "flex",

flexDirection: "column",

gap: "10px",

zIndex: 100,

minWidth: "180px"

}}

>

<button

onClick={() => {

alert("Historial próximamente");

}}

>

📅 Historial

</button>



<button

onClick={() => {

alert("Editar corte próximamente");

}}

>

✏️ Editar corte

</button>



<button

onClick={()=>{

setPantalla("resumen");

setMenuAbierto(false);

}}

>

📊 Resúmenes

</button>



<button

onClick={() => {

const activo=

document.body.classList.toggle(

"dark"

);

localStorage.setItem("modoOscuro",
    activo);

}}

>

🌙 Tema

</button>

</div>

)

}



{/* BOTÓN TEMA */}

<button

style={{

fontSize: "24px",

background: "white",

borderRadius: "50%",

cursor: "pointer"

}}

onClick={() => {

const activo=

document.body.classList.toggle(

"dark"

);

localStorage.setItem("modoOscuro",
    activo);

}}

>

🌙

</button>

{

mostrarResumen && (

<div

style={{

marginTop:"20px"

}}

>

<ResumenMensual/>

</div>

)

}

</div>



);

}

export default Header;