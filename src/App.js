import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/HomePage/Home';
import Aboutus from './Component/AboutusPage/Aboutus';
import Blog from './Component/BlogPage/Blog';
import Aos from 'aos';
import { useEffect } from 'react';
import ScrollToTop from './Component/ScrollToTop';
import BlogDetails from './Component/BlogPage/BlogDetails';

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogdetails' element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App