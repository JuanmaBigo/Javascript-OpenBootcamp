// Iterar los valores de ina lista
const array = ["hola", 2, 90, 64, false, undefined];

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Forma ES6 (mas eficiente)
let suma = 0;
const arrayNums = [3, 6, 3, 6, 78, 87, 67];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if (valor === 90){
        return true;
    }
})

console.log(variable);

const listaObjetos = [
    {nombre: "Juan", edad: 21},
    {nombre: "Lucia", edad: 21},
    {nombre: "Maria", edad: 30},
    {nombre: "Julian", edad: 11},
    {nombre: "Francisco", edad: 23},
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Maria"){
//         return true;
//     }
// })

const objeto = listaObjetos.find(o => o.nombre === "Maria");
console.log(objeto.edad);

const {edad} = listaObjetos.find(o => o.nombre === "Julian")
console.log(edad);