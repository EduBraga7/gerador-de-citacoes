// 1. Criamos uma lista (array) de citações.
// Cada citação é um objeto com duas propriedades: 'text' e 'author'.
const quotes = [
    {
        text: "A única maneira de fazer um excelente trabalho é amar o que você faz.",
        author: "Steve Jobs"
    },
    {
        text: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin"
    },

    {
        text: "Seja como for o que penses, creio que é melhor dizê-lo com boas palavras.",
        author: "William Shakespeare"
    },

    {
        text: "Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções.",
        author: "Pequena Sereia"
    },

    {
        text: "A morte não é nada para nós, pois, quando existimos, não existe a morte, e quando existe a morte, não existimos mais.",
        author: "Epicuro"
    },

    {
        text: "A vida é maravilhosa se não se tem medo dela.",
        author: "Charles Chaplin"
    },

    {
        text: "A vida sem luta é um mar morto no centro do organismo universal.",
        author: "Machado de Assis"
    }
];


// 2. "Pegamos" os elementos do HTML que vamos p
// recisar manipular.
// Usamos o 'document.getElementById' para encontrar o elemento pelo 'id' que demos a ele.
const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-btn')


// 3. Criamos a função que será executada quando o botão for clicado.
function getNewQuote() {
    // Escolhe um número aleatório entre 0 e o tamanho da nossa lista de citações.
    // Math.random() gera um número entre 0 e 1 (ex: 0.5)
    // Multiplicamos pelo tamanho da lista (ex: 0.5 * 7 = 3.5)
    // Math.floor() arredonda para baixo (ex: 3.5 vira 3)
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Pegamos a citação aleatória da lista usando o número que sorteamos.
    const randomQuote = quotes[randomIndex];

    // 4. Atualizamos o HTML com o texto e o autor da citação sorteada.
    quoteTextElement.textContent = randomQuote.text;
    quoteAuthorElement.textContent = "- " + randomQuote.author;
}

// 5. Finalmente, dizemos ao JavaScript para "ouvir" o evento de clique no botão.
// Quando o botão 'newQuoteButton' for 'click'-ado, ele deve executar a função 'getNewQuote'.
newQuoteButton.addEventListener('click', getNewQuote);


/* ======================================= */
/* === FUNCIONALIDADE DO BOTÃO COPIAR ==== */
/* ======================================= */

// 1. "Pegamos" o novo botão que criamos no HTML
const copyButton = document.getElementById('copy-btn');
// 2. Criamos a função que será executada ao clicar em "Copiar"
function copyQuoteToClipboard() {
    
    // Pegamos o texto ATUAL que está na tela
    const currentQuote = quoteTextElement.textContent;
    const currentAuthor = quoteAuthorElement.textContent;

    // Verificamos se o autor não está vazio (para não copiar o texto inicial)
    if (currentAuthor === "") {
        // Se não tiver autor, apenas paramos a função
        return; 
    }

    const textToCopy = `"${currentQuote}" ${currentAuthor}`;

    // 3. Usamos a API do Navegador (Clipboard) para copiar o texto
    navigator.clipboard.writeText(textToCopy).then(() => {
        
        /* SUCESSO: O texto foi copiado */
        
        // Salvamos o texto original do botão ("Copiar")
        const originalButtonText = copyButton.textContent;
        
        // Damos um feedback visual, mudando o texto do botão
        copyButton.textContent = 'Copiado!';
        
        // Usamos 'setTimeout' para voltar o texto ao normal depois de 2 segundos (2000 ms)
        setTimeout(() => {
            copyButton.textContent = originalButtonText;
        }, 2000);

    }).catch(err => {
        /* ERRO: Não foi possível copiar */
        console.error('Falha ao copiar texto: ', err);
        alert("Desculpe, não foi possível copiar o texto.");
    });
}

// 4. Adicionamos o "ouvinte" de clique no botão de copiar
copyButton.addEventListener('click', copyQuoteToClipboard);