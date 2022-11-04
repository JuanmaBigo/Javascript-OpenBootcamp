// forma 1
import { suma, eleva, nombre } from "./modulos/matematicas.js"


const sum = suma(4,12);
console.log(sum);

const potencia = eleva(2,21);
console.log(potencia);

console.log(nombre);



// forma 2
import * as moduloMatematicas from "./modulos/matematicas.js"


const sumaa = moduloMatematicas.suma(4,12);
console.log(sumaa);

const potenciaa = moduloMatematicas.eleva(2,21);
console.log(potenciaa);

console.log(moduloMatematicas.nombre);



// forma 3
import getAutor, {libro} from "./modulos/literatura.js";


console.log(getAutor());
console.log(libro);