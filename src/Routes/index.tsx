import { BrowserRouter, Route, Routes } from "react-router-dom";
import Autenticacao from "../Pages/Autenticacao";
import AulaAutenticacao from "../Pages/AulaAutenticacao";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autenticacao />} />
        <Route path="/aula" element={<AulaAutenticacao />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;
