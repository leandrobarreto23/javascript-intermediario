// OPERADOR DE COALESCENCIA NULA (??)
// O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operando do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.

let content = null

// se content for null ou undefined, exibe "Conteúdo padrão"
console.log(content ?? "Conteúdo padrão")

const user = {
  name: 'John Doe',
  picture: undefined,
}

// se user.picture for null ou undefined, exibe "default.png"
console.log(user.picture ?? "default.png")