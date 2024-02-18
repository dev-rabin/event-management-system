import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import BlogsPage from './pages/Blogs';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';

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
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
