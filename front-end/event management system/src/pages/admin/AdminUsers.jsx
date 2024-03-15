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
          Authorization : token
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
     <Container className='p-3' style={{margin : "4rem"}}>
     <main className='m-2 p-2 bg-light text-dark rounded'>
        <h1 className='text-center'>Users</h1>
        <div className='d-flex flex-wrap'>
          {users && users.map((user, index) => (
            <div key={index} className='p-5 border rounded m-1'>
              <p>Username: {user.name}</p>
              <p>Email: {user.email}</p>
              <div>
                <Button variant='primary' onClick={() => deleteUser(user.userId)}>Delete User</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
     </Container>
    </>
  )
}

export default AdminUsers;
