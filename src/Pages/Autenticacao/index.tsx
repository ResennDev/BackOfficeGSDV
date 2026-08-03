// import "./styles.scss";

// function Autenticacao() {
//   return (
//     <>
//       <div className="container-login">
//         <div className="login-form">
//           <h1>Faça seu login</h1>

//           <form>
//             <div className="inputs">
//               <input type="text" placeholder="Usuário" />
//               <input type="password" placeholder="Senha" />
//             </div>

//             <div className="lembrar">
//               <input type="checkbox" id="lembrar-me" defaultChecked />
//               <label htmlFor="lembrar-me">Lembrar Senha</label>
//             </div>

//             <div className="acoes">
//               <button type="submit">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Autenticacao;

import "./styles.scss";

function Autenticacao() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário, como autenticação do usuário

    console.log("Formulário enviado!");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-container">
        <h1 className="login-title">Autenticação </h1>
        <h2 className="login-subtitle">Back Office</h2>

        <div className="input-container">
          <input type="e-mail" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
        </div>

        <div className="button-container">
          <button type="submit">Entrar</button>
          <button type="button">Esqueci a senha</button>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="lembre-me" />

          <span>lembrar minha senha</span>
        </div>
      </form>
    </div>
  );
}

export default Autenticacao;
