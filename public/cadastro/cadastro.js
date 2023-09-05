import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

// ouvir um evento de form, que foi importada acima
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    //pegar a senha do usuário
    const nome = form["input-usuario"].value
    const senha = form["input-senha"].value

    emitirCadastrarUsuario({ nome, senha })

})