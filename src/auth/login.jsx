import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Login({ onLogin }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, correo, password);
      onLogin();
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>

      <form
        onSubmit={iniciarSesion}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,.15)",
          width: "320px"
        }}
      >

        <h2>🔐 Iniciar sesión! </h2>

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "15px" }}
        />

        <button type="submit">
          Ingresar
        </button>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

      </form>

    </div>
  );
}

export default Login;