import "./styles.scss";
import logo from "../../Assets/Images/logo.png";

function Autenticacao() {
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
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
          </form>
        </div>

        <div className="lembrar">
          <input type="checkbox" id="lembrar-me" defaultChecked />
          <label htmlFor="lembrar-me">Lembrar Senha</label>
        </div>

        <div className="acoes">
          <button type="submit">Login</button>
          <button type="submit">Esqueci a Senha</button>
        </div>
      </div>
    </div>
    // </>
  );
}

export default Autenticacao;
