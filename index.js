// npm init
// npm i express
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())

// npm i mysql2
const db = require("./db")

// npm i bcrypt
const bcrypt = require("bcrypt")

// aqui fazemos as operações do bd
app.post("/cliente", async(req,res) => {
    try {
        const dados = req.body
        const senhaCript = bcrypt.hashSync(dados.senha, 10)
        dados.senha = senhaCript

        const resultado = await db.pool.query(`
          INSERT INTO cliente (
              nome, cpf, celular, email, senha
          ) VALUES ( ?, ?, ?, ?, ? )`,
          [dados.nome, dados.cpf, dados.celular,
          dados.email, dados.senha]
        )
        res.status(201).json({
            mensagem: "Cliente cadastrado, id = " + resultado[0].insertId
        })
    } catch (error) {
        res.status(500).json({erro: error.message})
    }
})

app.listen(port, () => {
    console.log(
        "API rodando na porta" + port
    )
  })
  
