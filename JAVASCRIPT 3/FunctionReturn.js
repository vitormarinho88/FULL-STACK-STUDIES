/* 
   <------Functions---->
   
   função void (vazia), nao retorna nada.
   função return, retorna um valor para quem chamou a função.


   function sum(value, value2) {       // void
      console.log(value + value2)
   }



 function sum(value, value2) {
   const result = value + value2
   return result
 }

 console.log(sum(10, 20))

*/



const cart = [10, 224, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let finalWithoutDiscount = 0         //  Acumuladores inicia antes da função !!!!


function calculateDiscount(price, discount) {      // FUNÇÃO CALCULE DESCONTO 
  const result = (price * discount) / 100
  return result
}

cart.forEach(value => {                        // FUNÇÃO SOMAR 
  
  finalWithoutDiscount += value
  
  if (value > 30) {
    const discount = calculateDiscount(value, 10)
    finalValueWithDiscount += value - discount
  } else {
    finalValueWithDiscount += value
  }
   
})

const economizou = finalValueWithDiscount - finalWithoutDiscount

console.log(`O valor final da compra foi ${finalWithoutDiscount}, 
porém voce teve desconto, irá pagar apenas ${finalValueWithDiscount.toFixed(0)}, 
voce economizou ${economizou.toFixed(0)} `)

