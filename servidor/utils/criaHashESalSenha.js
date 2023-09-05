import { randomBytes, scryptSync } from "crypto"

//função para criptografar a senha fornecida, usando os metodos do objeto crypto
function criaHashESalSenha(senhaDigitada) {
    const salSenha = randomBytes(16).toString("hex")

    const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString("hex")

    return { salSenha, hashSenha, }
}


export default criaHashESalSenha;