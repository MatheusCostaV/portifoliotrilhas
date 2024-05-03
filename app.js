// Seleciona o formulário e adiciona um ouvinte de evento 'submit'
document.querySelector('form').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    // Cria um objeto para armazenar os dados do formulário
    var formData = {};

    // Pega todos os campos de entrada do formulário
    var inputs = this.querySelectorAll('input');

    // Itera sobre cada campo de entrada
    for (var i = 0; i < inputs.length; i++) {
        // Adiciona o valor do campo de entrada ao objeto formData
        formData[inputs[i].name] = inputs[i].value;
    }

    // Faz algo com os dados do formulário (por exemplo, envia para um servidor)
    console.log(formData);
});

// Seleciona o botão 'Cancelar' e adiciona um ouvinte de evento 'click'
document.querySelector('button[type="reset"]').addEventListener('click', function(event) {
    // Previne o comportamento padrão do botão
    event.preventDefault();

    // Limpa todos os campos de entrada do formulário
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
});
