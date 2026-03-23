import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "./pages/faq";
import Home from "./pages/index";
import Login from "./pages/login";
import Mentores from "./pages/mentores";
import Perfil from "./pages/perfil";
import SejaMentor from "./pages/seja-mentor";
import Sobre from "./pages/sobre";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentores" element={<Mentores />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/seja-mentor" element={<SejaMentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
