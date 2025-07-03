import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importe suas páginas
import Home from "../pages/Home";
import AboutPage from "../pages/about-us";
import BemEstarPage from "../pages/bem-estar";
import ContactPage from "../pages/contact";
import GestaoRiscosPage from "../pages/gestao-e-gerenciamento-de-riscos";
import LooseWheelIndicatorDipPage from "../pages/loose-wheel-indicator-dip";
import SafetyPlusPage from "../pages/safetyplus-sistema-reconhecimento";
import SegurancaComportamentalPage from "../pages/seguranca-comportamental";
import SegurancaNoTransitoPage from "../pages/seguranca-no-transito";
import ServicosApoioPage from "../pages/servicos-de-apoio";

// Adicione outras páginas conforme necessário

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/bem-estar" element={<BemEstarPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gestao-e-gerenciamento-de-riscos" element={<GestaoRiscosPage />} />
      <Route path="/loose-wheel-indicator-dip" element={<LooseWheelIndicatorDipPage />} />
      <Route path="/safetyplus-sistema-reconhecimento" element={<SafetyPlusPage />} />
      <Route path="/seguranca-comportamental" element={<SegurancaComportamentalPage />} />
      <Route path="/seguranca-no-transito" element={<SegurancaNoTransitoPage />} />
      <Route path="/servicos-de-apoio" element={<ServicosApoioPage />} />
      {/* Adicione rotas extras aqui */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
