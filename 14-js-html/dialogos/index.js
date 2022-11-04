const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () =>{
    //alert("Se ha hecho click")
    //confirm("Estas de acuerdo?") && console.log("Ok")

    //confirm("Estas de acuerdo?") ? console.log("OK") : console.log("NO!!")

    const respuesta = confirm("Seguro?")
    if (respuesta){
        console.log("Esta de acuerdo")
    }else{
        console.log("NO esta de acuerdo")
    }
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("cual es tu nombre?")
    if (nombre){
        console.log("Tu nombre es: "+ nombre)
    }else{
        console.log("No has introducido nombre")
    }
})


const lista = [{
    nombre: "Juan", edad: 21
},{
    nombre: "Maria", edad: 18
},{
    nombre: "Lucia", edad: 16
},]

//console.log(lista)
console.table(lista)