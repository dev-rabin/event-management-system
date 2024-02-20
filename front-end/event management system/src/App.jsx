import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import BlogsPage from './pages/Blogs';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import AdminPage from './pages/admin/Admin';
import AdminUsers from './pages/admin/AdminUsers';
import LoginPage from './pages/Login';
import UserRegistration from './pages/UserRegistration';
import LogOutPage from './pages/LogOut';
import EventsCreation from './pages/admin/EventsCreation';

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/events' element={<EventsPage/>} />
      <Route path='/blogs' element={<BlogsPage/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/logout' element={<LogOutPage/>}/>
      <Route path='/register' element={<UserRegistration/>}/>

      <Route path='/admin' element={<AdminPage/>}>
        <Route path='users' element = {<AdminUsers/>}/>
        <Route path='eventCreate' element = {<EventsCreation/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
