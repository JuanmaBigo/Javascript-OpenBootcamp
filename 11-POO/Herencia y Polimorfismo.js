class Persona {
    _nombre;
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo() {
        console.log(`Hola mi nombre es ${this._nombre}, tengo ${this._edad} años`);
    }
}

class Desarrolador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);
        this.lenguaje = lenguaje;
    }
    saludo(){ // Override
        super.saludo()
        console.log(`y soy desarrolador de ${this.lenguaje}`)
    }
}

const nuevoDev = new Desarrolador("Juan", 21, "Javascript");
console.log(nuevoDev);
nuevoDev.saludo();

