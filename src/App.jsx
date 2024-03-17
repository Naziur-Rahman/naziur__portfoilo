import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/about/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
function App() {
  return (
    <>
    
      <Header></Header>
      <main className="main">
        <Home> </Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
      </main>
    </>
  )
}

export default App