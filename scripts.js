// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Função para exibir a mensagem de "Obrigado"
    function showThankYouMessage() {
        // Selecionando o elemento da mensagem
        const thankYouMessage = document.getElementById("thank-you");
        // Removendo a classe 'hidden' para mostrar a mensagem
        thankYouMessage.classList.remove("hidden");
        // Definindo um atraso para a animação de opacidade
        setTimeout(function() {
            thankYouMessage.style.opacity = 1;
        }, 100); // Pequeno atraso para garantir a transição
    }

    // Definindo um atraso antes de mostrar a mensagem de "Obrigado"
    setTimeout(showThankYouMessage, 6000); // Atraso de 6 segundos antes de exibir a mensagem

    // Opcional: Manter a mensagem visível por algum tempo antes de escondê-la novamente
    // setTimeout(function() {
    //     const thankYouMessage = document.getElementById("thank-you");
    //     thankYouMessage.style.opacity = 0;
    //     setTimeout(function() {
    //         thankYouMessage.classList.add("hidden");
    //     }, 2000); // Tempo para a animação de desaparecimento
    // }, 10000); // Tempo que a mensagem permanecerá visível
});
