function formatarCampoMoeda(input) {
    // Remove caracteres não numéricos
    let valor = input.value.replace(/\D/g, '');

    // Adiciona o símbolo da moeda, separadores de milhares e formatação de centavos
    input.value = 'R$ ' + (parseFloat(valor) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    // Se desejar, você pode armazenar o valor numérico sem formatação em um atributo data
    input.setAttribute('data-valor-numerico', parseFloat(valor) / 100);
  }