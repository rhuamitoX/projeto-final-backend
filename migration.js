const db = require("./db")

async function criar_estrutura() {
    await db.pool.query(`
    DROP TABLE IF EXISTS `cliente`;
    CREATE TABLE `cliente` (
        `id` int NOT NULL AUTO_INCREMENT,
        `nome` varchar(100) NOT NULL,
        `cpf` char(14) NOT NULL,
        `celular` char(14) NOT NULL,
        `email` varchar(100) NOT NULL,
        `senha` varchar(512) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `cpf` (`cpf`),
        UNIQUE KEY `email` (`email`)
    `)
}