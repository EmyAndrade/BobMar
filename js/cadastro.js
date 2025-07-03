function exibirAlert() {
    var alert = document.getElementById('myAlert');
    alert.style.display = 'block';
}

function fecharAlert() {
    var alert = document.getElementById('myAlert');
    alert.style.display = 'none';
}

function pegaDados() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const criarSenha = document.getElementById("criarSenha").value;
    const repetirSenha = document.getElementById("repetirSenha").value;


    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("CPF: " + cpf);
    console.log("Criar uma senha forte: " + criarSenha);
    console.log("Repita sua senha: " + repetirSenha);


    document.getElementById("formulario").reset();
}

function formatarCPF(campo) {
    var cpf = campo.value.replace(/\D/g, '');
    
    // mascara
    if (cpf <= 3) {
        campo.value = cpf;
    } else if (cpf.length <= 6) {
        campo.value = cpf.slice(0, 3) + '.' + cpf.slice(3);
    } else if (cpf.length <= 9) {
        campo.value = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6);
    } else {
        campo.value = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    }
}