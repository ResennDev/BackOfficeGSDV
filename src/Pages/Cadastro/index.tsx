import "./styles.scss";
import logo from "../../Assets/Images/logo.png";

export function Cadastro() {
  return (
    <div className="container-cadastro">
      <div className="cadastro-form">
        <img className="logo-cadastro" src={logo} alt="Logo" />
        <h1 className="title">Faça seu cadastro</h1>
        <h4 className="subtitle">
          Seja bem vindo ao seu Gerenciador de Vendas!
        </h4>

        <div className="container-inputs">
          <form className="inputs">
            <section className="nome-sobrenome">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Sobrenome" />
            </section>
            
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar Senha" />
          </form>
        </div>



        <div className="lembrar">
          <input type="checkbox" id="lembrar-me" defaultChecked />
          <label htmlFor="lembrar-me">Lembrar Senha</label>
        </div>

        <div className="acoes">
          <button type="submit" className="btn-cadastrar">
            Cadastrar
          </button>

          {/* <button type="submit" onClick={() => navigate("/Home")}>
            Cadastrar
          </button>
          <button type="submit" onClick={() => navigate("/recuperar-senha")}>
            Esqueci a Senha
          </button> */}
        </div>
      </div>
    </div>
  );
}
