import React from "react";

import Navbar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./pages/favorites";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
