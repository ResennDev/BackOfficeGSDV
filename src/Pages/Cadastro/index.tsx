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

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Confirmar Senha:", confirmarSenha);
  }, [email, senha, confirmarSenha]);

  return (
    <Box className="container-cadastro">
      <Box className="cadastro-content">
        <Box className="cadastro-form">
          <Box className="logo-cadastro">
            <img src={logo} alt="Logo-cadastro" />
          </Box>

          <Typography variant="h4" component="h1" className="title">
            Faça seu cadastro
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
              label="Nome"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
              id="usuario-input"
              label="Sobrenome"
              fullWidth
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
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

            <TextField
              required
              id="confirmar-senha-input"
              label="Confirmar Senha"
              fullWidth
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
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
              Cadastrar
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" className="copyright">
          © 2026 GSDV. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
