import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
