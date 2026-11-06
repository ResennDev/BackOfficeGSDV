import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { Home } from "../Pages/Home";

function RotaPrivada({ children }: { children: ReactNode }) {
  const [autenticado, setAutenticado] = useState<boolean | null>(null);
  const [erroServidor, setErroServidor] = useState(false);

  useEffect(() => {
    let ativa = true;

    async function verificarSessao() {
      try {
        const url =
          window.location.hostname === "localhost"
            ? "http://localhost:3001/auth/me"
            : "/api/auth/me";

        await axios.get(url, {
          withCredentials: true,
        });

        if (ativa) {
          setAutenticado(true);
          setErroServidor(false);
        }
      } catch (erro) {
        if (!ativa) return;

        if (axios.isAxiosError(erro) && erro.response?.status === 401) {
          setAutenticado(false);
          setErroServidor(false);
        } else {
          setErroServidor(true);
        }
      }
    }

    // Verifica assim que a rota é aberta
    verificarSessao();

    // Verifica novamente quando o usuário retorna à aba
    function aoMudarVisibilidade() {
      if (document.visibilityState === "visible") {
        verificarSessao();
      }
    }

    document.addEventListener("visibilitychange", aoMudarVisibilidade);

    return () => {
      ativa = false;

      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
    };
  }, []);

  if (erroServidor) {
    return <p>Não foi possível verificar sua sessão. Tente novamente.</p>;
  }

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
