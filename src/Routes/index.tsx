import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import AulaAutenticacao from "../Pages/AulaAutenticacao";
import { Cadastro } from "../Pages/Cadastro";
import { Home } from "../Pages/Home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aula" element={<AulaAutenticacao />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
