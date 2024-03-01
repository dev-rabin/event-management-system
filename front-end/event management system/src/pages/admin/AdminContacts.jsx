import React, { useEffect, useState } from 'react'
import { Container,Button } from 'react-bootstrap';
import "./Admin.css";

function AdminContacts() {
    const  [contacts , setContacts] = useState([]);
    const getAllContacts = async() => {
        try {
            const response = await fetch("http://localhost:7000/api/admin/contacts" ,{
                method : "GET",
                headers : {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log("Admin contacts:", responseData.data);
                setContacts(responseData.data);
              }
            } catch (error) {
              console.error("Get admin contacts error:", error);
              alert(error);
            }
    }
useEffect(()=>{
    getAllContacts()
},[])

  return (
    <div>
        <h1>All Contacts</h1>
      <Container className='my-5 bg-white text-dark'>
        <div className='d-flex flex-wrap p-2'>
          {contacts.map((contact, index) => (
            <div key={index} className='col-4 p-2'>
              <p>Username: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Mobile : {contact.mobile}</p>
              <p>Message : {contact.message}</p>
              <div>
                <Button variant='primary'>Call</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AdminContacts
