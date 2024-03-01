import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../store/auth';

function AdminPage() {
  // const {user} = useAuth;
  return (
    <>
      <div className='d-flex text-white'>
      <aside className='col-2 p-3'>
      <h1 className='mt-5'>Details</h1>
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
    </>
  )
}

export default AdminPage;
