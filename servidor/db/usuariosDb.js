import { usuariosColecao } from "./dbConnect.js";

function cadastrarUsuario({ nome, senha}) {
 return usuariosColecao.insertOne({ 
    nome,
    senha
  })
}

export { cadastrarUsuario }