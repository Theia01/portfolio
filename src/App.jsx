import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./Pages/Home.jsx";
import Creations from "./Pages/Creations.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creations" element={<Creations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
