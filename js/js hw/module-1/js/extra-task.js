
const a = 6;
const b = 10;

let result1 = a + b;
//console.log(result1); // -> 16

let result2 = (-result1)+b;
//console.log(result2); // -6

let result3 = a * b;
//console.log(result3); // 60

let result4 = a / b;
//console.log(result4); // 0.6

// использовать %
let result5 = b%a;
//console.log(result5); 4

const day = 02;
const month = 10;
const year = 2017;

const date = day + "/" + month + "/" + year;

//console.log(date); // "02/10/2017"

const message = prompt("Додаткове завдання", "");

// здесь заменить 'str' и 'STR' на message и вызов метода
let inLowerCase = message.toLowerCase; // -> "success: in all lowercase"
let inUpperCase = message.toUpperCase; // -> "success: in all uppercase"
/*console.log(checkCase(inLowerCase)); // success: in all lowercase
console.log(checkCase(inUpperCase)); // success: in all uppercase
*/
//============= Функция для проверки кода ================= //
function checkCase(str) {
 if (str && str === str.toLowerCase()) {
   return "success: in all lowercase";
 } else if (str && str === str.toUpperCase()) {
   return "success: in all uppercase";
 }
 return "error: not in all lowercase or uppercase";
}
const name = 'Mango';
const typingSpeed = 50;

//const message = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;

//console.log(message); // Mango печатает со скоростью 50 знаков в минуту.

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidthInt;
const P = parseInt(padding);
const B = parseInt(border);
const CW = parseInt(contentWidth);

totalWidthInt = P + B + CW + "px";
//console.log(totalWidthInt); // '125px'

const padding1 = "20.25px";
const border2 = "5.15px";
const contentWidth3 = "100.45px";

let totalWidthFloat;
const padNum = parseFloat(padding1);
const  borNum= parseFloat(border2);
const cWidNum = parseFloat(contentWidth3);

totalWidthFloat = padNum + borNum + cWidNum + "px";
//console.log(totalWidthFloat); // '125.85px'

const x = 0.1;
const y = 0.2;
const z = 0.3;

// Исправить вычисления тут
const summ = ((x*100 + y*100 + z*100)/100);

//console.log(0.6 === summ); // должно быть true

const allTask = `завдання 1: ${result1},${result2},${result3},${result4},${result5}.
                \nзавдання 2: ${date}.
                \nзавдання 3: ${checkCase(inLowerCase)},${checkCase(inUpperCase)}.
                \nзавдання 4: ${name} печатает со скоростью ${typingSpeed} знаков в минуту.
                \nзавдання 5: ${totalWidthInt}.
                \nзавдання 6: ${totalWidthFloat}.
                \nзавдання 7: ${summ}.`;
