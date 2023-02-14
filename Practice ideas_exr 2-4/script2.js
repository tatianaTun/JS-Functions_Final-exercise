/////// Exercise 1 ///////////
// function numbersFrom1to100() {
//   let oneToTwenty = [ "","one", "two", "three",  "four", "five", "six","seven","eight","nine","ten","eleven","twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
//   let tens = [ "",  "",  "twenty", "thirty", "forty","fifty", "sixty", "seventy", "eighty","ninety", ];
//   // const numArray = [];
//   // const textArray = [];
//   for (let i = 1; i < 101; i++) {
//     let textNum = toString();
//     textArray.push(textNum);
//   }
//   return textArray;
// }
// numbersFrom1to100();
// document.querySelector("body").innerHTML = textArray;

////////// Exercise 2 ///////////

const btnExr2 = document.getElementById("btnExr2");
let body = document.querySelector("body");
let r = 0;
let g = 0;
let b = 0;

btnExr2.addEventListener("click", () => {
  // body.style.backgroundColor = 'rgb(255, 0, 0)';
  let maxVal = 255;
  r = Math.floor(Math.random() * maxVal);
  console.log(` r is ${r}`);
  g = Math.floor(Math.random() * maxVal);
  console.log(` g is ${g}`);
  b = Math.floor(Math.random() * maxVal);
  console.log(` b is ${b}`);
  let randColor = `rgb(${r}, ${g}, ${b})`; //value can be given as a template literal
  console.log(randColor);
  console.log(`rgb(${r}, ${g}, ${b})`);
  body.style.backgroundColor = randColor;

  // body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; //I can remove the randColor as a variable and just use the template literal to create a string with inserted values.
});

//Tried changing bg color using hex but never succeeded, Maya said hex is not used for color change
// btn.addEventListener("click", () => {
// let maxVal = 0xFFFFFF;
//     let randomNumber = Math.floor(Math.random() * maxVal);
//     randomNumber = randomNumber.toString(16).toUpperCase();
//     let randColor = randomNumber.padStart(6, 0);
//     console.log(randColor);
//     body.style.backgroundColor = `0x${randColor}`;
//   });

////////// Exercise 3///////////
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

// 100 random numbers
function make100randomNum() {
  const numArray = [];
  for (let index = 0; index < 100; index++) {
    let randomNum = Math.floor(Math.random() * 101);
    numArray.push(randomNum);
  }
  return numArray;
}
const my100Nums = make100randomNum();
console.log(my100Nums);

// max number
function findMax() {
  let maxNum = 0;
  for (let index = 0; index < my100Nums.length; index++) {
    if (maxNum < my100Nums[index]) {
      maxNum = my100Nums[index];
    }
  }
  return maxNum;
}
let maxNumber = findMax(); // findMax ();
console.log(`The maximum number is ${maxNumber}`);

// min number
function findMin() {
  let minNum = 0;
  for (let index = 0; index < my100Nums.length; index++) {
    if (minNum > my100Nums[index]) {
      minNum = my100Nums[index];
    }
  }
  return minNum;
}
let minNumber = findMin();
console.log(`The minimum number is ${minNumber}`);

// array sum
function sumArray() {
  let sumNumArray = 0;
  for (let index = 0; index < my100Nums.length; index++) {
    sumNumArray = sumNumArray + my100Nums[index];
  }
  return sumNumArray;
}
let totalArraySum = sumArray();
console.log(`Sum1 equals to ${totalArraySum}`);
totalArraySum = sumArray(make100randomNum());
console.log(`sum 2 ${totalArraySum}`);

// average value
function averageArray() {
  let averageNum = totalArraySum / my100Nums.length;
  return averageNum;
}
let averageNumber = averageArray();
console.log(`The average value is ${averageNumber}`);

//Button functions
btn1.addEventListener("click", () => {
  document.getElementById("p-btn1").innerHTML = my100Nums;
});
btn2.addEventListener("click", () => {
  document.getElementById("p-btn2").innerHTML = maxNumber;
});

btn3.addEventListener("click", () => {
  document.getElementById("p-btn3").innerHTML = minNumber;
});

btn4.addEventListener("click", () => {
  document.getElementById("p-btn4").innerHTML = totalArraySum;
});

btn5.addEventListener("click", () => {
  document.getElementById("p-btn5").innerHTML = averageNumber;
});

////////// Exercise 4 ATM (that interactes with DOM)///////////
//choose your options: exr 1, exr 2, exr 3
//display the exercise if nav button is clicked. Close the other opened exercise.
const atm1 = document.getElementById("atm1");
const atm2 = document.getElementById("atm2");
const atm3 = document.getElementById("atm3");
const exr1 = document.querySelector(".exr1");
const exr2 = document.querySelector(".exr2");
const exr3 = document.querySelector(".exr3");

function exrDisplay(x) {
    // console.log(x);
    if (x.style.display !== "flex") {
      x.style.display = "flex";
      return;
    }
    x.style.display = "none";
  }
atm1.addEventListener("click", (x) => {    //general practice - use this one. x is an event here. Why should x be inside and not just blank?
    exrDisplay(exr1)
    exr3.style.display = "none";
    exr2.style.display = "none";
});  
atm2.addEventListener("click", (x) => {   
    exrDisplay(exr2)
    exr1.style.display = "none";
    exr3.style.display = "none";
});  
atm3.addEventListener("click", (x) => {   
    exrDisplay(exr3)
    exr1.style.display = "none";
    exr2.style.display = "none";
});  

//atm1.addEventListener("click", exrDisplay); //functions are objects without parentesis, functions with them are functions so when passed in without the parentesis the 

// atm1.addEventListener("click", exrDisplay(exr1)); //here the function onloads from the start. why
// atm1.addEventListener("click", exrDisplay(x) => {  //this verion doesn't work because aparrently I am creating a function again.
//         x = exr1
//     });






