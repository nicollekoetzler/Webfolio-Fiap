import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../App.css";
import Sobre from "../Sobre/sobre.js";
import Formação from "../Formação/formação.js";
import Hobbies from "../Hobbies/hobbies.js";
import Experiência from "../Experiência/experiência.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/formacao" element={<Formação />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/experiencia" element={<Experiência />} />
      </Routes>
    </BrowserRouter>
  );
}
