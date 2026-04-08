/* 
- FOR 
1) INICIALIZAÇÃO - Criar uma variavel e colocar um valor inicial para ela

2) CONDIÇÃO - Enquanto for true, o laço continuará iterando.
              ELE irá verificar antes de cada iteração

3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço da uma volta

for ([inicialização]; [condição]; [expressão final]){
     
         (codigo aqui)
}
*/


const users = ['Maria', 'Aline', 'João'] // lenght(Tamanho do array)

for (let i = 0; i < users.length; i++) {

    console.log(users[i])
}


let soma = 0;

for (let i = 1; i <= 5; i++) {
  soma += i;
}

console.log(soma); //15



for (let i = 1; i <= 10; i++) {
  console.log(i);
}




let soma2 = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    soma2 += i;
  }
}

console.log(soma); // 15 - soma dos pares



