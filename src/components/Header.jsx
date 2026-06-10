import { useState } from "react";

function Header() {
const [menuAbierto, setMenuAbierto] = useState(false);

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

onClick={() => {

alert("Eliminar corte próximamente");

}}

>

🗑️ Eliminar corte

</button>



<button

onClick={() => {

document.body.classList.toggle(

"dark"

);

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

document.body.classList.toggle(

"dark"

);

}}

>

🌙

</button>

</div>

);

}

export default Header;