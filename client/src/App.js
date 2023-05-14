import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
