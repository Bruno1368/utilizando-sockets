import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://bruno:123@brunocluster.qkc68lq.mongodb.net/?retryWrites=true&w=majority")

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("aula-websockets")
    documentosColecao = db.collection("documentos")

    console.log("Conectado ao banco de dados com sucesso")

} catch (error) {
    console.log(error);
}

export { documentosColecao };