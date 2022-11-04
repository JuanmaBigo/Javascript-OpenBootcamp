// Bucles For

for(let i = 0; i<10; i++){
  console.log(i)
}

let lista = [1,2,3,4,5,6,7,8,9,3,5,4,12,5,3,4,452];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}


// For...of

for (let valor of lista){
  console.log(valor);
}


// ForEach

lista.forEach(valor => {
  console.log(valor);
})


// ForIn

let persona = {
  nombre: "Juan",
  apellido: "Bigoritto",
  edad: 21,
  isDeveloper: true
}

for(let propiedad in persona){
  console.log(propiedad);
  console.log(persona[propiedad])
}

//Bucles While

let i = 0;
let max = 10;

while(i < max){
console.log(i);
i++;
}

// Do...while
i=15;

do{
  console.log(i)
i++
}while(i < max)