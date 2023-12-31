import { documentosColecao } from "./dbConnect.js";

function obterDocumentos(){
    const documentos = documentosColecao.find().toArray();
        return documentos;
}

function adicionarDocumento(nome){
    const resultado = documentosColecao.insertOne({ 
        nome: nome,
        texto: ""
    
     })

     return resultado;
}

function encontrarDocumento(nome){
    // encontrar um documento no banco de dados onde a propriedade nome seja igual ao nome passado como parametro
         const documento = documentosColecao.findOne({
         nome: nome
    })

        return documento;
  }

function atualizaDocumento(nome, texto) {
    const atualizacao = documentosColecao.updateOne({ 
        nome: nome
     }, {
        $set: {
            texto: texto
        }
     })

     return atualizacao;
}

function excluirDocumento(nome){
    const resultado = documentosColecao.deleteOne({ 
        nome,
     })
     return resultado
}





export { encontrarDocumento, atualizaDocumento, obterDocumentos, adicionarDocumento, excluirDocumento }