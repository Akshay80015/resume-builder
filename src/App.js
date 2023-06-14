import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';
import './index.css';

const App = () => {
  
  return (
    <div>
      <Header />
      <div className="container">
        <div className="resume-sections">
          
        <Maincontent name = "Profile Summary"/>
      <Maincontent name = "Academic and Cocurricular Achievements"/>
      <Maincontent name = "Summer Internship Experience"/>
      <Maincontent name = "Work Experience"/>
      <Maincontent name = "Projects"/>
      <Maincontent name = "Certifications"/>
      <Maincontent name = "Leadership Positions"/>
      <Maincontent name = "Extracurricular"/>
      <Maincontent name = "Education"/>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
