import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function AdminPage() {
  return (
    <>
      <div className='d-flex text-white'>
      <aside className='border col-2 p-3' style={{height: "100vh"}}>
      <h1 className='mb-5'>Details</h1>
      <div>
        <NavLink to="/admin/users" className='my-2 text-decoration-none fs-5 text-white'><p>Users</p></NavLink>
        <NavLink to="/admin/events" className='my-2 text-decoration-none fs-5 text-white'><p>Events</p></NavLink>
        <NavLink to="/admin/" className='my-2 text-decoration-none fs-5 text-white'><p>Contacts</p></NavLink>
        <NavLink to="/admin/eventCreate" className='my-2 text-decoration-none fs-5 text-white'><p>Plan a Event</p></NavLink>
        <NavLink to="/admin/eventUpdate" className='my-2 text-decoration-none fs-5 text-white'><p>Contacts</p></NavLink>
      </div>
      </aside>
      <Outlet/>
      </div>
    </>
  )
}

export default AdminPage;
