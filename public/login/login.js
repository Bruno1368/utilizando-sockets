import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.getElementById("form-login");

// ouvir um evento de form, que foi importada acima
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    //pegar a senha do usuário
    const nome = form["input-usuario"].value
    const senha = form["input-senha"].value

    emitirAutenticarUsuario({ nome, senha })

})