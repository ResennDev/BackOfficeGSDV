import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { Home } from "../Pages/Home";

function RotaPrivada({ children }: { children: ReactNode }) {
  const [autenticado, setAutenticado] = useState<boolean | null>(null);

  useEffect(() => {
    async function verificarSessao() {
      try {
        const url =
          window.location.hostname === "localhost"
            ? "http://localhost:3001/auth/me"
            : "/api/auth/me";

        await axios.get(url, {
          withCredentials: true,
        });

        setAutenticado(true);
      } catch (erro) {
        setAutenticado(false);
      }
    }

    verificarSessao();
  }, []);

  if (autenticado === null) {
    return <p>Verificando sessão...</p>;
  }

  if (!autenticado) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route
          path="/dashboard"
          element={
            <RotaPrivada>
              <Home />
            </RotaPrivada>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
