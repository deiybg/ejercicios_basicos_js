
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
    const posicion = nameList.indexOf(nameToFind);
    
    if (posicion !== -1) {
        return { encontrado: true, posicion: posicion };
    } else {
        return { encontrado: false };
    }
}

const nombreABuscar = 'deiby';
const resultado = nameFinder(names, nombreABuscar);

if (resultado.encontrado) {
    console.log(`El nombre "${nombreABuscar}" fue encontrado en la posición ${resultado.posicion}.`);
} else {
    console.log(`El nombre "${nombreABuscar}" no fue encontrado.`);
}
