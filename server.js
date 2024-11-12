import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tortademor@ngo",
    database: "vivvar",
  });

  db.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
    } else {
      console.log("Conectado ao banco de dados MySQL.");
    }
  });

  app.post ("/makaloacadastros", (req,res) => {
    const {nome, telefone, email} = req.body
    const sql = "insert into makaloacadastros ( nome, telefone, email ) values ( ?, ?, ? )"
    db.query(sql, [nome, telefone, email], (err, result) => {
        if (err) {
          console.error("Erro ao inserir dados:", err);
          res.status(500).send("Erro ao inserir dados");
        } else {
          res.status(201).send("Cadastro inserido com sucesso!");
        }
      });
  });
  
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });