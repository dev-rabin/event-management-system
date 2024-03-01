import React, { useEffect, useState } from 'react';
import { Container,Button } from 'react-bootstrap';


function AdminRegistrations() {
    const [registrations, setRegistrations] = useState([]);
    const getAllRegistrations = async() => {
        try {
            const response = await fetch("http://localhost:7000/api/admin/registrations" ,{
                method : "GET",
                headers : {
                    "Content-Type": "application/json"
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
      <h1>All Registrations</h1>
      <Container className='my-5 bg-white text-dark rounded'>
        <div className='d-flex flex-wrap p-2'>
          {registrations.map((registration, index) => (
            <div key={index} className='col-2 p-2'>
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
