function miAsinc(){
    //Hace un allamada a una base de datos externa
    // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    
    //const i = Math.floor(Math.random()*2)
    // Si esta todo correcto
    if (true){
        resolve();
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

    