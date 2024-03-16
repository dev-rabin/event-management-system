import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem("token");

  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: token,
        },
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
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const handleDeleteContact = async (contactId) => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/admin//contactDelete/${contactId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const updatedContacts = contacts.filter(
          (contact) => contact.contactId !== contactId
        );
        setContacts(updatedContacts);
        alert("Contact has been deleted successfully!");
      } else {
        console.error("Failed to delete contact:", response.statusText);
        alert("Failed to delete contact");
      }
    } catch (error) {
      console.error("Delete contact error:", error);
      alert("Failed to delete contact");
    }
  };

  return (
    <Container
      className="bg-white text-dark p-3 rounded"
      style={{ marginTop: "5rem" }}
    >
      <h1 className="text-left text-decoration-underline mb-4">All Contacts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobile}</td>
              <td>{contact.message}</td>
              <td>
                <Button variant="primary" className="me-2" onClick={()=>{alert("We will contact to you soon!")}}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Button>
                <Button variant='danger' onClick={() => handleDeleteContact(contact.contactId)}><FontAwesomeIcon icon={faTimes} /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default AdminContacts;
