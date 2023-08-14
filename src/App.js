import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Components/Home'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='bodyContent'>
        <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<p >404</p>} />

        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
