import React from 'react'
import Login from '../pages/login';
import Home from '../pages/Home';
import About from '../pages/About';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
    

  return (
    <Router>
    <nav className="header">
        <nav className="navbar">
            <div className="logo">MedSupervision</div>
            <div className="nav-menu">
                <ul className="nav-items">
                    <li><Link to="/" className="nav-links">Home</Link></li>
                    <li><Link to="/about" className="nav-links">About</Link></li>
                    <li><Link to="/contacts" className="nav-links">Contact</Link></li>
                    <li><Link to="/login" className="nav-links">Login</Link></li>
                </ul>
            </div>

        </nav>

    </nav>

    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </Router>
  )
}

export default Navbar