import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./Pages/Home.jsx";
import Creations from "./Pages/Creations.jsx";
import Parcours from "./Pages/Parcours.jsx";
import Error404 from "./Pages/Error404.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
