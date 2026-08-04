import "./styles.scss";

function Autenticacao() {
  return (
    <>
      <div className="container-login">
        <div className="login-form">
          <h1>Faça seu login</h1>

          <form>
            <div className="inputs">
              <input type="text" placeholder="Usuário" />
              <input type="password" placeholder="Senha" />
            </div>

            <div className="lembrar">
              <input type="checkbox" id="lembrar-me" defaultChecked />
              <label htmlFor="lembrar-me">Lembrar Senha</label>
            </div>

            <div className="acoes">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Autenticacao;
