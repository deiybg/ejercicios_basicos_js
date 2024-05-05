const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(stringlist) {
let longesWord = "";

for (const word of stringlist) {
    if(word.length > longesWord.length){
        longesWord = word;
    }
}
console.log(longesWord);
}


findLongestWord(avengers);
