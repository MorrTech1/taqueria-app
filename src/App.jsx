import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import ResumenMensual from "./components/ResumenMensual";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import login from "./auth/login";

function App() {

  const [pantalla, setPantalla] = useState("dashboard");
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      setUsuario(user);

      setCargando(false);

    });

    return () => unsubscribe();

  }, []);

  if (cargando) {

    return <h2>Cargando...</h2>;

  }

  if (!usuario) {

    return <Login onLogin={() => {}} />;

  }

  return (
    <div>

      <Header
        pantalla={pantalla}
        setPantalla={setPantalla}
      />

      {
        pantalla === "dashboard" &&
        <Dashboard />
      }

      {
        pantalla === "resumen" &&
        <ResumenMensual />
      }

    </div>
  );

}

export default App;