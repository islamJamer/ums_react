import axios from "axios";
import React, { use, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function Users() {
  const { data, loading, error } = useFetch("users");

  const deleteUser = async (id) => {
    const res = await axios.delete(`https://fakestoreapi.com/users/${id}`);
    console.log("User deleted:", res.data);
  }

  if (error) {
    return (
      <div>
        {" "}
        Error: {error.message} (Status: {error.status})
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {console.log("Rendering Users component with users:", data)}
      <div>
        <h2>Users List</h2>
        <table className="table">
          <thead>
            <tr>
              <td>number</td>
              <td>ID</td>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th> - </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user.id}>
                <td>{index}</td>
                <td>{user.id}</td>
                <td>{user.name.firstname}</td>
                <td>{user.name.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-link"
                    aria-label={`Edit ${user.email}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
                      <path d="M20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-link text-danger"
                    aria-label={`Delete ${user.email}`}
                    onClick={() => deleteUser(user.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M3 6h18v2H3V6z" />
                      <path d="M8 9h8l-1 11H9L8 9zM10 4h4l1 2H9l1-2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
