// //chapter 1 programs 
// console.log("Alex");
// console.log("27")

// //Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
// //adding
// console.log(6 + 3)
// //subtracting
// console.log(6-3)
// //multiplying 
// console.log(6 * 3)
// //dividing 
// console.log( 6 / 3)

// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");

//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

//const fullName = prompt("Enter your first and last name:");
// const name = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name");
// console.log(`Hello, ${name} + ${lastName} `);

// let a = 2;
// a -= 1;
// a++;
// //a =2:
// //a -= 1 = 1;
// //a ++ = 2
// let b = 8;
// b += 2;
// // b += 2 = 10
// const c = a + b * b;
// // a = 2 b = 10 
// // 2 + 10 * 10
// const d = a * b + b;
// //
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);

// //Vat calculation 
// const rawPrice = 10;
//  console.log(rawPrice * 0.206)


// function convertToF(celsius) {
//     // make the given fahrenheit variable equal the given celsius value
//     // multiply the given celsius value by 9/5 then add 32
//     let fahrenheit = celsius * 9/5 + 32
//     // return the variable fahrenheit as the answer
//     return fahrenheit;
//   }
//   console.log(convertCelsiusToFarenheit(0))

// let number1 = 5;
// number1 -= 2;
// let number2 = 3;
// number2 += 2;

// // TODO: type your code here (and nowhere else!)

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5

//Add the necessary code to swap the values of variables number1 and number2.

//Following Day 
//Write a program that accepts a day name from the user,
// const day = prompt("Enter a day of the week") // needed to get input started 
// //then shows the name of the following day. 
// if ( day === "monday") {
//     console.log("Tomorrow is Tuesday");
// }
// else if ( day === "tuesday") {
//     console.log("Tomorrow is Wednesday");
// }
// else if ( day === "wednesday") {
//     console.log("Tomorrow is Thursday");
// }
// else if ( day === "thursday") {
//     console.log("Tomorrow is Friday");
// }
// else if ( day === "friday") {
//     console.log("Tomorrow is Saturday");
// }
// else if ( day === "saturday") {
//     console.log("Tomorrow is Sunday");
// }


//Incorrect inputs must be taken into account.
// else{
//     console.log("That is not a day of the week!")
// }

//Switch statements 
//  const day = prompt("Enter a day of the week")

// switch(day) {
//     case "monday":
//     console.log("Tomorrow is tuesday!")
//     break;

//     case "tuesday":
//         console.log("Tomorrow is wednesday!")
//         break;
//     case "wednesday":
//         console.log("Tomorrow is thursday! ")
//         break;
//     case "thursday":
//         console.log("Tomorrow is friday!")
//         break; 
//     case "friday":
//         console.log("Tomorrow is saturday!")
//         break;
//     case "saturday":
//         console.log("Tomorrow is sunday!")
//          break;
// }


//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
//my example
//need to add global variable next time 
// function comparesTwoNums (num1,num2) {
//     if(num1 == num2){
//         console.log("are you me?!?")
//     } else if (num1 != num2){
//         console.log("Who are you?!?")
//     } else {
//         console.log("You're not even a number!")
//     }
// }

//jsway solution 
// const number1 = Number(prompt("Enter number 1:"));
// const number2 = Number(prompt("Enter number 2:"));

// if (number1 < number2) {
//   console.log(`${number1} is less than ${number2}`);
// } else if (number1 > number2) {
//   console.log(`${number1} is greater than ${number2}`);
// } else {
//   console.log(`${number1} and ${number2} are equal`);
// }