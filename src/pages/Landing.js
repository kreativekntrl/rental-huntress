import React, { useState } from "react";
import Header from '../components/Header';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import Aside from '../components/Aside.js';
import Main from '../components/Main.js';
import { render } from "@testing-library/react";

const Landing = () => {
  //Search bar
  const [userInput, setUserInput] = useState("");
  
  const handleInputChange = (evt) => {
    setUserInput(evt.target.value);
  }

  const handleFormSubmit = (evt) => {
    alert(`form submitted: ${userInput}`)
    evt.preventDefault(); 
  };

    return ( 
<div className="page-wrap">
  <header className="page-header">
    <Header />
  </header>
  <nav className="page-nav">
    <Nav className="page-nav" userInput={userInput} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange}/> 
  </nav>
  <main className="page-main">
    <Main userInput={userInput} handleFormSubmit={handleFormSubmit} handleInputChange={handleFormSubmit}/>
  </main>
  <aside className="page-sidebar">
    <Aside />
  </aside>
  <footer className="page-footer">
    <Footer />
  </footer>
</div>
    );
}
export default Landing;