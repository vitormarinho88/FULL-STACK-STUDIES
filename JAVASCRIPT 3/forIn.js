/*
 Estrutura de repetição - LOOP

    -FOR IN
Iteraveis sobre objetos - diferente do for of
*/

const users = { name: 'Vitor', age: 28, street:"Alameda 11"}




for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}


// O for in - acessa as chaves e fazendo a interpolação no console.log()
// da para acessar os valores dentro da chave.

//users.name  -> Vitor
//users['name'] -> Vitor 

//for (const key in users) {
//  console.log(key)    
//}