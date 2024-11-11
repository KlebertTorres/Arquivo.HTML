let currentIndex = 0; // Índice atual da imagem exibida
const images = document.querySelectorAll('.banner img'); // Seleciona todas as imagens dentro da seção com a classe 'banner'
const dots = document.querySelectorAll('.dot'); // Seleciona todos os pontos de navegação

// Função para mostrar a imagem correspondente ao índice fornecido
function showBanner(index) {
    // Loop através de todas as imagens
    images.forEach((img, i) => {
        // Adiciona ou remove a classe 'active' para mostrar ou ocultar a imagem atual
        img.classList.toggle('active', i === index);
    });
    // Loop através de todos os pontos de navegação
    dots.forEach((dot, i) => {
        // Adiciona ou remove a classe 'active' para mostrar qual ponto está ativo
        dot.classList.toggle('active', i === index);
    });
}

// Função para mostrar a imagem anterior
function previousBanner() {
    // Decrementa o índice atual, e se for menor que 0, vai para a última imagem
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showBanner(currentIndex); // Atualiza a exibição com o novo índice
}

// Função para mostrar a próxima imagem
function nextBanner() {
    // Incrementa o índice atual, e se for maior que o último índice, volta para 0
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showBanner(currentIndex); // Atualiza a exibição com o novo índice
}

// Função para mostrar a imagem correspondente ao ponto de navegação clicado
function currentSlide(index) {
    currentIndex = index; // Define o índice atual para o índice clicado
    showBanner(currentIndex); // Atualiza a exibição
}

// Configura um slides automático que muda a imagem a cada 3 segundos
setInterval(nextBanner, 3000);

// Função para alternar entre o modo claro e escuro
function toggleMode() {
    const body = document.body; // Seleciona o elemento <body>
    body.classList.toggle("dark-mode"); // Alterna a classe para aplicar o modo escuro
    body.classList.toggle("light-mode"); // Alterna a classe para aplicar o modo claro

    const button = document.getElementById("toggle-mode"); // Seleciona o botão de alternância
    // Altera o texto do botão de acordo com o modo atual (sol para modo claro, lua para modo escuro)
    button.innerText = body.classList.contains("dark-mode") ? "🌞" : "🌙"; //Inones Para alterar o Dark-Mode
}
