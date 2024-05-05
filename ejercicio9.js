const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma =0;

  for (const numero of numberList) {

    suma += numero;
    
  }

return suma;
}

sumNumbers(numbers);
console.log(sumNumbers(numbers));