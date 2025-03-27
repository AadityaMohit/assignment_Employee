import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    navigate("/users");
  };

  return (
    <div style={styles.container}>
      <h2>Edit User</h2>
      <input type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} style={styles.input} />
      <input type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} style={styles.input} />
      <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} style={styles.input} />
      <button onClick={handleUpdate} style={styles.button}>Update</button>
    </div>
  );
};

const styles = {
  container: { width: "300px", margin: "50px auto", textAlign: "center" },
  input: { width: "100%", padding: "10px", margin: "5px 0", fontSize: "16px" },
  button: { padding: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" },
};

export default EditUser;
