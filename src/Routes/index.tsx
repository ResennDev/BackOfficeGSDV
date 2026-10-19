import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { Home } from "../Pages/Home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* adicionar essa rota a cima para a dashboard quando estiver pronta. */}
      </Routes>
    </BrowserRouter>
  );
};
