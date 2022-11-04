class Estudiante{
    _nombre;
    _asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(nombre){
        this._nombre = nombre;
    }

    obtenDatos(){
        return {nombre: this._nombre, asignaturas: this._asignaturas}
    }
}

const nuevoEstudiante = new Estudiante("Juan");
console.log(nuevoEstudiante.obtenDatos())