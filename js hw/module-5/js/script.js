const keyboard = {
   layouts: {
       en: {
           topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
           middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
           bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
       },
       ru: {
           topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ё"],
           middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
           bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/"]
       },
       ua: {
           topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї", "ґ"],
           middleRow: ["ф", "и", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
           bottomRow: ["я", "ч", "с", "м", "і", "т", "ь", "б", "ю", "/"]
       }
   },
   langs: ['en', 'ru', 'ua'],
   currentLang: ''
};
let language = +prompt("Оберіть мову для симулятора: 0.en, 1.ru, 2.ua");

function getCharInLang(){
 if (language <= keyboard.langs.length - 1 && language >= 0){
   keyboard.currentLang = keyboard.langs[language];
   console.log(keyboard.currentLang);
 } else {
   alert("Мова недоступна");
 }
}

let CharInLang = getCharInLang();

function getRandCharInAlph(){
 const chosenKeyboardLayout = keyboard.layouts[keyboard.currentLang];
 let arr = [];
 for (key in chosenKeyboardLayout){
   concatChar = arr.concat(chosenKeyboardLayout[key]);
 }

let random = Math.floor(Math.random() * arr.length);
 if (language <= keyboard.langs.length - 1 && language >= 0){
   return concatChar[random];
 } else {
   return "Try again";
 }
}
console.log(getRandCharInAlph())
