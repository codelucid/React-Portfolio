import React from 'react';
import Parallax from "./components/layout";
import Navbar from "./components/navbar";
import './App.css';

function App() {
  return (
    <Router>
      <Parallax/>
      <Navbar/>
        {/* <Header />
        <Project />
        <Footer /> */}
      
    </Router>
  );
}

export default App;
