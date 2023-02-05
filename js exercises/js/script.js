//FEBRUARY 2 | THURSDAY

//FUNCTIONS. Multiple exercises:

// MAIN FUNCTION - 100 RANDOM NUMBERS

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
  
  //NOTES:
  //LINE 163 - best to keep the variable inside the function so every time we call it, the function will start from fresh start ei empty numArray
  //LINE 170 - here I have to declare another variable to hold the value of the run function. Use const to avoid the value to be overwritten and because it is an array.
  //LINES 162, 165, 170 - x stands for the 100 numbers I want to get. Technically I just remove x and replace x in line 165 with 101 to limit the max value of each random calculator output to 100. I gonna do just like that
  
  //my original version - Maya explained the issues I can face with this one. Time stamp 9:50am
  // const numArray = [];
  // function make100randomNum(x) {
  //   for (let index = 0; index < 100; index++) {
  //   let randomNum = Math.floor(Math.random() * x);
  //   numArray.push(randomNum);
  //   }
  //   return numArray;
  // }
  // make100randomNum(101) //
  // console.log(numArray);
  // make100randomNum(101)
  // console.log(numArray);
  //LINE 179 - here the variable is global, therefore its value is saved even after the function is run.
  //LINE 189 - because the variable is global, second function call will add 100 additional numbers to the existing global variable numArray
  
  
  // all the consequent functions are module functions
  
  //) SUM OF ALL NUMBERS
  
  function sumArray() {
    let sumNumArray = 0;
    for (let index = 0; index < my100Nums.length; index++) {
      sumNumArray = sumNumArray + my100Nums[index];
    }
    return sumNumArray;
  }
  let totalArraySum = sumArray(); 
  console.log(`Sum1 equals to ${totalArraySum}`);
  // totalArraySum = sumArray(make100randomNum()); 
  // console.log(`sum 2 ${totalArraySum}`);
  
  //NOTES:
  //LINE 207 - I use a new variable holder. Can use let or const depending on the needs.
  //LINE 209 - here the initial totalArraySum value will be overwritten by the second run of the sumArray function
  //LINE 210 - If I kept the sumNumArray variable outside the function the second run would have added to the first function call output
  //under LINE 200 - console.log(`previous sum  ${sumNumArray}`); can be used for display that the function starts fresh at every call. Can be removed
  
  
  //)LARGEST NUMBER
  
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
  //NOTES:
  //LINE 220 - Removed numArray inside the brackets. 
  //LINE 223 - I use my100Nums instead of numArray on lines 223, 224, 225 because it's the variable that holds the function value that was run. If I use numArray instead, the problem here is that we will run the main function again to calculate this module function which means the result will not be based on the first run result output. We need to make sure the module functions are using the main function first array as the only source of data, not run main f every time.
  
  
  //)SMALLEST NUMBER
  
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
  
  //NOTES:
  //LINE 247 - findMin(make100randomNum(101)) replaced by findMin(). Reason is for the module function to be based on the first array, not run main f again to get new data. Same situation as in line 229.
  
  
  //) AVERAGE OF ALL NUMBERS IN THE ARRAY
  
  function averageArray() {
    let averageNum = totalArraySum / my100Nums.length;
    return averageNum;
  }
  let averageNumber = averageArray();
  console.log(`The average value is ${averageNumber}`);
  
  //NOTES:
  //LINE 257 - I used the result of the sum function put inside the variable totalArraySum based on the main f first output array and divided by the length of the first output array
  
  
  //)COUNT ODD, EVEN, ZERO NUMBERS IN THE ARRAY
  
  function countOddEvenZero() {
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
    for (let index = 0; index < 100; index++) {
      if (my100Nums[index] === 0) {
        countZero++;
      } else if (my100Nums[index] % 2 === 0) {
        countEven++;
      } else {
        countOdd++;
      }
    }
    return [countEven, countOdd, countZero]; 
  }
  const OddEvenZero = countOddEvenZero();
  console.log(OddEvenZero); 
  console.log(`There are ${OddEvenZero[0]} even, ${OddEvenZero[1]} odd and ${OddEvenZero[2]} zero`); 
  
  //NOTES:
  //LINE 282 - the right way to return multiple values.
    //return (`There are ${countEven} even, ${countOdd} odd and ${countZero} zero`); - can return as a string too.
    //return countEven, countOdd, countZero doesn't work this way, need to put values as an array
  //LINE 285 - this is suitable for the return(`...`) string as on line 290
  //LINE 286 - this is suitable for the return[] array on line 282.
  //console.log (`There are ${countEven} even, ${countOdd} odd and ${countZero} zero`); - this is not gonna work because the values are inside the function and that's why I will have to declare new variables to hold values in this case



  
 //ATM exercise
 let menuChoice = 0;
 let balance = 0;
 let bankBalance = 0;
 let withdrawal = 0;
 let spendingBalance = 0;
 let spendB = 0;
 let spentMoney = 0;
 function accountBalance() {
   let x = +prompt("Please input the amount you want to put into your bank balance");
   balance = balance + x;
   return balance;
 }
 function withdrawnAmount() {
   let y = +prompt("Please input the amount you want to withdraw");
   return y;
 }
 function spendBalance() {
   spendB = spendB - spentMoney;
   return spendB;
 }
 function spentAmount() {
   let z = +prompt("Please input the amount you have spent");
   return z;
 }
 
 while (menuChoice !== "5") {
     menuChoice = prompt(
     "Please type in your choice: 1 for bank balance, 2 for withdrawal, 3 for spending balance, 4 for spent amount, 5 for end banking"
   );
   if (menuChoice === "1") {
     bankBalance = accountBalance();
     console.log(`your balance is $${bankBalance}`);
   } else if (menuChoice === "2") {
     let withdrawal = withdrawnAmount();
     balance = balance - withdrawal;
     spendB = spendB + withdrawal;
     console.log(`your withdrawn amount is $${withdrawal}`);
     console.log(`your spending balance is $${spendB}`);
     console.log(`your bank balance left is $${balance}`);
   } else if (menuChoice === "3") {
     spendingBalance = spendBalance();
     console.log(`your spending balance is $${spendingBalance}`);
   } else if (menuChoice === "4") {
     spentMoney = spentAmount()
     console.log(`you spent $${spentMoney}`);
   }
 }
 console.log(`Your current bank balance is $${bankBalance}, spending balance is $${spendingBalance}. Thank you for working with us and see you next time!`);




