import React from 'react'
import { NavLink } from 'react-router-dom';

function AdminPage() {
  return (
    <>
      <div className='d-flex text-white'>
      <aside className='border col-2 p-3' style={{height: "100vh"}}>
      <h1 className='mb-5'>Details</h1>
      <div>
        <NavLink to="/admin/users" className='my-2 text-decoration-none fs-5 text-white'><p>Users</p></NavLink>
        <NavLink to="/admin/" className='my-2 text-decoration-none fs-5 text-white'><p>Events</p></NavLink>
        <NavLink to="/admin/" className='my-2 text-decoration-none fs-5 text-white'><p>Contacts</p></NavLink>
      </div>
      </aside>
      </div>
    </>
  )
}

export default AdminPage;
