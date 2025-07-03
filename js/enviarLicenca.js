const form = document.getElementById('form')
const nome = document.getElementById('nome')
const tel = document.getElementById('tel')
const email = document.getElementById('email')

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

const seletorArquivo = document.getElementById('selecionarArquivo');
seletorArquivo.addEventListener('change', (event) => {
    const listaArquivo = event.target.files;
    console.log(listaArquivo);

});



form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {

    const nomeValue = nome.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    

    if (nomeValue === '') {
        erroValidacao(nome, 'Preencha esse campo')

    } else {
        successValidacao(nome)
    }

    if (telValue === '') {
        erroValidacao(tel, 'Preencha esse campo')
    } else {
        successValidacao(tel)
    }

    if (emailValue === '') {
        erroValidacao(email, 'Preencha esse campo')
    } else {
        successValidacao(email)

    }
}

function erroValidacao(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'

}

function successValidacao(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'

}