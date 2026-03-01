import { StrictMode } from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Imprint from "./pages/Imprint";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
