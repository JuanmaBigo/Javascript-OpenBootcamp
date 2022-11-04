const nom = "Juan Mateo";
const ape = "Bigoritto";
const obj = {nombre: nom, apellido: ape}

sessionStorage.setItem("persona", JSON.stringify(obj))

localStorage.setItem("persona", JSON.stringify(obj))

const fechaAhora = new Date();
fechaAhora.setMinutes(fechaAhora.getMinutes() + 2)



document.cookie = "name = Juan Mateo; max-age = 120" ;  
document.cookie = "surname = Bigoritto; max-age = 120";  
console.log(document.cookie)