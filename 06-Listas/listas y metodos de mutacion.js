let array = [1,2,"HOLA",false,null,6];

// Acceder a los valores de un array a través de su posicion
// array[indice] => 0,1,2,3,4,5,...
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);


// Metodos para introducir nuevos valores en el array
// .push() .unshift() => Mutan el valor de nuestro array

// introducir valores al final -> Push
array.push("final", 45, 1000, false);
console.log(array);

// introducir valores al principio -> unshift
array.unshift("inicio", 87, 99);
console.log(array);


// Metodos para eliminar valores en el array
// .pop() .shift() => Mutan el valor del array

const array2 = [1, 3, "hola", false];

// eliminar valores al final -> .pop()
array2.pop();
console.log(array2);

// eliminar valores al principio -> .shift()
array2.shift();
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en arrays
// .splice(x,y,z)
const array3 = [1, 2, 3, 4, 5, 6];

// eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2,3);
console.log(array3);

// añadir valores .splice(indice,0,valores)
array3.splice(2,0,"hola",99,999);
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2,1,3);
console.log(array3);
