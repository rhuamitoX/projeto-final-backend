CREATE TABLE jogos 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 titulo VARCHAR(100) NOT NULL,  
 data_lançamento DATE NOT NULL,  
 sinopse TEXT NOT NULL
); 

CREATE TABLE anime 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 titulo VARCHAR(100) NOT NULL,  
 sinopse TEXT NOT NULL,  
 status VARCHAR(50) NOT NULL,  
 numero_episodios INT NOT NULL,  
 estudio VARCHAR(100) NOT NULL
);

