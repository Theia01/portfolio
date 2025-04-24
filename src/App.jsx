import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./Pages/Home.jsx";
import Creations from "./Pages/Creations.jsx";
import Hisy from "./Pages/Hisy.jsx";
import Parcours from "./Pages/Parcours.jsx";
import Error404 from "./Pages/Error404.jsx";
import MedicalReminder from "./Pages/MedicalReminder.jsx";
import PapoteCar from "./Pages/PapoteCar.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/creations/hisy" element={<Hisy />} />
          <Route path="/creations/papote-car" element={<PapoteCar />} />
          <Route path="/creations/medical-reminder" element={<MedicalReminder />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
