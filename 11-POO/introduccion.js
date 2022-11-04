const persona = {
    nombre: "Juan Mateo",
    edad: 21, 
    isDeveloper: true,
    saludo: function(){
        console.log("HOLA")
    }
}

//console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 25,
    isDeveloper: false,
    saludo: function(){
        console.log("hola")
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hello")
        }
    }
}

const nueva_persona = creaPersona("Mateo", 24, true);
console.log(nueva_persona);

const nueva_persona_2 = creaPersona("Maria", 30, false);
console.log(nueva_persona_2);

