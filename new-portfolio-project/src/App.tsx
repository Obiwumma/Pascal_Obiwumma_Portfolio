import { useEffect, Suspense, lazy } from 'react'; 
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
// import About from './components/About.js';
// import Service from './components/Service.js';
// import Experience from './components/Experience.jsx';
// import Projects from './components/Projects.jsx';
// import Contact from './components/Contact.js';
// import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = lazy(() => import('./components/About.js'));
const Projects = lazy(() => import('./components/Projects.js'));
const Contact = lazy(() => import('./components/Contact.js'));
const Experience = lazy(() => import('./components/Experience.js'));
const Service = lazy(() => import('./components/Service.js'));
const Footer = lazy(() => import('./components/Footer.js'));

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
  const backToTop = document.querySelector('.back-to-top') as HTMLElement;
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
    <Suspense fallback = {
      <div id="loader" className="show">
        <div className="loader"></div>
      </div>
    }>
      {/* Loader should be at the very top */}

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
    </Suspense>
  );
}

export default App;