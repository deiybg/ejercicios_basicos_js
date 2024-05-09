const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  for (const user of users) {

    if(user.years >18){
        console.log(`El usuario ${user.name} es mayor de edad, y tiene ${user.years} años de edad`);
    }else{
        console.log(`El usuario ${user.name} es menor de edad, y tiene ${user.years} años de edad`);
    }
    
  }