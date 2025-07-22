import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/HomePage/Home';
import Aboutus from './Component/AboutusPage/Aboutus';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App