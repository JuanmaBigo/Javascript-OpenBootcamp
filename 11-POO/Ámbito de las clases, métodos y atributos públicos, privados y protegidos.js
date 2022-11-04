class Persona {
// Private -> #
// solo sepuede acceder desde dentro de la clase
#nombre;
#edad;

// Protected -> _
// solo se puede acceder desde dentro de la clase y desde clases descendientes
_isDeveloper = true;

    constructor(nom, edad){
        this.#nombre = nom;
        this.#edad = edad;
    }

    saludo(){
        console.log(`Hola mi nombre es ${this.#nombre}, tengo ${this.#edad} años`)
    }

    obtenNombre(){ 
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }
}

const persona = new Persona("Juan", 21)
// console.log(persona)
// console.log(persona.nombre)
persona.saludo()
console.log(persona.obtenNombre())

// console.log(persona.#obtenEdad()) //no se puede acceder porque es un metodo privado

