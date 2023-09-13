import "dotenv/config";

import registrarEventosCadastro from "./registraEventos/cadastro.js";
import registraEventosDocumento from "./registraEventos/documento.js";
import registrarEventosInicio from "./registraEventos/inicio.js";
import registrarEventosLogin from "./registraEventos/login.js";

import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuario = io.of("/usuarios")

nspUsuario.use(autorizarUsuario)

nspUsuario.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuario)
  registraEventosDocumento(socket, nspUsuario)
})

io.on("connection", (socket) => {
  
  
  registrarEventosCadastro(socket, io)
  registrarEventosLogin(socket, io)
  
});
