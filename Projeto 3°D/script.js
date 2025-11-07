const mensagens = [
    "Um pequeno passo para o homem, um grande passo para o dev!",
    "Se seu código der erro, pegue um café e levante a cabeça.",
    "Grandes códigos começam com pequenas linhas.",
    "A tecnologia é o futuro!",
    
    ];
    
    document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botaoMensagem");
    const msg = document.getElementById("mensagem");
    
    if (botao) {
    botao.addEventListener("click", () => {
    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    msg.textContent = aleatoria;
    });
    }
    });