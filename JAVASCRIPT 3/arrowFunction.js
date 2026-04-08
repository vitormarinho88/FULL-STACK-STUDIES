/* Functions ARROW !!!

 Function padrão -> function() {}
 arrow function -> () => {}

 Não escrevemos "function"
 Além disso, usamos o sinal "=>" para cria-la ,
 o que lembra um flecha, fazendo ao nome "ARROW FUNCTIONS" 
*/  


function sayName(name) {
    return `seu nome é ${name}`
}

const sayName2 = (name) => `Seu nome é ${name}`

console.log(sayName('Vitor'))
console.log(sayName2('Marinho'))