import { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";

export function Autenticacao() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
  }, [usuario, senha]);

  return (
    // <>
    <div className="container-login">
      <div className="login-form">
        <img className="logo-login" src={logo} alt="Logo" />
        <h1 className="title">Faça seu login</h1>
        <h4 className="subtitle">
          Seja bem vindo ao seu Gerenciador de Vendas!
        </h4>

        <div className="container-inputs">
          <form className="inputs">
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </form>
        </div>

        <div className="lembrar">
          <input type="checkbox" id="lembrar-me" defaultChecked />
          <label htmlFor="lembrar-me">Lembrar Senha</label>
        </div>

        <div className="acoes">
          <button type="submit" onClick={() => navigate("/Home")}>
            Login
          </button>
          <button type="submit" onClick={() => navigate("/recuperar-senha")}>
            Esqueci a Senha
          </button>
        </div>
      </div>
    </div>
    // </>
  );
}
