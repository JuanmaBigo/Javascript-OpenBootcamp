const yo = {nombre: "Juan", apellido: "Bigoritto", edad:21, altura: 173, eresDesarrolador: true}
const edad = yo.edad;

const listaPersonas = [
    yo, 
    {nombre: "Julian", apellido: "Ballardini", edad:20, altura: 180, eresDesarrolador: true},
    {nombre: "Valentino", apellido: "Gervasoni", edad:19, altura: 175, eresDesarrolador: false}];
    console.log(listaPersonas)

    const listaOrdenada = listaPersonas.sort((a,b) => a.edad-b.edad);
    console.log(listaPersonas)
