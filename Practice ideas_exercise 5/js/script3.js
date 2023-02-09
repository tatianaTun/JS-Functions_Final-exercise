////////// Exercise 5 NUMBER GUESSING GAME///////////

//Selectors
const subForm = document.querySelector(".exr5-form");
const inputNum = document.getElementById("num");
const gameResult = document.querySelector(".gameResult");
const attempts = document.querySelector(".attempts");
const playAgain = document.querySelector(".submit-btn2");

//global variables
let inputNumber = "";
let index = 0;

//functions
function numbers1to20() {
    const randomNum = Math.floor(Math.random() * 20);
    return randomNum;
  }
  let item = numbers1to20();
  console.log(item);

inputNum.addEventListener("change", (event) => {  
    inputNumber = event.target.value;
})

subForm.addEventListener("submit", (event) => {  
    event.preventDefault()
    let attLeft = 10 - index;
    if (inputNumber > 20 && index !== 10) {
        gameResult.innerHTML = `The number you put in is bigger than 20. Try again.`;
        attempts.innerHTML = `ATTEMPTS LEFT: ${attLeft}`;
        index++
    }
    else if (inputNumber !== item && index === 10) {
        attempts.innerHTML = `NO ATTEMPTS LEFT`;
        gameResult.innerHTML = `GAVE OVER`;
        playAgain.style.display = 'block';
    }
    else if (inputNumber > item) {
        gameResult.innerHTML = `Too high. Try again.`;
        attempts.innerHTML = `ATTEMPTS LEFT: ${attLeft}`;
        index++
    }
    else if (inputNumber < item) { 
        gameResult.innerHTML = `Too low. Try again.`;
        attempts.innerHTML = `ATTEMPTS LEFT: ${attLeft}`;
        index++
    }
    else {
        gameResult.innerHTML = `The number is ${item}. You won. Play again.`;
        playAgain.style.display = 'block';
        
    }
});  



///////////////MY VERSION////////////////
// function numbers1to20() {
//     const array1to20 = [];
//   for (let i = 1; i < 21; i++) {
//     array1to20.push(i);
//   }
//   console.log(array1to20);
//     return array1to20;
//   }
//   const arr1to20 = numbers1to20();

// function getRandomItem() {
//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr1to20.length);
//     // get random item
//     arr1to20[randomIndex];
//     return arr1to20[randomIndex];
// }
// let item = getRandomItem(); //this way the number will always be the same until the page is refreshed. 
// console.log(item);

// const subForm = document.querySelector(".exr5-form");
// const inputNum = document.getElementById("num");
// const gameResult = document.querySelector(".gameResult");
// let inputNumber = "";
// inputNum.addEventListener("change", (event) => {  
//     // getRandomItem();
//     // console.log(event.target.value);
//     inputNumber = event.target.value;
//     console.log(item);


// })
// //Maya suggestion - make a global counter. when the max is reached, end the game by deleting event.preventDefault() so the game can refresh
// subForm.addEventListener("submit", (event) => {  
//     event.preventDefault()  //
//     if (inputNumber !== item) {
//         gameResult.innerHTML = `The number is ${item}. You lost. Try again.`;
//     }
//     else {
//         gameResult.innerHTML = `The number is ${item}. Congratulations, you won. Try again.`;
//     }

//     //clean up the texbox
// });  