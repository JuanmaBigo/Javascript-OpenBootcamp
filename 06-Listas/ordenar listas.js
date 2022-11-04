// .sort() -> MODIFICA EL ARRAY
const array = [2, 3, 6, 7, 2, 1, 8, 3];

console.log(array);

array.sort((a, b) => {
    if (a < b){
        return -1;
    }else if (a > b){
        return +1;
    } else {
        return 0
    }
})
console.log(array)

// Ordenar unuicamente arrays numericos
const arrayNumerico = [4,1,2,6,7,8,9,34,5,84,2,15,7,0];

arrayNumerico.sort((a,b) => a - b);
console.log(arrayNumerico);

//en arrays con objetos
const listaObjetos = [
    {nombre: "Juan", edad: 21},
    {nombre: "Lucia", edad: 21},
    {nombre: "Maria", edad: 30},
    {nombre: "Julian", edad: 11},
    {nombre: "Francisco", edad: 23},
]

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)