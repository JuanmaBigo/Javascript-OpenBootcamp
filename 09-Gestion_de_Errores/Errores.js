const miFuncion = val => {
    if (typeof val === "number"){
    return 2*val
    }
    throw new Error("El valor debe ser de tipo numero")
}

const numero = 8;

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numera)
    console.log(doble)
} catch(e){
    // En caso de fallar, quiero que ejecutes
    console.error("ERROR!");
    console.error(`el valor de e es: ${e}`)
} finally {
    console.log("Esto siempre se ejecuta")
}

// InternalError, SyntaxError, TypeError, RangeError y ReferenceError