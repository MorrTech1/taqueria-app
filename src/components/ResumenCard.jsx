import "../css/Dashboard.css";

function ResumenCard({

emoji,

titulo,

valor

}) {

return (

<div className="tarjeta">

<h3>

{emoji}

{" "}

{titulo}

</h3>

<p>

${valor}

</p>

</div>

);

}

export default ResumenCard;