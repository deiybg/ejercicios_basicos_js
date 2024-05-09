const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];


  function repeatCounter(list) {
    const contador = [];

    list.forEach(word => {
        if (contador[word]){
            
            contador[word]++;
            
        }else{
            contador[word] = 1;
            
        }
    });


    let resultado = "";
    for (const word in contador) {
       
        resultado +=  ` ${word} :${contador[word]}`
        
    }


    return resultado;
  }

console.log(repeatCounter(words));

