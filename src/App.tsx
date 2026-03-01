import { BrowserRouter, Route, Routes } from "react-router";

import { Header } from "./components/Header"; 
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Imprint from "./pages/Imprint";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
