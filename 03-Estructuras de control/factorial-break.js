
let i = 1;
let factorial = 1;
while (i < 100) {
  factorial *= i;
  i++;
  if (i === 10) {
    break;
  }
}
console.log(factorial);
