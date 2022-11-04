function fibonacci(num){
let array = [1, 1]
for (let i = 0; i<num-2; i++){
    array.push(array[0+i]+array[1+i]);
}
return array;
}

array = fibonacci(1000);
console.log(array);