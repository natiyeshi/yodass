import css from './App.module.css'
import Home from './components/home'
import { Routes,Route } from 'react-router-dom'
import About from './components/abouts/about'
import Nav from './components/common/Nav'
import Service from './components/service'
import Contact from "./components/contact"
import { useEffect,useState } from 'react'

function App() {

  const [displayElement, setDisplayElement] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setDisplayElement(true);
      } else {
        setDisplayElement(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='text-sm overflow-x-hidden'>
      {displayElement && <Nav cls={` duration-700 z-20 fixed top-0 left-0 w-full ${css.show}`} />}
      <Nav cls="relative"/>
      <Routes >
        <Route path="/" element={<Home /> }  />
        <Route path="/about" element={<About /> }  />
        <Route path="/service" element={<Service /> }  />
        <Route path="/contact" element={<Contact /> }  />
      </Routes>
    </div>
  )
}

export default App
