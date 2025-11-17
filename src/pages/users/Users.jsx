import axios from "axios";
import React, { use, useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      console.log("[Users] fetching products…");
      const res = await axios.get("https://fakestoreapi.com/users");
      console.log("[Users] products:", res.data);
      setUsers(res.data);
      return res.data;
    } catch (err) {
      setError({
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
      console.error("❌ fetch error:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
      return [];
    } finally {
      console.log("[Users] fetch finished");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (error) {
    return (
      <div> Error: {error.message} (Status: {error.status})</div>
    );
  }

  if(loading){
    return <div>Loading...</div>;
  }

  return (
    <>
    {console.log("Rendering Users component with users:", users)}
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name.firstname} {user.name.lastname} - {user.email}
          </li>
        ))}
      </ul>
    </div>
    </>

  )
}
