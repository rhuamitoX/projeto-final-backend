CREATE TABLE jogos 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 titulo VARCHAR(100) NOT NULL,  
 data_lançamento DATE NOT NULL,  
 sinopse TEXT NOT NULL
);
INSERT INTO jogos (titulo, data_lançamento, sinopse) VALUES
('Echoes of Aethelgard', '2024-03-15', 'Um RPG de ação onde você manipula o tempo para restaurar um reino em ruínas.'),
('CyberDrive 2099', '2023-11-20', 'Jogo de corrida futurista em alta velocidade pelas pistas neon de uma metrópole vertical.'),
('Chronos & The Lost Relic', '2022-08-10', 'Plataforma 2D com quebra-cabeças temporais e um estilo de arte pintado à mão.'),
('Void Walker: Extraction', '2025-01-05', 'Shooter tático sci-fi focado em extração de recursos em estações espaciais abandonadas.'),
('Kingdoms of Sand', '2021-05-18', 'Estratégia e construção de império ambientado em um vasto deserto mágico.'),
('Aetheria: Sky Captains', '2023-09-12', 'Explore ilhas flutuantes e comande sua própria aeronave em combates aéreos.'),
('Project: Shadowfall', '2024-06-30', 'Jogo de furtividade em terceira pessoa focado na espionagem durante uma guerra fria alternativa.'),
('Mystical Forest Odyssey', '2020-10-14', 'Uma aventura relaxante sobre uma criatura da floresta que guia espíritos perdidos.'),
('Neon Abyss: Overdrive', '2022-12-01', 'Roguelite frenético onde você enfrenta deuses da tecnologia em calabouços gerados proceduralmente.'),
('Starlight Symphony', '2023-04-22', 'Jogo de ritmo espacial onde suas ações constroem a trilha sonora de cada galáxia.'),
('Mech Protocol', '2024-02-17', 'Combate tático por turnos personalizando robôs gigantes de combate.'),
('Gravekeeper\'s Legacy', '2021-07-29', 'Simulador de vida macabro e cômico onde você gerencia um cemitério medieval.'),
('Submerged: Deep Waters', '2023-10-08', 'Jogo de sobrevivência e exploração nas profundezas submarinas de um planeta alienígena.'),
('Runeblade Academy', '2022-03-03', 'Simulador escolar e RPG onde estudantes aprendem esgrima e magia elemental.'),
('Overclocked: Rogue AI', '2024-08-19', 'Puzzle de hacking em primeira pessoa para desativar uma inteligência artificial fora de controle.'),
('Valkyrie\'s Ascent', '2020-11-11', 'Ação hack and slash baseada na mitologia nórdica focada em combates contra chefes.'),
('Tales of Eldoria', '2021-09-25', 'JRPG clássico com combates por turnos e uma emocionante história sobre profecias.'),
('Iron Frontier', '2023-01-30', 'Faroeste steampunk com exploração de mundo aberto e mecânicas de sobrevivência.'),
('Pixel Dungeon Crawler', '2022-05-14', 'Uma homenagem aos jogos clássicos de exploração de masmorras em arte pixel 16-bits.'),
('Cosmic Chef', '2024-05-09', 'Jogo cooperativo divertido sobre cozinhar pratos alienígenas em um restaurante espacial.'),
('Ghost Division', '2023-07-19', 'Shooter em primeira pessoa centrado em operações especiais e táticas militares.'),
('Chrono Tides', '2022-09-27', 'Aventura narrativa sobre viagens no tempo para impedir um cataclismo marinho.'),
('Solaris Protocol', '2021-12-15', 'Terror psicológico sci-fi a bordo de uma base espacial abandonada perto do Sol.'),
('Shattered Horizons', '2024-04-01', 'RPG de sobrevivência em mundo aberto após uma anomalia quebrar a gravidade da Terra.'),
('Bard\'s Ballad', '2023-06-18', 'Aventura musical onde suas canções moldam o mundo e resolvem conflitos sem violência.');

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
('Chronicles of Aetheria', 'Um jovem descobre que consegue ver as linhas do destino e precisa impedir a ruína de sua cidade.', 'Finalizado', 24, 'Studio Sunrise'),
('Neo Tokyo Drifters', 'Corridas de motos antigravidade pelas ruas movimentadas de uma metrópole futurista.', 'Em exibição', 12, 'CyberArts Animation'),
('Kizuna Protocol', 'Estudantes formam conexões mentais com mechas biomagnéticos para defender a Terra.', 'Finalizado', 26, 'MechaWorks'),
('Mahou Gakuen: Zero', 'Em uma escola de magia, um garoto sem aptidão mágica usa a ciência pura para vencer duelos.', 'Em exibição', 12, 'Nova Pictures'),
('Soul Weaver', 'Uma tecelã de almas viaja pelo mundo espiritual para libertar fantasmas presos ao passado.', 'Finalizado', 13, 'Spirits Studio'),
('Starlight Melody', 'Um grupo de idols espaciais usa a música para espalhar esperança por galáxias devastadas.', 'Finalizado', 24, 'IdolCraft'),
('Shinobi no Kage', 'Um ninja renegado luta para proteger seu vilarejo de uma antiga seita de feiticeiros.', 'Em exibição', 24, 'ShadowFrame'),
('Cyber Blade: Executioner', 'Um detetive cibernético investiga crimes cometidos por inteligências artificiais conscientes.', 'Finalizado', 12, 'NeoGen Animation'),
('Gourmet Dungeon', 'Aventureiros exploram masmorras perigosas em busca de ingredientes raros para criar pratos lendários.', 'Em exibição', 24, 'FlavorWorks'),
('Kaze no Ryuu', 'Uma garota capaz de se comunicar com dragões de vento busca o paradeiro de seu pai desaparecido.', 'Finalizado', 12, 'Ghibli Style Lab'),
('Clockwork Heart', 'Um autômato com sentimentos humanos busca seu criador em um mundo steampunk.', 'Finalizado', 12, 'BrassMonkey Studio'),
('Void Horizon', 'A tripulação de uma nave exploradora descobre as ruínas de uma civilização alienígena avançada.', 'Em exibição', 24, 'Astra Visuals'),
('Kami-sama no Game', 'Deuses entediados convocam adolescentes para disputar um torneio de estratégia e sobrevivência.', 'Finalizado', 12, 'Mythos Production'),
('Rune Knights', 'Cavaleiros marcados por runas sagradas enfrentam uma invasão de criaturas das sombras.', 'Em exibição', 24, 'Fantasy Horizon'),
('Echoes of Solitude', 'Um drama emocionante sobre dois jovens que se comunicam através de sonhos lúcidos.', 'Finalizado', 12, 'Emotional Wave'),
('Overload Tactics', 'Um jogador prodígio de e-sports é transportado para o universo do seu jogo de estratégia favorito.', 'Em exibição', 12, 'Isekai Central'),
('Spirit Academy', 'Jovens médiuns treinam suas habilidades para harmonizar o mundo humano com o plano espiritual.', 'Finalizado', 24, 'Zenith Animation'),
('Iron Alchemist', 'Um jovem cientista tenta mesclar química moderna com alquimia proibida para salvar sua irmã.', 'Finalizado', 25, 'Alchemy Arts'),
('Celestial Resonance', 'Músicos usam instrumentos mágicos para canalizar o poder das constelações.', 'Em exibição', 12, 'Harmonic Beats'),
('Phantom Thieves of Kyoto', 'Ladrões misteriosos roubam artefatos amaldiçoados para purificar a energia da cidade.', 'Finalizado', 12, 'Nightfall Studio'),
('Dragon Alchemy', 'Um jovem aprendiz acidentalmente choca um ovo de dragão feito inteiramente de cristal.', 'Finalizado', 24, 'Mythic Tale'),
('Parallel Shift', 'Dois estudantes trocam de dimensão toda vez que dormem e precisam encontrar um jeito de voltar.', 'Em exibição', 12, 'Dimension Labs'),
('Beast Tamer Chronicles', 'Um domador de feras viaja pelo continente registrando espécies míticas ameaçadas.', 'Finalizado', 13, 'Wild Life Anime'),
('Solaris Guardians', 'Guerreiros alimentados pela energia do Sol protegem os últimos bastiões da humanidade.', 'Finalizado', 24, 'SunRay Productions'),
('Tales of the Wandering Bard', 'Um bardo itinerante coleta histórias de povos esquecidos em um mundo pós-apocalíptico.', 'Em exibição', 12, 'Wanderer Films'); 
