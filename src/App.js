import './App.css';
import Contact from './component/Navbar/Contact';
import Courses from './component/Navbar/courses/Courses';
import Navbar from './component/Navbar/Navbar1';
import Signup from './component/Navbar/register/Signup';
import Home from './Home';
import { BrowserRouter ,Routes,Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/Authprovider';
import {Toaster} from 'react-hot-toast'
function App() {
  const [useauth,setauth]=useAuth()
   
  console.log(useauth)
  return (
 <div className='dark:bg-slate-950 dark:text-white'>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/course' element={ useauth ?<Courses /> :<Navigate to="/signup"/>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
 </div>
  );
}

export default App;
