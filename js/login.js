function pegaDados() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log("email: " + email);
    console.log("senha: " + senha);

    document.getElementById("formulario").reset();
}