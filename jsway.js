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


//final values problems 
// nb1=nb2=nb3=4
//nb1 = 4, nb2=3, nb3= 2
//nb1= 2, nb2=4,nb3=0

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);


 //number of days in a month 
//  Write a program that accepts a month number (between 1 and 12), 
//  then shows the number of days of that month. 
//  Leap years are excluded. 
//  Incorrect inputs must be taken into account.

// const month = Number(prompt("Enter a month number:"));

// if (
//     month == 1 ||
//     month == 2 ||
//     month == 3 ||
//     month == 4 ||
//     month == 5 ||
//     month == 6 ||
//     month == 7 ||
//     month == 8 ||
//     month == 9 ||
//     month == 10 ||
//     month == 11 ||
//     month == 12 
// ) {
//     alert("This month has 31 days");
// } else if (month == 4 || month == 6|| month == 9 || month == 11) {
//     alert("This month has 30 days");
// } else if (month == 2){
//     alert("This month has 28 days");
// } else {
//     alert("unkown month");
// }

// //solutions using switch statements 
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       alert("This month has 31 days");
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       alert("This month has 30 days");
//       break;
//     case 2:
//       alert("This month has 28 days");
//       break;
//     default:
//       alert("Unknown month!");
//   }
  
//   // Solution using if and switch
// if (month >= 1 && month <= 12) {
//     let nbdays = 31;
//     switch (month) {
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         nbdays = 30;
//         break;
//       case 2:
//         nbdays = 28;
//         break;
//     }
//     alert(`This month has ${nbdays} days`);
//   } else {
//     alert("Unknown month!");
//   }

//following second 
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). 
//The program calculates and shows the time one second after.
// Incorrect inputs must be taken into account.

let hours = Number(prompt ("enter hours:"));
let minutes = Number(prompt ("enter minutes:"));
let seconds= Number(prompt ("enter seconds:"));

if (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59 &&
    seconds >= 0 &&
    seconds <= 59
  ) {
    seconds++; // Incrementing the seconds
    if (seconds === 60) {
      // Next minute: seconds are reset to 0
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        // Next hour: minutes are reset to 0
        minutes = 0;
        hours++;
        if (hours === 24) {
          // Next second is midnight
          hours = 0;
        }
      }
    }
    console.log(
      `In a second, time will be ${hours} hours, ${minutes} minutes et ${seconds} seconds`
    );
  } else {
    console.log("Incorrect hour!");
  }