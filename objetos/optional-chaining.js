// OPTIONAL CHAINING (?.) - Encadeamento opcional
// se a propriedade ou método não existir, não irá quebrar o código, retornando undefined
// util ao explorar o conteudo de um objeto quando nao existe garantia da existencia de determinadas propriedades obrigatorias

const user = {
  id: 1,
  name: 'Lucas',
  /*
  address: {
    street: 'Av. Paulista',
    city: 'São Paulo',
    geo: {
      latitude: 47.8080,
      longitude: 13.0552
    },
  },
  message: function() {
    console.log(`Hello, ${this.name}!`);
  }
  */
}

console.log(user?.address)
console.log(user?.address?.street)
user.message?.()