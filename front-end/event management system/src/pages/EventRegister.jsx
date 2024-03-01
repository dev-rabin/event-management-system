import React from 'react'

const eventRegister = async() => {
    try {
        const response = await fetch("http://localhost:7000/api/registerAtEvent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ userId, eventId })
        });
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error("Registration error:", error);
        throw new Error("An error occurred during registration.");
      }
}

export default eventRegister;
