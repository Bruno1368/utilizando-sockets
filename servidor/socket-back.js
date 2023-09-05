
import registrarEventosCadastro from "./registraEventos/cadastro.js";
import registraEventosDocumento from "./registraEventos/documento.js";
import registrarEventosInicio from "./registraEventos/inicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io)
  registraEventosDocumento(socket, io)
  registrarEventosCadastro(socket, io)
  
});
