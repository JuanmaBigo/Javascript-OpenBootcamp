// Obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice()  substring()  substr()
let slice_str = str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str)


// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Mateo";
console.log(cadena);

// Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace("Mateo", "Juan"));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";
console.log(texto_largo.replace("Tito", "Pepito"));

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/Tito/g, "Pepito"));


// Mayusculas y Minusculas
let input = "EscoRPio";
let db = "escorpio";

console.log(input === db);

// toLowerCase() - tuUpperCase()
console.log(input.toLowerCase())
console.log(input.toLowerCase() === db)

console.log(input.toUpperCase() === db.toUpperCase())


// formas de concatenar dos cadenas de caracteres
let str1 = "Hola soy la primera cadena.";
let str2 = "hola soy la segunda cadena.";

console.log(str1 + " " + str2);
console.log(str1.concat(" ", str2));
console.log(`${str1} ${str2}`);



// Eliminar espacios al inicio y al final
let str3 = "     Hola soy un string con espacios al final.    "
console.log(str3.length);
// trim()
console.log(str3.trim().length);
console.log(str3.trim());

console.log(str3.trimStart().length);
console.log(str3.trimEnd().length);

// Obtener el caracter que hay en cierta posicion 
let str4 = "Soy el string numero 4"; // ["S", "o", "y", " ", "e", "l", " ", ...]

console.log(str4.charAt(9));
console.log(str4[9]);

// Obtener la posicion de un elemento dentro de una cadena de caracteres
let str5 = "Soy Juan Mateo y me gusta la tecnologia. Juan es mi nombre desde el 29/06/2001";
console.log(str5.indexOf("Juan"));

console.log(str5.indexOf("Martin"));

console.log(str5.lastIndexOf("Juan"));


// https://regexr.com
console.log(texto_largo);


//Encontrar todas las instancias de una palabra en una cadena de texto 
console.log(texto_largo.match(/no/g));


// Existe la palabra dentro de la cadena de texto?
console.log(texto_largo.includes("terremoto"));

// Saber si un texto comienza con una palabra
console.log(texto_largo.startsWith("Tit"));

// Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("les."));
