import { useEffect } from 'react'; // Added useEffect import
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      // Remove loader after page loads
      const handleLoad = () => {
        loader.classList.remove('show');
      };

      // If page is already loaded
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);


  // Back To Top

  useEffect(() => {
  const backToTop = document.querySelector('.back-to-top');
  const handleScroll = () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>
      {/* Loader should be at the very top */}
      <div id="loader" className="show">
        <div className="loader"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* Back to top button */}
      <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up"></i></a>
    </>
  );
}

export default App;