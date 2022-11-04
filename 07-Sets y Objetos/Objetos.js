const obj = {
id: 4, 
nombre: "Juan", 
apellido: "Bigoritto", 
isDeveloper: true,
libroFav:["Los secretos de YouTube", "Los Juegos del Hambre"],
"4-juegos":[1,2,3,4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);


// Se copia la direccion de memoria del objeto por lo que es erroneo 
// copiar de esta manera los objetos
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Pedro"
console.log(obj2);

console.log(obj);


//// Como copiar objetos
const obj3 = {...obj};

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Juan";

console.log(obj.nombre);
console.log(obj3.nombre);

//Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anio: 1939},
    {titulo: "Titanic", anio: 1997},
    {titulo: "Moana", anio: 2016},
    {titulo: "El efecto mariposa", anio: 2004},
    {titulo: "TED", anio: 2012},
];

console.log(listaPeliculas);
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a,b) => a.anio-b.anio);

console.log(listaPeliculas)