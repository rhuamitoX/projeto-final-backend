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

// npm i jsonwebtoken
const jwt = require("jsonwebtoken")

// npm i dotenv
const dotenv = require("dotenv")
dotenv.config()

// npm i cors
const cors = require("cors")
app.use(cors())


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

app.post("/login", async (req,res) => {
    try {
        const user = req.body
        const resultado = await db.pool.query(
            'SELECT id,nome,email, senha FROM cliente WHERE email = ?' ,
            [user.email]
        )  
        const dados_bd = resultado[0][0] 
        if(!dados_bd) {
            return res.status(401).json({mensagem: "Email ou senha inválido!"})
        }
        const senhaValida = await bcrypt.compare(user.senha, dados_bd.senha)
        if(!senhaValida) {
            return res.status(401).json({mensagem: "Email ou senha inválido!"})
        }
        const payload = {
            id: dados_bd.id,
            email: dados_bd.email
        } 
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2m' })
        return res.status(200).json({nome: dados_bd.nome, token: token})
    } catch (error) {
        res.status(500).json({erro: error.message})
    }
})                 
            



app.get("/cliente", async(req , res)=>{
    try{
        const clientes = await db.pool.query(`SELECT * FROM cliente`)
        res.status(200).json(clientes[0])
    } catch(error) {
        res.status(500).json({resposta: error.message})
    }  
})



app.get("/cliente/perfil", autenticar, async (req,res) => {
    const id = req.usuario.id
    try{
        const clientes = await db.pool.query('SELECT * FROM cliente WHERE id = ?', [id])
        const cliente= clientes[0][0] 
        delete cliente.senha
        res.status(200).json(cliente)
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})


app.listen(port, () => {
    console.log("API rodando na porta" + port)
})

function autenticar(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null){
        return res.status(401).json({erro: "Token não enviado, usar Authorization Bearer <token>"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
        if (err) return res.status(403).json({erro: "Token inválido"})
        req.usuario = usuario
        next()
    })   
}