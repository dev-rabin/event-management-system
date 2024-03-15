import React, { useEffect, useState } from 'react';
import { Container,Button } from 'react-bootstrap';
import { useAuth } from '../../store/auth';


function AdminRegistrations() {
    const [registrations, setRegistrations] = useState([]);
   const token = localStorage.getItem("token");
    const getAllRegistrations = async() => {
        try {
          console.log("AdminRegistrations token : ", token);
            const response = await fetch("http://localhost:7000/api/admin/registrations" ,{
                method : "GET",
                headers : {
                    Authorization : token
                }
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log("Admin registrations:", responseData.data);
                setRegistrations(responseData.data);
              }
            } catch (error) {
              console.error("Get admin registrations error:", error);
              alert(error);
            }
    }

    useEffect(()=>{
        getAllRegistrations();
    },[])

  return (
    <div>
      <Container className='p-3 bg-white text-dark rounded' style={{margin: "5rem"}}>
      <h1 className='text-center'>All Registrations</h1>
        <div className='d-flex flex-wrap p-2'>
          {registrations && registrations.map((registration, index) => (
            <div key={index} className='border rounded p-3'>
              <p>User Id: {registration.userId}</p>
              <p>Event Id: {registration.eventId}</p>
              <p>Status : {registration.status}</p>
              <div>
                <Button variant='primary'>Update</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AdminRegistrations
