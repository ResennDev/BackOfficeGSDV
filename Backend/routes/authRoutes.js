const express = require("express");
const bcrypt = require("bcrypt");
const connection = require("../database/connection");

const router = express.Router();

router.post("/cadastro", async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  try {
    // Criptografa a senha
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const sql = `
      INSERT INTO usuarios (Nome, Sobrenome, Email, Senha)
      VALUES (?, ?, ?, ?)
    `;

    connection.query(
      sql,
      [nome, sobrenome, email, senhaCriptografada],
      (erro, resultado) => {
        if (erro) {
          console.error(erro);

          return res.status(500).json({
            mensagem: "Erro ao cadastrar usuário",
          });
        }

        return res.status(201).json({
          mensagem: "Usuário cadastrado com sucesso!",
        });
      }
    );
  } catch (erro) {
    console.error(erro);

    return res.status(500).json({
      mensagem: "Erro interno do servidor",
    });
  }
});


router.post("/login", async(req, res) => {
  const { email, senha } = req.body;

  const sql = `
    SELECT * FROM usuarios WHERE Email = ?
  `;

  connection.query(sql, [email], async (erro, resultado) => {
    if (erro) {
      console.error(erro);
      return res.status(500).json({
        mensagem: "Erro ao buscar usuário",
      });
    }

    if (resultado.length === 0) {
      return res.status(401).json({
        mensagem: "Email ou senha inválidos",
      });
    }

    const emailEncontrado = resultado[0];
    const senhaCorreta = await bcrypt.compare(senha, emailEncontrado.Senha);

    if (!senhaCorreta) {
      return res.status(401).json({
        mensagem: "Email ou senha inválidos",
      });
    }

    return res.status(200).json({
      mensagem: "Login realizado com sucesso!",
    });
  });
});

module.exports = router;