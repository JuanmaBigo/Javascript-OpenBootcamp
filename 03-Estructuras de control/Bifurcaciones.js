// if 
if (true) {
  console.log("es verdadero");
}

if (false) {
  console.log("Es verdadero");
} else {
  console.log("No es verdadero");
}



// if else
let nota = 4;

if (nota === 5) {
  console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
  console.log("has obtenido un 4");
} else if (nota === 3) {
  console.log("has obtenido un 3");
} else if (nota === 2) {
  console.log("has obtenido un 2");
} else if (nota === 1) {
  console.log("has obtenido un 1");
}


// switch
switch (nota) {
  case 5:
    console.log("Has obtenido un 5");
    break;

  case 4:
    console.log("Has obtenido un 4");
    break;

  case 3:
    console.log("Has obtenido un 3");
    break;

  case 2:
    console.log("Has obtenido un 2");
    break;

  case 1:
    console.log("Has obtenido un 1");
    break;

  default:
    console.log("Error");
    break;
}
