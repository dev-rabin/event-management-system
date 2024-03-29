import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: token
        }
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Admin users:", responseData.data);
        setUsers(responseData.data);
      }
    } catch (error) {
      console.error("Get admin users error:", error);
      alert(error);
    }
  }

  const deleteUser = async (userId) => {
    console.log("delete user userId : ", userId);
    try {
      const response = await fetch(`http://localhost:7000/api/admin/userDelete/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        console.log(`User with ID ${userId} deleted successfully`);
        getAllUsers();
      } else {
        console.error("Failed to delete user:", response.status);
      }
    } catch (error) {
      console.error("Delete user error:", error);
      alert(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container className='p-3' style={{ margin: "4rem" }}>
      <main className='m-2 p-2 bg-light text-dark rounded'>
        <h1 className='text-left text-decoration-underline'>Users</h1>
        <table className="table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant='primary' onClick={() => deleteUser(user.userId)}>Delete User</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  )
}

export default AdminUsers;
