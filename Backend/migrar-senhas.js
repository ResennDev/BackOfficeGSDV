
const bcrypt = require("bcrypt");
const connection = require("./database/connection");

async function migrarSenhas() {
  try {
    // Busca os usuários
    const [usuarios] = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT idUsuarios, Senha FROM usuarios",
        (erro, resultado) => {
          if (erro) return reject(erro);
          resolve([resultado]);
        }
      );
    });

    let migradas = 0;
    let preservadas = 0;

    for (const usuario of usuarios) {
      const senhaAtual = String(usuario.Senha ?? "");

      // Identifica hashes bcrypt comuns
      const jaEhBcrypt =
        /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(senhaAtual);

      if (jaEhBcrypt) {
        preservadas++;
        continue;
      }

      // Gera hash para a senha antiga
      const novoHash = await bcrypt.hash(senhaAtual, 10);

      // Atualiza somente a senha desse usuário
      await new Promise((resolve, reject) => {
        connection.query(
          "UPDATE usuarios SET Senha = ? WHERE idUsuarios = ?",
          [novoHash, usuario.idUsuarios],
          (erro, resultado) => {
            if (erro) return reject(erro);
            resolve(resultado);
          }
        );
      });

      migradas++;
    }

    console.log("Migração concluída!");
    console.log("Senhas migradas:", migradas);
    console.log("Hashes preservados:", preservadas);
    console.log("Total de usuários:", usuarios.length);

  } catch (erro) {
    console.error("Erro na migração:", erro.message);
  } finally {
    connection.end();
  }
}

migrarSenhas();
