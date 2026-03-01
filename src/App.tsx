import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Header } from "./components/Header"; 
import { Footer } from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Imprint = lazy(() => import("./pages/Imprint"));

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
