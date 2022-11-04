const array = [1, 2, 3, 4, 5, 1, 2, "hola","hola", {id:5}, {id:5}];
console.log({id:5} === {id:5});

const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add()
miSet.add(9);
console.log(miSet);
miSet.add(1);
console.log(miSet);

// .delete()
miSet.delete("hola");
console.log(miSet);

// .clear()
// miSet.clear();
// console.log(clear);

// .has()
console.log(miSet.has(40));

// .size
console.log(miSet.size);

miSet.forEach(valor =>{
    console.log(valor);
})

// convertit set en iterator
const it_miSet = miSet.values();
console.log(it_miSet);

// convertir set en array con factor de propagacion
const ar_miSet=[ ...miSet];
console.log(ar_miSet)
