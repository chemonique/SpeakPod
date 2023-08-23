import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './pages/library';
import Home from './pages/home';


function App() {
 
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route path="/library" element={<Library  />} />
              
           </Routes>
      </Router>
    </div>
  );
}

export default App;