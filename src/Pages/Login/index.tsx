import { useState } from "react";
import "./styles.scss";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [notificacaoAberta, setNotificacaoAberta] = useState(false);
  const [tipoNotificacao, setTipoNotificacao] = useState<"success" | "error">(
    "success",
  );
  const [mensagemNotificacao, setMensagemNotificacao] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !senha) {
      setTipoNotificacao("error");
      setMensagemNotificacao("Por favor, preencha todos os campos.");
      setNotificacaoAberta(true);
      return;
    }

    try {
      const resposta = await axios.post(
        window.location.hostname === "localhost"
          ? "http://localhost:3001/auth/login"
          : "/api/auth/login",
        {
          email: email.trim(),
          senha,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Resposta da API:", resposta.data);

      setTipoNotificacao("success");
      setMensagemNotificacao("Login realizado com sucesso!");
      setNotificacaoAberta(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Erro inesperado:", error);

      setTipoNotificacao("error");

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setMensagemNotificacao("Email ou senha invalidos. Tente novamente.");
        } else if (!error.response) {
          setMensagemNotificacao("Não foi possivel conectar ao servidor.");
        } else {
          setMensagemNotificacao(
            error.response.data?.mensagem ||
              "Ocorreu um erro inesperado. Tente novamente.",
          );
        }
      } else {
        setMensagemNotificacao("Ocorreu um erro inesperado. Tente novamente.");
      }
      setNotificacaoAberta(true);
    }
  }

  return (
    <Box className="container-login">
      <Box className="login-content">
        <Box className="login-form" component="form" onSubmit={handleLogin}>
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
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: "12rem", height: "6vh", fontWeight: "bold" }}
            >
              Entrar
            </Button>

            <Button
              type="button"
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
        <Snackbar
          open={notificacaoAberta}
          autoHideDuration={1500}
          onClose={() => setNotificacaoAberta(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setNotificacaoAberta(false)}
            severity={tipoNotificacao}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {mensagemNotificacao}
          </Alert>
        </Snackbar>
        <Typography variant="body2" className="copyright">
          © 2026 GSDV. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
