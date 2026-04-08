// EXEMPLO FUNCTION = SIMPLES
function sayMyName(name) {
    console.log(`O nome é: ${name}`)
}

sayMyName("Vitor Marinho")


// EXEMPLO FUNCTION = SOMA DE NOME , ADIÇÃO DE NOME NO PARAMETRO

function sum(name, name2) {
    console.log(`o nome todo junto é: ${name} ${name2}`)
}

sum("Vitor", "Marinho")


// EXEMPLO FUNCTION - SOMA DE VALORES 

function sum2(value, value2, value3) {
    console.log(`A soma dos valores é: ${value + value2 + value3}`)
}

sum2(9871561, 181651, 21654156)


// EXEMPLO FUNCTION - SUBTRAÇÃO DE VALORES
function sub(value, value2) {
    console.log(`A subtração dos valores é: ${value - value2}`)
}

sub(80, 90)

// EXEMPLO FUNCTION - DIVISÃO DE VALORES
function div(value, value2, value3, value4) {
    console.log(`A divisão dos valores é: ${value / value2 / value3 / value4}`)
}

div(1000, 1916, 1910, 1880)

// EXEMPLO FUNCTION - INCREMENTO DE VALORES        
function incremente(value) {
    console.log(`O valor do incremento é: ${value++}`)
}

incremente(10000)

// EXEMPLO FUNCTION - EXPONENCIAL DE VALORES
function exponencial(value, value2) {
    console.log(`O valor do exponencial é: ${value ** value2}`)
}

exponencial(10, 10)


// EXEMPLO FUNCTION - RESTO DE VALORES
function rest(value, value2) {
    console.log(`o valor do resto é: ${value % value2}`)
}

rest(180, 987)

function rest2(value, value2, value3) {
    console.log(`o valor do resto é: ${value %= value2 %= value3}`)
}

rest2(180, 987, 100)


// EXEMPLO FUNCTION - MULTIPLICACAO DE VALORES COM ATRIBUIÇÃO
let result = 90
function mult(value, value2, value3) {
    console.log(`o valor da multiplicação é: ${value *= value2 *= value3 *= result}`)
}

mult(result, 90, 90, 90)