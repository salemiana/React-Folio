import React from "react";
//import Nav from "./components/Nav/Nav";
//import Header from "./components/Header/Header";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/ContactMe/Contact";
//import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div id='top' className='initials'>
      {/* <Header /> */}

    <BrowserRouter>
      <Nav />
      <Routes>
        
        <Route exact path="/" element={<About />} />
        <Route exact path="/Projects" element={<Projects />}></Route>
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    {/* <Footer /> */}
    </div> 
  );
}

export default App;
