
import io from "./servidor.js";
import { encontrarDocumento, atualizaDocumento } from "./documentosDb.js";


io.on("connection", (socket) => {

    socket.on("obter_documentos", () => {
        console.log("O clciente está solicitando os documentos");
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

    

})


