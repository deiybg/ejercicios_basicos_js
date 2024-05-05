const numbers = [12, 21, 38, 5, 45, 37, 6];


function average(numberList) {
  let suma = 0;

  for (let numero of numberList) {
    suma += numero;
  }

  let promedio = suma / numberList.length;
  return promedio;
}

console.log(average(numbers));