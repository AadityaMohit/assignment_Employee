import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");  
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

   const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User List</h2>

       <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchInput}
      />

      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div key={user.id} style={styles.card}>
            <img src={user.avatar} alt={user.first_name} style={styles.avatar} />
            <div>
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <button onClick={() => navigate(`/edit/${user.id}`)} style={styles.button}>
                Edit
              </button>
              <button onClick={() => handleDelete(user.id)} style={{ ...styles.button, backgroundColor: "red" }}>
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noResults}>No users found.</p>
      )}
    </div>
  );
};

const styles = {
  container: { width: "600px", margin: "20px auto", textAlign: "center" },
  title: { textAlign: "center" },
  searchInput: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  avatar: { width: "50px", borderRadius: "50%" },
  button: {
    padding: "5px 10px",
    margin: "5px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  noResults: { color: "gray", fontSize: "18px", marginTop: "10px" },
};

export default UserList;
