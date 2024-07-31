// 1-masala
// kabisa yilini aniqlash
// Quyidagi shartlardan birini bajaradigan yil kabisa yili hisoblanadi:
// Yil raqami 400 ga bo’linsa
// Yil raqami 4 ga bo’linsa va 100 ga bo’linmasa

// function IsKabisa(year) {
//  if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//      return year + " bu yil kabisa yili";
//  } else {
//      return year + " bu yil kabisa yili emas";
//  }
// }
// let year = Number(prompt("yilni kirit: "));
// console.log(IsKabisa(year));

// 2-masala
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function breakCamelCasing(str) {
//  let result=" ";
//  for (let i =0; i <str.length; i++) {
//   if(str[i]===str[i].toUpperCase()&&i!==0) {
// result+="  ";
//  }
//  result+=str[i];
// }
// return result;
// }
// let text=prompt("mattni kiriting: ");
// console.log(breakCamelCasing(text));
// 3-masala
// sonni bo'luvchilarini topish

// let number=Number(prompt("Sonni kiriting: "))
// function getDivisors(num) {
//  let divisors = [];
//  for (let i = 1; i <= num; i++) {
//      if (num % i === 0) {
//          divisors.push(i);
//      }
//  }
//  return divisors;
// }
// let result = getDivisors(number);
// console.log(result);

// 4-masala
let people = [
    {
      name: "Courtney",
      age: 43,
      balance: 3400
    },
    {
      name: "Regina",
      age: 53,
      balance: 4000
    },
    {
      name: "Jay",
      age: 28,
      balance: 3000
    }
  ];

  function calculateTotalBalance(people) {
    let totalBalance = 0;
    for (let person of people) {
      totalBalance += person.balance;
    }
    return totalBalance;
  }

  let total = calculateTotalBalance(people);
  console.log("Jami balans:" +total)