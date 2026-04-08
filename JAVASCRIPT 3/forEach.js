/* 

  ForEach(item, index, array) ---->> sao opcionais (array e index)

 */

const users = [
    { name: 'Vitor', age: 28, contact: '(63) 99295-7998' },
    { name: 'Rogerin', age: 65, contact: '(63) 984424771' },
    { name: 'Lurdinha', age: 50, contact: '(63) 984313038' },
]

users.forEach(function (item, i , array)  {
    
    console.log(item)
    console.log(i)
    console.log(array)
});