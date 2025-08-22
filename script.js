// Adiciona um evento para ser executado quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os botões de download
    const botoesDownload = document.querySelectorAll('.botao-download');

    // Para cada botão encontrado, adiciona um "ouvinte" de clique
    botoesDownload.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Exibe uma mensagem amigável para o usuário
            alert('Obrigado por baixar nosso material! O download começará em breve.');
        });
    });

    console.log('Script TechBelém carregado com sucesso!');

});