// localStorage.setItem("nombre", "Juanma")
// localStorage.setItem("nombre","Pepito")

// console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({nombre:"juan", edad: 21}))
// console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Cpnvierte un objeto/array convertido a traves de stringify en un objeto de javascript 

localStorage.removeItem("nombre")


sessionStorage.setItem("nombre-sesion", "Juanma")

/* Cookies */
document.cookie = "nombreCookie=JuanmaCookie"
document.cookie = "nombreCaducidad=Nombre; expires=" + new Date(2023,0,1).toUTCString()
console.log(document.cookie)