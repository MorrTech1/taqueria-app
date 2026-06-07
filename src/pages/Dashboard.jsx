import { useState, useEffect } from "react";
import header from "../components/Header";
import HistorialCard from "../components/HistorialCard";
import ResumenCard from "../components/ResumenCard";
import Gastos from "../components/Gastos";
import Sueldos from "../components/Sueldos";
import Caja from "../components/Caja";
import Historial from "../components/HistorialTEMP";
import DashboardLayout from "../components/DashboardLayout";
import "../css/Dashboard.css";

function Dashboard() {
  // GASTOS
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");
  const [gastoEditando, setGastoEditando] = useState(null);
  const [gastos, setGastos] = useState(() => {
    const datos = localStorage.getItem("gastos");
    return datos ? JSON.parse(datos) : [];
  });

  // SUELDOS
  const [nombreEmpleado, setNombreEmpleado] = useState("");
  const [montoSueldo, setMontoSueldo] = useState("");
  const [sueldos, setSueldos] = useState(() => {
    const datos = localStorage.getItem("sueldos");
    return datos ? JSON.parse(datos) : [];
  });

  // CAJA
  const [efectivo, setEfectivo] = useState(() => {
    return localStorage.getItem("efectivo") || "";
  });

  const [transferencia, setTransferencia] = useState(() => {
    return localStorage.getItem("transferencia") || "";
  });

  // HISTORIAL
  const [historial, setHistorial] = useState(() => {
    const datos = localStorage.getItem("historial");
    return datos ? JSON.parse(datos) : [];
  });

  const [corteSeleccionado, setCorteSeleccionado] = useState(null);

  // GUARDAR EN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  useEffect(() => {
    localStorage.setItem("sueldos", JSON.stringify(sueldos));
  }, [sueldos]);

  useEffect(() => {
    localStorage.setItem("efectivo", efectivo);
  }, [efectivo]);

  useEffect(() => {
    localStorage.setItem("transferencia", transferencia);
  }, [transferencia]);

  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial));
  }, [historial]);

  function agregarGasto() {
    if (!concepto || !monto) return;

    const nuevoGasto = {
      concepto,
      monto
    };

    setGastos([
      ...gastos,
      nuevoGasto
    ]);

    setConcepto("");
    setMonto("");
  }
   
  function eliminarGasto(indexEliminar) {

    const nuevosGastos = gastos.filter((_, index) => index !== indexEliminar);
    setGastos(nuevosGastos);
  }
  function agregarSueldo() {
    if (!nombreEmpleado || !montoSueldo) return;

    const nuevoSueldo = {
      nombre: nombreEmpleado,
      monto: montoSueldo
    };

    setSueldos([
      ...sueldos,
      nuevoSueldo
    ]);

    setNombreEmpleado("");
    setMontoSueldo("");
  }

  function eliminarSueldo(indexEliminar) {

    const nuevosSueldos = sueldos.filter((_, index) => index !== indexEliminar);
    setSueldos(nuevosSueldos);
  }

  const totalGastos = gastos.reduce(
    (acc, gasto) => acc + Number(gasto.monto),
    0
  );

  const totalSueldos = sueldos.reduce(
    (acc, sueldo) => acc + Number(sueldo.monto),
    0
  );

  const ventaTotal =
    totalGastos +
    totalSueldos +
    Number(efectivo || 0) +
    Number(transferencia || 0);

  function cerrarDia() {

    const confirmar = window.confirm(
      "¿Seguro que quieres cerrar el dia? "
    );

    if (!confirmar) return;
    const fecha = new Date()
      .toISOString()
      .split("T")[0];

    const nuevoCorte = {
      fecha,
      gastos,
      sueldos,
      efectivo,
      transferencia,
      ventaTotal
    };

    setHistorial([
      ...historial,
      nuevoCorte
    ]);

    setGastos([]);
    setSueldos([]);
    setEfectivo("");
    setTransferencia("");

    alert(
"Día guardado"
)
  }

  return ( <DashboardLayout>
    <div style={{ 
      maxWidth: "600px",
      margin: "0 auto",
      padding: "50px",
      fontFamily: "Arial, sans-serif" 
      }}>
      

      <hr />

     <Gastos

concepto={concepto}
setConcepto={setConcepto}

monto={monto}
setMonto={setMonto}

agregarGasto={agregarGasto}

gastos={gastos}

eliminarGasto={
eliminarGasto
}

/>
      <hr />

      <Sueldos

nombre={nombreEmpleado}

setNombre={setNombreEmpleado}

montoSueldo={montoSueldo}

setMontoSueldo={
setMontoSueldo
}

agregarSueldo={
agregarSueldo
}

sueldos={
sueldos
}

eliminarSueldo={
eliminarSueldo
}

/>

      <hr />

      <Caja

efectivo={efectivo}

setEfectivo={
setEfectivo
}

transferencia={
transferencia
}

setTransferencia={
setTransferencia
}

totalGastos={
totalGastos
}

totalSueldos={
totalSueldos
}

ventaTotal={
ventaTotal
}

cerrarDia={
cerrarDia
}

/>

      <hr />

     <Historial

historial={
historial
}

corteSeleccionado={
corteSeleccionado
}

setCorteSeleccionado={
setCorteSeleccionado
}

/>

    </div>
  </DashboardLayout>
  );
}

export default Dashboard;