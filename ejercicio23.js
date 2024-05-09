const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

  
  const peliculaPequeña = [];
  const peliculaMediana = [];
  const peliculaGrande = [];

  for (const movie of movies) {
    if (movie.durationInMinutes > 200) {
        peliculaGrande.push(movie);
       //console.log(movie);
        
    } else if(movie.durationInMinutes > 100 && movie.durationInMinutes < 200){
        peliculaMediana.push(movie);
       //console.log(movie);
    }else{
        peliculaPequeña.push(movie);
       // console.log(movie);
    }
    
  }

  console.log("Las películas pequeñas son las siguientes:");
  console.log(peliculaPequeña);

  console.log("Las películas medianas son las siguientes:");
  console.log(peliculaMediana);

  console.log("Las películas grandes son las siguientes:");
  console.log(peliculaGrande);