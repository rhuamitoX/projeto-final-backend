CREATE TABLE jogos 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 titulo VARCHAR(100) NOT NULL,  
 data_lançamento DATE NOT NULL,  
 sinopse TEXT NOT NULL
);
INSERT INTO jogos (titulo, data_lançamento, sinopse) VALUES
('Chrono Trigger', '1995-03-11', 'Um RPG por turnos onde um grupo de jovens viaja por diferentes épocas para impedir uma catástrofe global.'),
('Crash Bandicoot', '1996-09-09', 'Jogo de plataforma 3D onde um marsupial geneticamente modificado atravessa ilhas para resgatar sua namorada e deter o Dr. Neo Cortex.'),
('Sonic the Hedgehog', '1991-06-23', 'Plataforma 2D de alta velocidade onde um ouriço azul corre por fases vibrantes para impedir que o Dr. Robotnik reúna as Esmeraldas do Caos.'),
('Kirby Super Star', '1996-03-21', 'Jogo de plataforma 2D dividido em vários modos de aventura, onde Kirby copia as habilidades dos inimigos para salvar a Dream Land.'),
('Mega Man X', '1993-12-17', 'Jogo de ação e plataforma 2D ambientado no futuro, onde o androide X luta contra robôs rebeldes conhecidos como Mavericks.'),
('Super Mario World', '1990-11-21', 'Plataforma 2D onde Mario e Luigi exploram a Terra dos Dinossauros ao lado de Yoshi para resgatar a Princesa Toadstool de Bowser.'),
('Ratchet & Clank', '2002-11-04', 'Jogo de ação, plataforma e tiro em terceira pessoa onde um mecânico alienígena e um pequeno robô viajam pela galáxia usando armas criativas.'),
('Rayman Legends', '2013-08-29', 'Plataforma 2D rítmico e colorido onde Rayman e seus amigos atravessam mundos pintados para resgatar os Teensies de pesadelos.'),
('Donkey Kong Country', '1994-11-21', 'Jogo de plataforma 2D onde Donkey Kong e Diddy Kong atravessam a selva para recuperar seu estoque de bananas roubado pelos Kremlings.'),
('The Legend of Zelda: Ocarina of Time', '1998-11-21', 'Jogo de ação e aventura em 3D onde Link viaja entre a infância e a vida adulta para impedir que Ganondorf conquiste Hyrule.'),

CREATE TABLE anime 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 tituloVARCHAR(100) NOT NULL,  
 sinopse TEXT NOT NULL,  
 status VARCHAR(50) NOT NULL,  
 numero_episodios INT NOT NULL,  
 estudio VARCHAR(100) NOT NULL
);
INSERT INTO anime (titulo, sinopse, status, numero_episodios, estudio) VALUES
('Dragon Ball Z', 'Um grupo de guerreiros liderado por Goku defende a Terra contra ameaças alienígenas, androides e criaturas mágicas cada vez mais poderosas.', 'Finalizado', 291, 'Toei Animation'),
('Naruto', 'Um jovem ninja hiperativo e rejeitado por sua vila busca reconhecimento e sonha em se tornar o Hokage, o líder máximo de sua aldeia.', 'Finalizado', 220, 'Pierrot'),
('One Piece', 'Monkey D. Luffy e sua tripulação de piratas navegam pelos mares em busca do tesouro supremo, o One Piece, para que ele se torne o Rei dos Piratas.', 'Em andamento', 1122, 'Toei Animation'),
('Spy x Family', 'Um espião precisa formar uma família falsa para cumprir uma missão secreta, sem saber que sua esposa é uma assassina de aluguel e sua filha adotiva é telepata.', 'Em andamento', 37, 'Wit Studio / CloverWorks'),
('Pokémon', 'Ash Ketchum viaja por diversas regiões ao lado de seu parceiro Pikachu capturando criaturas e batalhando em ginásios para se tornar um Mestre Pokémon.', 'Finalizado', 1234, 'OLM'),
('Digimon', 'Sete crianças são transportadas para o Digimundo durante um acampamento de verão e precisam se unir a monstros digitais para salvar tanto esse mundo quanto a Terra.', 'Finalizado', 54, 'Toei Animation'),
('Attack on Titan', 'Em um mundo onde a humanidade vive cercada por muralhas gigantes para se proteger de titãs devoradores de humanos, Eren Yeager jura exterminar todas essas criaturas.', 'Finalizado', 94, 'Wit Studio / MAPPA'),
('Dandadan', 'Dois estudantes do ensino médio — uma garota que acredita em fantasmas e um garoto obcecado por alienígenas — descobrem que ambos existem e enfrentam ameaças sobrenaturais.', 'Em andamento', 12, 'Science SARU'),
('Demon Slayer', 'Após ter sua família massacrada e sua irmã transformada em demônio, Tanjiro Kamado se torna um caçador de oni em busca de vingança e de uma cura para ela.', 'Finalizado', 63, 'ufotable'),
('Yu Yu Hakusho', 'Após morrer atropelado ao salvar uma criança, o delinquente Yusuke Urameshi ganha uma segunda chance e se torna um Detetive Sobrenatural encarregado de investigar casos envolvendo demônios.', 'Finalizado', 112, 'Pierrot');