import { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const navigate = useNavigate();

  async function handleCadastro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    try {
      const resposta = await axios.post("http://localhost:3001/auth/cadastro", {
        nome,
        sobrenome,
        email,
        senha,
      });

      alert("Cadastro realizado com sucesso!");
      console.log("Resposta do servidor:", resposta.data);
      navigate("/Login");
      // } catch (error) {
      //   console.error("Erro ao cadastrar:", error);
      //   alert("Não foi possivel realizar o cadastro.");
      // }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Status:", error.response?.status);
        console.error("Resposta do backend:", error.response?.data);
        console.error("Mensagem:", error.message);
      } else {
        console.error("Erro inesperado:", error);
      }

      alert("Não foi possível realizar o cadastro. Verifique o console.");
    }
  }

  // useEffect(() => {
  //   console.log("Nome:", nome);
  //   console.log("Sobrenome:", sobrenome);
  //   console.log("Email:", email);
  //   console.log("Senha:", senha);
  //   console.log("Confirmar Senha:", confirmarSenha);
  // }, [nome, sobrenome, email, senha, confirmarSenha]);

  return (
    <Box className="container-cadastro">
      <Button className="button-voltar" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </Button>
      <Box className="cadastro-content">
        <Box
          component="form"
          className="cadastro-form"
          onSubmit={handleCadastro}
        >
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
            spacing={2}
            sx={{
              width: "25rem",
            }}
            className="input-fields"
          >
            <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
              <TextField
                required
                id="nome-input"
                label="Nome"
                fullWidth
                value={nome}
                onChange={(e) => {
                  const valor = e.target.value;
                  setNome(valor.charAt(0).toUpperCase() + valor.slice(1));
                }}
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
                id="sobrenome-input"
                label="Sobrenome"
                fullWidth
                value={sobrenome}
                onChange={(e) => {
                  const valor = e.target.value;
                  setSobrenome(valor.charAt(0).toUpperCase() + valor.slice(1));
                }}
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
            </Stack>

            <TextField
              required
              id="email-input"
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
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="off"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                        edge="end"
                      >
                        {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
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
              type={mostrarConfirmarSenha ? "text" : "password"}
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              autoComplete="off"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setMostrarConfirmarSenha(!mostrarConfirmarSenha)
                        }
                        edge="end"
                      >
                        {mostrarConfirmarSenha ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
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

            <Box className="acoes">
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ width: "12rem", height: "6vh", fontWeight: "bold" }}
              >
                Cadastrar
              </Button>
            </Box>
          </Stack>
        </Box>

        <Typography variant="body2" className="copyright">
          © 2026 GSDV. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
}
