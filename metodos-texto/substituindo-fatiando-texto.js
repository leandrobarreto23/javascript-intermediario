let message = "Estou estudando os fundamentos do Javascript.";

// substuir parte de um texto.
console.log(message.replace("Javascript","Python"))

// extraindo parte de um texto (start, end).
console.log(message.slice(6, 30))

// extraindo parte de um texto de trás pra frente (end, start).
console.log(message.slice(-11))


// removendo espacos no comeco e fim de uma string
let textWithSpace = "   Texto com espacos no inicio e fim   ";

console.log(textWithSpace.trim())