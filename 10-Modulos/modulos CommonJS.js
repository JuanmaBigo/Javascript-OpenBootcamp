// Formas de importar/exportar modulos
// 1. CommonJS - require

//1ra forma
//const moduloMatematicas = require("./modulos/matematicas.js")
//console.log(moduloMatematicas)

// const fact = moduloMatematicas.factorial(5)
// console.log(fact)


//2da forma
//const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial

// const fact = factorial(5)
// console.log(fact)


//3ra forma (mas recomendada)
const { factorial, suma } = require("./modulos/matematicas")

 const fact = factorial(5)
 console.log(fact)

 const sum = suma(12,65)
 console.log(sum)

//console.log(module)