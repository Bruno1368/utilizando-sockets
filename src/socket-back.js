
import io from "./servidor.js";
import { encontrarDocumento, atualizaDocumento, adicionarDocumento, excluirDocumento } from "./documentosDb.js";
import { obterDocumentos } from "./documentosDb.js";
import { documentosColecao } from "./dbConnect.js";


io.on("connection", (socket) => {

    socket.on("obter_documentos", async (devolverDocumentos) => {
        const documentos = await obterDocumentos();

        devolverDocumentos(documentos)
        
    }) 


    socket.on("adicionar_documento", async(nome) => {

        const documentoExiste = (await encontrarDocumento(nome)) !== null 

        if(documentoExiste) {
            socket.emit("documento_existente", nome)
        } else {
            const resultado = await adicionarDocumento(nome)
            if(resultado.acknowledge){
                io.emit("adicionar_documento_interface", nome)
            }

        }
        
        
        
    })
    
    socket.on("selecionar_documento", async (nomeDocumento) => {
        socket.join(nomeDocumento)

        const documento = await encontrarDocumento(nomeDocumento);

        console.log(documento)


        if(documento){
            socket.emit("texto_documento", documento.texto)
        }


    })

    socket.on("texto_editor", async ({texto, nomeDocumento}) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if(atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto)
        }

    })

    socket.on("excluir_documento", async (nome) => {
        const resultado = await excluirDocumento(nome)
        

        if(resultado.deletedCount) {
            io.emit("excluir_documento_sucesso", nome)
        }
    })
    

})


