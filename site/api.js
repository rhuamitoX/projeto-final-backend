// Endereços base da API
const BASE_URL = 'http://localhost:3000';

/**
 * Busca a lista de jogos cadastrados na API
 * @returns {Promise<Array>} Lista de jogos
 */
async function buscarJogos() {
    try {
        const response = await fetch(`${BASE_URL}/jogos`);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição dos jogos: HTTP ${response.status}`);
        }

        const jogos = await response.json();
        return jogos;
    } catch (error) {
        console.error('Falha ao buscar jogos:', error);
        return [];
    }
}

/**
 * Busca a lista de animes cadastrados na API
 * @returns {Promise<Array>} Lista de animes
 */
async function buscarAnimes() {
    try {
        const response = await fetch(`${BASE_URL}/anime`);

        if (!response.ok) {
            throw new Error(`Erro na requisição dos animes: HTTP ${response.status}`);
        }

        const animes = await response.json();
        return animes;
    } catch (error) {
        console.error('Falha ao buscar animes:', error);
        return [];
    }
}

/**
 * Busca tanto jogos quanto animes simultaneamente
 * @returns {Promise<{jogos: Array, animes: Array}>}
 */
async function buscarTodosOsDados() {
    try {
        // Promise.all executa as duas requisições em paralelo para maior performance
        const [jogos, animes] = await Promise.all([
            buscarJogos(),
            buscarAnimes()
        ]);

        return { jogos, animes };
    } catch (error) {
        console.error('Erro ao carregar dados unificados:', error);
        return { jogos: [], animes: [] };
    }
}

// ==========================================
// Exemplo de execução e manipulação dos dados
// ==========================================
async function inicializar() {
    console.log('Iniciando conexão com a API...');

    const { jogos, animes } = await buscarTodosOsDados();

    console.log('--- JOGOS ENCONTRADOS ---');
    jogos.forEach(jogo => {
        const dataFormatada = new Date(jogo.data_lançamento).toLocaleDateString('pt-BR');
        console.log(`[ID ${jogo.id}] ${jogo.titulo}`);
        console.log(`   Lançamento: ${dataFormatada}`);
        console.log(`   Sinopse: ${jogo.sinopse}`);
    });

    console.log('\n--- ANIMES ENCONTRADOS ---');
    animes.forEach(anime => {
        console.log(`[ID ${anime.id}] ${anime.titulo}`);
        console.log(`   Status: ${anime.status} | Episódios: ${anime.numero_episodios} | Estúdio: ${anime.estudio}`);
        console.log(`   Sinopse: ${anime.sinopse}`);
    });
}

// Executa a função principal
inicializar();