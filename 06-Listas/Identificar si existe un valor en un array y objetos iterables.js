// .some()
const array = [3, 7, 2, 4, 5, 6, 76, 233, -2, 10];
const res = array.some(valor => valor < 0);

console.log(res);

const existe = array.some(valor => valor === 5);
console.log(existe);

const listaObjetos = [
    {nombre: "Juan", edad: 21},
    {nombre: "Lucia", edad: 21},
    {nombre: "Maria", edad: 30},
    {nombre: "Julian", edad: 11},
    {nombre: "Francisco", edad: 23},
]

const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan" );
console.log(existeJuan);

// como obtener una lista a partir de un objeto iterable
const str = "Hola soy Juan";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);



const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);