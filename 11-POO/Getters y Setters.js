class Persona {
    #nombre;
    #edad;
    _isDeveloper = true;
        constructor(nombre, edad){
            this.#nombre = nombre;
            this.#edad = edad;
        }


        saludo(){
            console.log(`Hola mi nombre es ${this.#nombre}, tengo ${this.#edad} años`)
        }

        getNombre(){ // Funcion Getter -> nos permite acceder (de forma controlada a algun atributo protegido)
            return this.#nombre;
        }

        getEdad(){
            return this.#edad;
        }

        setEdad(nuevaedad){
        this.#edad = nuevaedad;
        }
    }
    

const persona = new Persona("Juan", 21)

// Getter -> metodos que nos permiten obtener atributos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

// Setter -> metodos que nos permiten cambiar el valor de los atributos privados o protegidos
persona.setEdad(34);
console.log(persona.getEdad())



