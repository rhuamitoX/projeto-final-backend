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

// consulta de todos os clientes
app.get("/cliente", async(req , res)=>{
    try{
        const clientes = await db.pool.query(`SELECT * FROM cliente`)
        res.status(200).json(clientes[0])
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})


// consulta de 1 cliente
// SELECT * FROM cliente WHERE id = ?;
app.get("/cliente/:id", async(req , res)=>{
    const id = req.params.id
    try{
        const clientes = await db.pool.query('SELECT * FROM cliente WHERE id = ?', [id])
        
        res.status(200).json(clientes[0])
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})


app.listen(port, () => {
    console.log(
        "API rodando na porta" + port
    )
  })
  