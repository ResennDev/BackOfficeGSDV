import { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography,} from "@mui/material";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
  }, [usuario, senha]);

  return (
    <>
      <Box className="logo">
        <img src={logo} alt="Logo" />
      </Box>
      <Typography variant="h4" component="h1" className="title">
        Faça seu login
      </Typography>

      <Typography variant="subtitle1" component="h4" className="subtitle">
        Seja bem vindo ao seu Gerenciador de Vendas!
      </Typography>

      <TextField required
      id="outlined-required"
      label="Usuario"
      placeholder="Obrigatorio"
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
            />

            <TextField required
            id="outlined-password-input"
            label="Senha"
            placeholder="Obrigatorio"
            type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar de mim" />

      <Box className="acoes">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/dashboard")}> Entrar </Button>
      </Box>

      <Button
        variant="contained"
        color="success"
        onClick={() => navigate("/recuperar-senha")}> Esqueci a Senha </Button>
    </>
  );
}
    //     <div className="container-inputs">
    //       <form className="inputs">
    //         <input
    //           type="text"
    //           placeholder="Usuário"
    //           value={usuario}
    //           onChange={(e) => setUsuario(e.target.value)}
    //         />
    //         <input
    //           type="password"
    //           placeholder="Senha"
    //           value={senha}
    //           onChange={(e) => setSenha(e.target.value)}
    //         />
    //       </form>
    //     </div>

    //     <div className="lembrar">
    //       <input type="checkbox" id="lembrar-me" defaultChecked />
    //       <label htmlFor="lembrar-me">Lembrar Senha</label>
    //     </div>

    //     <div className="acoes">
    //       <button type="submit" onClick={() => navigate("/Home")}>
    //         Login
    //       </button>
    //       <button type="submit" onClick={() => navigate("/recuperar-senha")}>
    //         Esqueci a Senha
    //       </button>
    //     </div>
    //   </div>
    // </div>