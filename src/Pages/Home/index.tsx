import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../../Components/Siderbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.scss";

interface Usuario {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
}

export function Home() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [sidebarAberta, setSidebarAberta] = useState(true);

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

  return (
    <div className="container-home">
      <Sidebar aberta={sidebarAberta} setAberta={setSidebarAberta} />

      <div
        className={`button-sidebar ${sidebarAberta ? "menu-aberto" : "menu-fechado"}`}
      >
        <IconButton
          className="menu-button"
          onClick={() => setSidebarAberta(!sidebarAberta)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <main
        className={`home-content ${sidebarAberta ? "menu-aberto" : "menu-fechado"}`}
      >
        <h1 className="home-title">
          {usuario
            ? `Seja Bem vindo(a), ${usuario.nome} ${usuario.sobrenome}!`
            : "Carregando usuário..."}
        </h1>

        <p className="home-subtitle">
          Esta é a página principal de seu sistema.
        </p>
      </main>
    </div>
  );
}
