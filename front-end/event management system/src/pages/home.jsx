import React from 'react'
import { Button, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container className='text-danger'>
        <h1>Welcome Event Management System</h1>
        <Button variant='warning'>Welcome</Button>
      </Container>
    </div>
  )
}

export default Home;
