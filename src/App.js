import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Empresa from "./pages/Empresa.js";
import Contato from "./pages/Contato.js";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";

import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact="true" element={<Home />}></Route>
            <Route path="/empresa" element={<Empresa />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
