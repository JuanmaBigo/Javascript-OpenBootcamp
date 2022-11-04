// Metodos mas avanzados
// .map() 

const array = ["Santa Fe", "Cordoba", "San Luis", "Mendoza", "Buenos Aires"];

const val = array.forEach(v => {
    console.log(v);
    return 4;
})
console.log(val);

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray)


// .filter()
const listaObjetos = [
    {nombre: "Juan", edad: 21},
    {nombre: "Lucia", edad: 31},
    {nombre: "Maria", edad: 33},
    {nombre: "Julian", edad: 11},
    {nombre: "Francisco", edad: 23},
]

// const personasMayores = listaObjetos.filter(obj => {
// if (obj.edad > 30){
//     return true;
// }else{
//     return false;
// }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Maria");
console.log(nuevaLista);


// .reduce()
const valores = [3, 56, 4, 435, 5];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado+cur;
})

console.log(suma);
