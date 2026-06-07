import HistorialCard from "./HistorialCard";

function Historial({

historial,

corteSeleccionado,

setCorteSeleccionado

}) {

return (

<>

<h2
style={{
marginTop:"30px",
marginBottom:"15px"
}}
>

Historial

</h2>

{

historial.map(
(corte,index)=>(

<HistorialCard

key={index}

corte={corte}

corteSeleccionado={
corteSeleccionado
}

setCorteSeleccionado={
setCorteSeleccionado
}

/>

))

}

</>

);

}

export default Historial;