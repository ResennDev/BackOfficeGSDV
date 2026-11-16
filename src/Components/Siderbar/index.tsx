import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.scss";
import { useState } from "react";

interface SidebarProps {
  aberta: boolean;
  setAberta: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ aberta, setAberta }: SidebarProps) {
  const navigate = useNavigate();

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
    <aside className={`sidebar ${!aberta ? "sidebar-fechada" : ""}`}>
      <div className="sidebar-logo">
        <h2>BackOffice</h2>
        <span>GSDV</span>
      </div>

      <nav className="sidebar-menu">
        <a href="/dashboard">Dashboard</a>
        <a href="/usuarios">Usuarios</a>
        <a href="/produtos">Produtos</a>
        <a href="/relatorios">Relatórios</a>
        <a href="/configuracoes">Configuração</a>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          {saindo ? "Saindo..." : "Sair"}
        </a>
      </nav>

      <div className="sidebar-footer">
        <span>© 2024 GSDV. Todos os direitos reservados.</span>
      </div>
    </aside>
  );
}
