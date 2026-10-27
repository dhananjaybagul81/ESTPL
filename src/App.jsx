import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Pages/Header";
import Homepage from "./Pages/Homepage";
import "./App.css"
import Service from "./Pages/Services"
import Footer from "../src/Components/Homepage/Footer";
import Industries from "../src/Pages/Industries";
import Contact from "../src/Pages/Contacts";
import Blog from "../src/Pages/Blog";
import Casestudies from "../src/Pages/Casestudies";
import Careers from "../src/Pages/Careers";
import About from "../src/Pages/About";
import useAOSInit from './Hooks/useAOSInit';
import ContactPage from "./Pages/ContactPage";

function App() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  useAOSInit(location.pathname);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {location.pathname !== '/contact-us' && <Header />}
      <div className="page-container">
        {isTransitioning && <div className="transition-overlay" />}
        <div className="page">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/service" element={<Service/>}/>
            <Route path="/industries" element={<Industries/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/casestudies" element={<Casestudies/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact-us" element={<ContactPage/>}/>
          </Routes>
        </div>
      </div>
      {location.pathname !== '/contact-us' && <Footer/>}
    </>
  );
}

export default App;