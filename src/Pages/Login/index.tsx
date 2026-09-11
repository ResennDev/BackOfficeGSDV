import { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
  }, [usuario, senha]);

  return (
    <Box className="container-login">
      <Box className="login-form">
        <Box className="logo">
          <img src={logo} alt="Logo" />
        </Box>

        <Typography variant="h4" component="h1" className="title">
          Faça seu login
        </Typography>

        <Typography variant="subtitle1" className="subtitle">
          Seja bem vindo ao seu Gerenciador de Vendas!
        </Typography>

        <Stack spacing={2} className="input-fields">
          <TextField
            required
            id="usuario-input"
            label="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <TextField
            required
            id="senha-input"
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Stack>

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Lembrar de mim"
        />

        <Box className="acoes">
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/dashboard")}
          >
            Entrar
          </Button>
        </Box>

        <Button variant="text" onClick={() => navigate("/recuperar-senha")}>
          Esqueci a Senha
        </Button>
      </Box>
    </Box>
  );
}
