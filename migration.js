const db = require("./db")
async function criar_estrutura() {
    try{

    await db.pool.query(`
    DROP TABLE IF EXISTS cliente;
    CREATE TABLE cliente (
        id int NOT NULL AUTO_INCREMENT,
        nome varchar(100) NOT NULL,
        cpf char(14) NOT NULL,
        celular char(14) NOT NULL,
        email varchar(100) NOT NULL,
        senha varchar(512) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY cpf (cpf),
        UNIQUE KEY email (email)
    ) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    INSERT INTO cliente VALUES (13,'José Souza','137.604.709-80','(92)66613-4200','jose1@gmail.com','$2b$10$ZO8kK3AYFGasDV.SG3ZgMOvOcn4UVHKgHmXkLeik4SLOJ1aCZ/IJC'),(15,'José Souza','137.604.709-81','(92)66613-4200','jose2@gmail.com','$2b$10$rnW15AUvWmzVP2LfaCyc2Oql2dcqp1un8C552GZbqjIMGDEMQ7Usy'),(17,'Rhuan Silva','111.222.333-44','(92)66613-4200','rhuan@gmail.com','$2b$10$ae0VQLO6PjP6wuGAYO11c.HVOjW77Ltf6ymvawwPWjNmZeB3NebQC');

    `)
    console.log("migration realizado")
    } catch(error) {
        console.log(error)
    }
}
criar_estrutura() 