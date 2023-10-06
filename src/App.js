import React from 'react';
import './App.css';
import Header from './HeaderComponent/Header.jsx';
import ContactInfo from './MainComponent/ContactInfo';
import Main from './MainComponent/Main.jsx';
import Skill from './MainComponent/Skill';
import Qualification from './MainComponent/Qualification';
import Project from './MainComponent/Project';
import Footer from './FooterComponent/Footer';
import Message from './MainComponent/Message';


function App() {
  return (
   <>
      <Header />
      <ContactInfo />
      <Main/>
      <h1 className="title"><strong>Skills</strong></h1>
      <h4 className="text-center">My Technical level</h4>
      <Skill/>
      <h1 className="title"><strong>Qualification</strong></h1>
      <h4 className="text-center">My Journey</h4>
      <Qualification/><br></br><br></br>
      <h1 className="title"><strong>Projects</strong></h1>
      <h4 className="text-center">My Innovations</h4><br></br><br></br>
      <Project/><br></br><br></br><br></br>
      <Message/><br></br><br></br>
      <Footer/>
      
     
   
    </>
  );
}

export default App;
