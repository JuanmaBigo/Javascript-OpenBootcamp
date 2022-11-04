function verdadero(){return true}


const funcionAsinc = () => {
    
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve();
            },5000)
        }else{
            reject()
        }
        })
    
    }

    funcionAsinc()
        .then(() => console.log("Hola soy una promesa"))
        .catch(() => console.log("ERROR"))


function* generaIdPar(){
    let id = 0;
        while(true){
            id += 2;
            yield id // Esperando hasta que se vuelva a llamar
        }
    }

