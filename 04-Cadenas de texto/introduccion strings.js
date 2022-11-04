let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = 'Hola soy un texto con comillas dobles';

console.log(str_sng);
console.log(str_dbl);

let str_comillas = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comilla = "El otro dia me dijo literalmente \"ve a sacar la basura\"";

console.log(str_comillas)
console.log(str_comilla)

/// Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Juan Mateo";
let saludo = `Hola ${nombre}, bienvenido`;

console.log(saludo);

// Plantillas HTML
let plantilla = `
<html>
<h1> Pagina web de ${nombre} </h1>
<p> Este es un parrafo </p>
</html>
`;

console.log(plantilla);

// Introduccion de variables en HTML
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"];
