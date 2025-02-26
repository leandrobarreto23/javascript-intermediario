// Objeto
// colecao de dados ou funcionalidades
// podem ter propriedades e métodos

// Criar um objeto vázio
const objeto = {}
console.log(typeof objeto)

// criar um objeto com propriedades e métodos
const user = {
  //propriedades
  email: "lucas@email.com",
  age: 20,
  name: {
    first_name: "Lucas",
    last_name: "Silva"
  },
  address: {
    location: "Rua 1",
    number: 123,
    city: "São Paulo",
    postal_code: "12345-678"
  },
  // método
  message: () => {
    console.log("Olá, tudo bem?")
  }
}

// acessando propriedades e metodos usando a notacao de ponto
console.log(user.email)

// acessando propriedade de objetos aninhados
console.log(user.name.first_name)

// chamando um método do objeto
user.message()

// notacao de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()