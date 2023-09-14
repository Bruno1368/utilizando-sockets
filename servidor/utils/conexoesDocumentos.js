const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}

function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

function removerConexao(nomeDocumento, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex((conexao) => {
    return (
      conexao.nomeDocumento === nomeDocumento &&
      conexao.nomeUsuario === nomeUsuario
    );
  });

  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
}

export { adicionarConexao, obterUsuariosDocumento, removerConexao };

// exemplo
const pessoas = [
    {
        nome: "joao", idade: 35,
    },
    {
        nome: "alice", idade: 25,
    },
    {
        nome: "bruno", idade: 40
    }

]

const indexPessoa = pessoas.findIndex((pessoa) => {
    return pessoa.nome === "bruno" && pessoa.idade === 40
})


console.log(indexPessoa)

