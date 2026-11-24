import { Sidebar } from "../../Components/Siderbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./styles.scss";

export function Produtos() {
  const [sidebarAberta, setSidebarAberta] = useState(false);

  return (
    <div className="container-produtos-page">
      <Sidebar
        aberta={sidebarAberta}
        setAberta={setSidebarAberta}
      />

      <div
        className={`button-sidebar ${
          sidebarAberta ? "menu-aberto" : "menu-fechado"
        }`}
      >
        <IconButton
          className="menu-button"
          onClick={() => setSidebarAberta(!sidebarAberta)}
        >
          <MenuIcon />
        </IconButton>
      </div>


        <div className="container-produtos">
          <div className="produtos-header">
            <h2>Produtos</h2>

            <button type="button">
              + Novo Produto
            </button>
          </div>

          <div className="produtos-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar produto..."
            />
          </div>

          <div className="produtos-tabela">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Estoque</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Mouse Gamer</td>
                  <td>Periféricos</td>
                  <td>R$ 89,90</td>
                  <td>25</td>
                  <td>Ativo</td>
                  <td>
                    <button>Visualizar</button>
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}