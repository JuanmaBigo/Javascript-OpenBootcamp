const array = [1, 5, 7, 4, 7, 9, 10];

const array2 = array.map(valor => valor*2)

console.log(array2);

const dobleDelValor = valor => valor * 2;

function doble(valor){
    return valor * 2
}

console.log(dobleDelValor(6));
console.log(doble(6));

const array3 = array.map(dobleDelValor);

console.log(array3);


console.log(typeof(100))

let a=4
let b=5
(a,b)=> c