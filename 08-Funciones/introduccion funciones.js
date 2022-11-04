
const nom = "Juan";
//saludar("Juan");
saludar(nom);

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

////
let nombre_2 = "Mateo";
despedir(nombre_2)

function despedir(nombre){
    nombre= "Diego"
    console.log(`Adios ${nombre}`);
}

////

let persona = {nombre:"Juan", apellido: "Bigoritto"}

saludarPersona(persona);

function saludarPersona(objeto){
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

////////

function imprimeNumero(numero = 7){ // Parametros por defecto
    console.log(numero);
}

imprimeNumero();

////

function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1,2,3,4,5,6,7,"hola",null)

///// 
function suma(...nums){
    return(nums.reduce((a,b) => a + b))
}

const s = suma(1,2,3,4,5)
console.log(s);


/////
let variable = "Hola"

function multiplicar(a=0, b=0){
    let variable_interna= "adios"
    console.log(variable_interna)
    return a*b;
}

console.log(multiplicar(3,9))