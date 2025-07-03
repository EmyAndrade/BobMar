function pegaDados() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;


    console.log("Nome: " + nome);
    console.log("Sobrenome: " + sobrenome);
    console.log("Telefone: " + telefone);
    console.log("Email: " + email);
    console.log("Endereco: " + endereco);

    const mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = `
        <p>Obrigado ${nome}, um profissional da nossa equipe entrará em contato dentro de 24 horas pelo número ${telefone} e email ${email}.<p>
        `;

}


function formatarNumero(telefone) {

    if (telefone.value.length == 0)
        telefone.value = "+" + telefone.value;
    if (telefone.value.length == 3)
        telefone.value = telefone.value + ' (';
    if (telefone.value.length == 7)
        telefone.value = telefone.value + ') ';
    if (telefone.value.length == 14)
        telefone.value = telefone.value + '-';

}

