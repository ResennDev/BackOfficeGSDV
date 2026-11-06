import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.scss";

interface Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
}

export function Home() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    async function buscarUsuario() {
      try {
        const url =
          window.location.hostname === "localhost"
            ? "http://localhost:3001/auth/me"
            : "/api/auth/me";

        const resposta = await axios.get(url, { withCredentials: true });
        setUsuario(resposta.data.usuario);
      } catch (erro) {
        console.error("Erro ao buscar usuário:", erro);

        navigate("/", { replace: true });
      }
    }

    buscarUsuario();
  }, [navigate]);

  const [saindo, setSaindo] = useState(false);

  async function handleLogout() {
    try {
      setSaindo(true);

      const url =
        window.location.hostname === "localhost"
          ? "http://localhost:3001/auth/logout"
          : "/api/auth/logout";

      await axios.post(
        url,
        {},
        {
          withCredentials: true,
        },
      );

      navigate("/", { replace: true });
    } catch (erro) {
      console.error("Erro ao fazer logout:", erro);
      alert("Não foi possivel sair. Tente novamente.");
    } finally {
      setSaindo(false);
    }
  }

  return (
    <div className="container-home">
      <h1 className="home-title">
        {usuario
          ? `Seja Bem vindo(a), ${usuario.nome} ${usuario.sobrenome}!`
          : "Carregando usuário..."}
      </h1>
      <p className="home-subtitle">
        Esta é a página principal de seu sistema.{" "}
      </p>

      <button type="button" onClick={handleLogout} disabled={saindo}>
        {saindo ? "Saindo..." : "Sair"}
      </button>
    </div>
  );
}
