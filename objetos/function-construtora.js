function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = function() {
    console.log(`O nome do produto é: ${this.name}`);
  }

  return product;
}

// uma instancia é o mesmo que criar uma nova copia de um objeto

// o new cria um novo objeto utilizando a estrutura da funcao construtora.
const product1 = new createProduct('teclado');
console.log(product1.name); // teclado
product1.details(); // O nome do produto é: teclado

const product2 = new createProduct('mouse');
console.log(product2.name); // mouse
product2.details(); // O nome do produto é: mouse

console.log(product1 === product2); // false

// exemplos de funcoes construtoras disponiveis no javascript

let myName = new String('Lucas');
console.log(myName); // String { "Lucas" }

let price = "40.6".replace(".", "");
console.log(price); // 406

let date = new Date("2024-1-1");
console.log(date); // 2024-01-01T02:00:00.000Z

function Person(name) {
  this.name = name;
  this.message = function() {
    console.log(`Olá, ${this.name}`);
  }
}

const person1 = new Person('Lucas');
console.log(person1.name); // Lucas
person1.message(); // Olá, Lucas

const person2 = new Person('Leandro');
console.log(person2.name); // 
person2.message(); // Olá, 