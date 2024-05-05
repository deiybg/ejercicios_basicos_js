const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


  function removeDuplicates(list) {
    
    const noduplicate = [];

    for (const food of list) {
        if(!noduplicate.includes(food)){
            noduplicate.push(food);
        }
    }
    return noduplicate
  }

  console.log(removeDuplicates(duplicates));