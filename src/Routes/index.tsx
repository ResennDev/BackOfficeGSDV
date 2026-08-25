import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Autenticacao } from "../Pages/Autenticacao";
import AulaAutenticacao from "../Pages/AulaAutenticacao";
import { Home } from "../Pages/Home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autenticacao />} />
        <Route path="/aula" element={<AulaAutenticacao />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
