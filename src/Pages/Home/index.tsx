import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../../Components/Siderbar";
import { Card } from "../../Components/Card";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BarChart,
  Bar,
  LabelList,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalProdutos, setTotalProdutos] = useState(0);

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

  useEffect(() => {
    async function buscarTotalUsuarios() {
      try {
        const url =
          window.location.hostname === "localhost"
            ? "http://localhost:3001/auth/total-usuarios"
            : "/api/auth/total-usuarios";

        const resposta = await axios.get(url, { withCredentials: true });
        setTotalUsuarios(resposta.data.totalUsuarios);
      } catch (erro) {
        console.error("Erro ao buscar total de usuários:", erro);
      }
    }

    buscarTotalUsuarios();
  }, [navigate]);

  useEffect(() => {
    async function buscarTotalProdutos() {
      try {
        const url =
          window.location.hostname === "localhost"
            ? "http://localhost:3001/auth/total-produtos"
            : "/api/auth/total-produtos";

        const resposta = await axios.get(url, { withCredentials: true });
        setTotalProdutos(resposta.data.totalProdutos);
      } catch (erro) {
        console.error("Erro ao buscar total de produtos:", erro);
      }
    }

    buscarTotalProdutos();
  }, [navigate]);

  const dadosVendas = [
    { mes: "Jan", vendas: 4000 },
    { mes: "Fev", vendas: 5200 },
    { mes: "Mar", vendas: 4800 },
    { mes: "Abr", vendas: 6500 },
    { mes: "Mai", vendas: 7200 },
    { mes: "Jun", vendas: 8500 },
  ];

  const dadosUsuariosProdutos = [
    { categoria: "Usuarios", quantidade: totalUsuarios },
    { categoria: "Produtos", quantidade: totalProdutos },
  ];

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
        <h2 className="home-title">
          {usuario
            ? `Seja Bem vindo(a), ${usuario.nome} ${usuario.sobrenome}!`
            : "Carregando usuário..."}
        </h2>

        <p className="home-subtitle">
          Esta é a página principal de seu sistema.
        </p>

        <div className="cards-container">
          <Card titulo="Usuários" valor={totalUsuarios} />
          <Card titulo="Produtos" valor={totalProdutos} />
          <Card titulo="Relatórios" valor={12} />
          <Card titulo="Vendas" valor="R$ 15.430" />
          <Card titulo="Pedidos" valor={142} />
        </div>

        <div className="graficos-container">
          <div className="grafico-box">
            <h3>Gráfico de Vendas</h3>
            <div className="grafico-placeholder">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosVendas}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="vendas"
                    stroke="#008616"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grafico-box">
            <h3>Usuarios e Produtos</h3>
            <div className="grafico-placeholder">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosUsuariosProdutos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="categoria" />
                  <YAxis domain={[0, "dataMax + 10"]} />
                  <Tooltip />
                  <Bar
                    dataKey="quantidade"
                    fill="#008616"
                    radius={[5, 5, 0, 0]}
                    barSize={50}
                  >
                    <LabelList dataKey="quantidade" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
