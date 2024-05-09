const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const newFoodSchedule = [];

for (const food of foodSchedule) {
    if(food.isVegan){
        newFoodSchedule.push(food)
        
    }else{
        const fruitRandomIndex = Math.floor(Math.random() * fruits.length);
        const fruitRandom =fruits[fruitRandomIndex];
        newFoodSchedule.push({name: fruitRandom, isVegan:  true});
        fruits.splice(fruitRandomIndex, 1);
    }
}

console.log(newFoodSchedule);