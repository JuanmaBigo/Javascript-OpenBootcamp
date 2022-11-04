
const fecha = new Date();
console.log(fecha);

// Atencion - los meses inicializan en 0 (0-Enero, 1-febrero)
const fechaNac = new Date(2001,5,29,12,30,00);
console.log(fechaNac);

const fecha3 = new Date(-1000000000000);
console.log(fecha3);

const fecha4 = new Date("October 14, 1978");
console.log(fecha4);

console.log(fecha > fecha4);

const fecha5 = new Date("October 14, 1978");

console.log(fecha5 === fecha4); // ERROR - No se pueden compara fechas de esta manera

console.log(fecha5.getTime() === fecha4.getTime()); // OK - Este es la forma de comparar fechas

////// Obtener el dia, el mes y el año de una fecha
// Obtener el dia .getDate()
console.log(fechaNac.getDate());

// Obtener el mes .getMonth() (0-Enero, 11-Diciembre)
console.log(fechaNac.getMonth()+1);

// Obtener el año .getFullYear()
console.log(fechaNac.getFullYear());

// .toLocaleDateString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fechaNac.toLocaleDateString("en-US"))
console.log(fechaNac.toLocaleDateString("en-GB"))
