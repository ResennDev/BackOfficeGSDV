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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Email:", email);
    console.log("Senha:", senha);
  }, [email, senha]);

  return (
    <Box className="container-login">
      <Box className="login-content">
        <Box className="login-form">
          <Box className="logo-login">
            <img src={logo} alt="Logo-login" />
          </Box>

          <Typography variant="h4" component="h1" className="title">
            Faça seu login
          </Typography>

          <Typography variant="subtitle1" className="subtitle">
            Seja bem vindo ao seu Gerenciador de Vendas!
          </Typography>

          <Stack
            spacing={3}
            sx={{
              width: "25rem",
            }}
            className="input-fields"
          >
            <TextField
              required
              id="usuario-input"
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#008616",
                  backgroundColor: "#baffc6",
                  padding: "0 4px",

                  "& fieldset": {
                    borderColor: "#008616",
                  },

                  "&:hover fieldset": {
                    borderColor: "#006f12",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#008616",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "#000000",
                },

                "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                  color: "#baffc6",
                  transform: "translate(14px, -17px) scale(0.75)",
                },

                "& .MuiInputBase-input": {
                  color: "black",
                },
              }}
            />

            <TextField
              required
              id="senha-input"
              label="Senha"
              fullWidth
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#baffc6",

                  "& fieldset": {
                    borderColor: "#008616",
                  },

                  "&:hover fieldset": {
                    borderColor: "#006f12",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#008616",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "#000000",
                },

                "& .MuiInputLabel-root.MuiInputLabel-shrink": {
                  color: "#baffc6",
                  transform: "translate(14px, -17px) scale(0.75)",
                },

                "& .MuiInputBase-input": {
                  color: "black",
                },
              }}
            />
          </Stack>

          <FormControlLabel
            className="lembrar-me"
            control={<Checkbox defaultChecked />}
            label="Lembrar de mim"
            sx={{ width: "25rem", margin: 0 }}
          />

          <Box className="acoes">
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/dashboard")}
              sx={{ width: "12rem", height: "6vh", fontWeight: "bold" }}
            >
              Entrar
            </Button>

            <Button
              variant="outlined"
              color="success"
              onClick={() => navigate("/recuperar-senha")}
              sx={{ width: "12rem", height: "6vh", fontWeight: "bold" }}
            >
              Esqueci a Senha
            </Button>
          </Box>

          <Typography variant="body1" className="cadastro-link">
            Não tem cadastro? <a href="/cadastro">Clique aqui</a> para se
            cadastrar.
          </Typography>
        </Box>
        <Typography variant="body2" className="copyright">
          © 2026 GSDV. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
