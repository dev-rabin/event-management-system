import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import "./Admin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faTimes } from '@fortawesome/free-solid-svg-icons';

function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const token = localStorage.getItem("token");

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:7000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization : token
                }
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log("Admin contacts:", responseData.data);
                setContacts(responseData.data);
            } else {
                console.error("Failed to fetch admin contacts:", response.statusText);
                alert("Failed to fetch admin contacts");
            }
        } catch (error) {
            console.error("Get admin contacts error:", error);
            alert("Failed to fetch admin contacts");
        }
    }

    useEffect(() => {
        getAllContacts();
    }, []);

    return (
      <div>
      <Container className='bg-white text-dark p-3 rounded' style={{ marginTop: "6rem" }}>
          <h1 className='text-center'>All Contacts</h1>
          {contacts === undefined ? (
              <p>Loading...</p>
          ) : (
              <div className='d-flex flex-wrap justify-content-between p-2'>
                  {contacts.map((contact, index) => (
                      <div key={index} className='p-2 border rounded m-1 col-3'>
                          <p>Username: {contact.name}</p>
                          <p>Email: {contact.email}</p>
                          <p>Mobile: {contact.mobile}</p>
                          <p>Message: {contact.message}</p>
                          <div>
                              <Button variant='primary' className='me-2'><FontAwesomeIcon icon={faMessage} /></Button>
                              <Button variant='danger'><FontAwesomeIcon icon={faTimes} /></Button>
                          </div>
                      </div>
                  ))}
              </div>
          )}
      </Container>
  </div>
    )
}

export default AdminContacts;
