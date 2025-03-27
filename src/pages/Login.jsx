import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/users");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: { width: "300px", margin: "50px auto", textAlign: "center" },
  title: { fontSize: "24px", marginBottom: "10px" },
  error: { color: "red" },
  input: { width: "100%", padding: "10px", margin: "5px 0", fontSize: "16px" },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;
