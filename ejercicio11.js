const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
                        

function averageWord(list) {
  
    let suma =0;
    let average = "";

    for (const word of list) {
        if (typeof word === "string"){
            suma += word.length;
        }else{
            suma += word;
        }
    }
 
  average = suma / list.length;

  return average;
}

console.log(averageWord(mixedElements));