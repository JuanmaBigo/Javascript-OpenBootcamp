// .every()
const array = [4,6,3,6,8,3,5,7,8,4,5,7,56,876,-56,-7,-1,-4,-3];

// const resultado = array.every(valor => {
//     if (valor > 0){
//         return true;
//     }else {
//         return false;
//     }
// })
const resultado = array.every(valor => valor > 0);

console.log(resultado);

// Comparacion de listas
const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

console.log(arr1 === arr2);

const comparaArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(comparaArrays(arr1, arr2));

