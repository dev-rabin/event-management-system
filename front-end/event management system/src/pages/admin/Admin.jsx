import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { Container } from 'react-bootstrap';

function AdminPage() {
  const { user,isLoading } = useAuth();
  console.log("Admin layout : ", user);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to="/"/>
  }
  
  return (
    <>
      <Container>
        <div className='d-flex text-white'>
          <aside className='col-2 my-5'>
            <h2 className='my-5'>Details</h2>
            <div>
              <NavLink to="/admin/users" className='my-2 text-decoration-none fs-5 text-white'><p>Users</p></NavLink>
              <NavLink to="/admin/events" className='my-2 text-decoration-none fs-5 text-white'><p>Events</p></NavLink>
              <NavLink to="/admin/eventCreate" className='my-2 text-decoration-none fs-5 text-white'><p>Plan a Event</p></NavLink>
              <NavLink to="/admin/contacts" className='my-2 text-decoration-none fs-5 text-white'><p>Contacts</p></NavLink>
              <NavLink to="/admin/registrations" className='my-2 text-decoration-none fs-5 text-white'><p>Registration</p></NavLink>
            </div>
          </aside>
          <Outlet/>
        </div>
      </Container>
    </>
  )
}

export default AdminPage;
