document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de submit ao formulário
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtém o valor máximo fornecido pelo usuário
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo); // Converte o valor para um inteiro

        // Gera um número aleatório entre 1 e o número máximo
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1); // Arredonda para baixo e adiciona 1

        // Exibe o número sorteado no elemento com id 'resultado-valor'
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    });
});