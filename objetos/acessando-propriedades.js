const user = {
  name: 'João',
  email: "joao@email.com",
  message: function() {
    //console.log(`Olá, ${user.name}!`)
    console.log(`Olá, ${this.name}!`) 
    // "this" nao funciona com arrow function
  }
}

user.message()