let message = "Estou estudando os fundamentos do Javascript.";

// comprimento de uma string
console.log(message.length); // 44

let password = "1234";

if(password.length < 6) {
  console.log("A senha deve ter no mínimo 6 caracteres.");
}

// quantos digitos tem um número
let value = 12345
console.log(String(value).length); // 5
console.log(value.toString().length); // 5