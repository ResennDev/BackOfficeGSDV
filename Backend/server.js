const express = require("express");
const cors = require("cors");

// Importa a conexão com o banco
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

// Permite comunicação com o frontend
app.use(cors());

// Permite receber dados em JSON
app.use(express.json());

// Rotas de autenticação
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3001;

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando!",
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});