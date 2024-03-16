import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';

function AdminRegistrations() {
  const [registrations, setRegistrations] = useState([]);
  const token = localStorage.getItem("token");
  const [status, setStatus] = useState({
    status: "",
    registrationId: ""
  });

  const getAllRegistrations = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/admin/registrations", {
        method: "GET",
        headers: {
          Authorization: token
        }
      });
      if (response.ok) {
        const responseData = await response.json();
        setRegistrations(responseData.data);
      }
    } catch (error) {
      console.error("Get admin registrations error:", error);
      alert(error);
    }
  }

  useEffect(() => {
    getAllRegistrations();
  }, [])

  const handleStatusUpdate = async (registrationId, newStatus) => {
    try {
      setStatus({ status: newStatus, registrationId });
      const response = await fetch("http://localhost:7000/api/admin/statusUpdate", {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId: registrationId, status: newStatus })
      });
      if (response.ok) {
        const updatedRegistrations = registrations.map(registration => {
          if (registration.registrationId === registrationId) {
            return { ...registration, status: newStatus };
          }
          return registration;
        });
        setRegistrations(updatedRegistrations);
        alert("Registration status updated successfully!");
      } else {
        console.error("Failed to update registration status:", response.statusText);
        alert("Failed to update registration status");
      }
    } catch (error) {
      console.error("Update registration status error:", error);
      alert("Failed to update registration status");
    }
  }

  return (
    <div>
      <Container className='p-4 bg-white text-dark rounded col-12' style={{ margin: "5rem" }}>
        <h1 className='text-left text-decoration-underline'>All Registrations</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Registration Id</th>
              <th>User</th>
              <th>Event</th>
              <th>Date</th>
              <th>Event Capacity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {registrations && registrations.map((registration, index) => (
              <tr key={index}>
                <td>{registration.registrationId}</td>
                <td>{registration.name}</td>
                <td>{registration.title}</td>
                <td>{registration.date}</td>
                <td>{registration.capacity}</td>
                <td>
                  {registration.status === 0 ? (
                    <Button variant='warning' onClick={() => handleStatusUpdate(registration.registrationId, 1)}>Pending</Button>
                  ) : (
                    <Button variant='success' onClick={() => handleStatusUpdate(registration.registrationId, 0)}>Confirmed</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default AdminRegistrations;
