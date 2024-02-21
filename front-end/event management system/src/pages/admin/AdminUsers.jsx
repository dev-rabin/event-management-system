import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/admin/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
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
    <>
      <main className='mx-2 p-2'>
        <h1 className='mx-4'>Users:</h1>
        <div className='d-flex flex-wrap p-2'>
          {users.map((user, index) => (
            <div key={index} className='m-3 col-3 p-2'>
              <p>Username: {user.name}</p>
              <p>Email: {user.email}</p>
              <div>
                <Button variant='primary' onClick={() => deleteUser(user.userId)}>Delete User</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default AdminUsers;
