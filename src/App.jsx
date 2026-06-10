import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import {useState} from "react";
import ResumenMensual from "./components/ResumenMensual";

function App() {
  const [pantalla, setPantalla] = useState("dashboard");
  return (
    <div>
      <Header

pantalla={pantalla}

setPantalla={setPantalla}

/>
      {

pantalla==="dashboard"

&&

<Dashboard/>

}

{

pantalla==="resumen"

&&

<ResumenMensual/>

}
    </div>
  );
}

export default App;