let listaDeCompra = ["tomate","pasta","arroz","gomitas","masitas"];
listaDeCompra.push("Aceite de Girasol");
listaDeCompra.pop();

let listaDePeliculas = [
    {titulo: "Cars 2", director: "John Lasseter", anio: 2011},
    {titulo: "Iron Man", director: "Jon Favreau", anio: 2008},
    {titulo: "Avengers: EndGame", director: "Anthony Russo, Joe Russo", anio: 2019}
];


let listaNueva = listaDePeliculas.filter(pelicula => pelicula.anio >= 2010);

let listaDirectores = listaDePeliculas.map(pelicula => pelicula.director);

let listaTitulos = listaDePeliculas.map(pelicula => pelicula.titulo);

let listaConcat = listaDirectores.concat(listaTitulos);
let listaConcat2 = [...listaDirectores, ...listaTitulos];
