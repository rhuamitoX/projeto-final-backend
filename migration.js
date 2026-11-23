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
    ) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
    INSERT INTO cliente VALUES (13,'José Souza','137.604.709-80','(92)66613-4200','jose1@gmail.com','$2b$10$ZO8kK3AYFGasDV.SG3ZgMOvOcn4UVHKgHmXkLeik4SLOJ1aCZ/IJC'),(15,'José Souza','137.604.709-81','(92)66613-4200','jose2@gmail.com','$2b$10$rnW15AUvWmzVP2LfaCyc2Oql2dcqp1un8C552GZbqjIMGDEMQ7Usy'),(17,'Rhuan Silva','111.222.333-44','(92)66613-4200','rhuan@gmail.com','$2b$10$ae0VQLO6PjP6wuGAYO11c.HVOjW77Ltf6ymvawwPWjNmZeB3NebQC');

DROP TABLE IF EXISTS jogos;
DROP TABLE IF EXISTS anime;
    CREATE TABLE jogos 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 titulo VARCHAR(100) NOT NULL,  
 data_lançamento DATE NOT NULL,  
 sinopse TEXT NOT NULL,
 caminho_img VARCHAR(200)
);
INSERT INTO jogos VALUES (1,'Chrono Trigger','1995-03-11','Um RPG por turnos onde um grupo de jovens viaja por diferentes épocas para impedir uma catástrofe global.','http://localhost:3000/img/jogos/CT.jpg'),(2,'Crash Bandicoot','1996-09-09','Jogo de plataforma 3D onde um marsupial geneticamente modificado atravessa ilhas para resgatar sua namorada e deter o Dr. Neo Cortex.','http://localhost:3000/img/jogos/CB.jpeg'),(3,'Sonic the Hedgehog','1991-06-23','Plataforma 2D de alta velocidade onde um ouriço azul corre por fases vibrantes para impedir que o Dr. Robotnik reúna as Esmeraldas do Caos.','http://localhost:3000/img/jogos/Sonic.jpg'), 
(4,'Kirby Super Star','1996-03-21','Jogo de plataforma 2D dividido em vários modos de aventura, onde Kirby copia as habilidades dos inimigos para salvar a Dream Land.','http://localhost:3000/img/jogos/kirby.webp'),(5,'Mega Man X','1993-12-17','Jogo de ação e plataforma 2D ambientado no futuro, onde o androide X luta contra robôs rebeldes conhecidos como Mavericks.','http://localhost:3000/img/jogos/MMX.png'),(6,'Super Mario World','1990-11-21','Plataforma 2D onde Mario e Luigi exploram a Terra dos Dinossauros ao lado de Yoshi para resgatar a Princesa Toadstool de Bowser.','http://localhost:3000/img/jogos/Mario.jpg'), 
(7,'Ratchet & Clank','2002-11-04','Jogo de ação, plataforma e tiro em terceira pessoa onde um mecânico alienígena e um pequeno robô viajam pela galáxia usando armas criativas.','http://localhost:3000/img/jogos/ratchet.jpg'),(8,'Rayman Legends','2013-08-29','Plataforma 2D rítmico e colorido onde Rayman e seus amigos atravessam mundos pintados para resgatar os Teensies de pesadelos.','http://localhost:3000/img/jogos/rayman.jpeg'),(9,'Donkey Kong Country','1994-11-21','Jogo de plataforma 2D onde Donkey Kong e Diddy Kong atravessam a selva para recuperar seu estoque de bananas roubado pelos Kremlings.','http://localhost:3000/img/jogos/DKC.png'), 
(10,'The Legend of Zelda: Ocarina of Time','1998-11-21','Jogo de ação e aventura em 3D onde Link viaja entre a infância e a vida adulta para impedir que Ganondorf conquiste Hyrule.','http://localhost:3000/img/jogos/ZeldaOOT.png');

CREATE TABLE anime 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 titulo VARCHAR(100) NOT NULL,  
 sinopse TEXT NOT NULL,  
 status VARCHAR(50) NOT NULL,  
 numero_episodios INT NOT NULL,  
 estudio VARCHAR(100) NOT NULL,
 caminho_img VARCHAR(200)

);
INSERT INTO anime VALUES (1,'Dragon Ball Z','Um grupo de guerreiros liderado por Goku defende a Terra contra ameaças alienígenas, androides e criaturas mágicas cada vez mais poderosas.','Finalizado',291,'Toei Animation','http://localhost:3000/img/animes/dbz.jpeg'),(2,'Naruto','Um jovem ninja hiperativo e rejeitado por sua vila busca reconhecimento e sonha em se tornar o Hokage, o líder máximo de sua aldeia.','Finalizado',220,'Pierrot','http://localhost:3000/img/animes/charuto.jpeg'),(3,'One Piece','Monkey D. Luffy e sua tripulação de piratas navegam pelos mares em busca do tesouro supremo, o One Piece, para que ele se torne o Rei dos Piratas.','Em andamento',1122,'Toei Animation','http://localhost:3000/img/animes/op.jpg'), 
(4,'Spy x Family','Um espião precisa formar uma família falsa para cumprir uma missão secreta, sem saber que sua esposa é uma assassina de aluguel e sua filha adotiva é telepata.','Em andamento',37,'Wit Studio / CloverWorks','http://localhost:3000/img/animes/spy.jpg'),(5,'Pokémon','Ash Ketchum viaja por diversas regiões ao lado de seu parceiro Pikachu capturando criaturas e batalhando em ginásios para se tornar um Mestre Pokémon.','Finalizado',1234,'OLM','http://localhost:3000/img/animes/pokemon.webp'),(6,'Digimon','Sete crianças são transportadas para o Digimundo durante um acampamento de verão e precisam se unir a monstros digitais para salvar tanto esse mundo quanto a Terra.','Finalizado',54,'Toei Animation','http://localhost:3000/img/animes/digimon.jpg'), 
(7,'Attack on Titan','Em um mundo onde a humanidade vive cercada por muralhas gigantes para se proteger de titãs devoradores de humanos, Eren Yeager jura exterminar todas essas criaturas.','Finalizado',94,'Wit Studio / MAPPA','http://localhost:3000/img/animes/titan.jpg'),(8,'Dandadan','Dois estudantes do ensino médio — uma garota que acredita em fantasmas e um garoto obcecado por alienígenas — descobrem que ambos existem e enfrentam ameaças sobrenaturais.','Em andamento',12,'Science SARU','http://localhost:3000/img/animes/dandadan.jpg'),(9,'Demon Slayer','Após ter sua família massacrada e sua irmã transformada em demônio, Tanjiro Kamado se torna um caçador de oni em busca de vingança e de uma cura para ela.','Finalizado',63,'ufotable','http://localhost:3000/img/animes/demonslayer.jpg'),(10,'Yu Yu Hakusho','Após morrer atropelado ao salvar uma criança, o delinquente Yusuke Urameshi ganha uma segunda chance e se torna um Detetive Sobrenatural encarregado de investigar casos envolvendo demônios.','Finalizado',112,'Pierrot','http://localhost:3000/img/animes/yuyu.jpg');

    `)
    console.log("migration realizado")
    process.exit(0)
} catch(error) {
    console.log(error)
    process.exit(1)
    }
}
criar_estrutura()
 