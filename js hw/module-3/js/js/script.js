const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const upperRow = alphabet.slice(0,12).split("");
const midRow = alphabet.slice(12,23).split("");
const lowRow = alphabet.slice(23,33).split("");

const keyboard = [upperRow,midRow,lowRow];
console.log(keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8]);
console.log(midRow[6]+midRow[0]+lowRow[3]+midRow[0]+midRow[1]+lowRow[2]+upperRow[3]+upperRow[7]+upperRow[9]+upperRow[4]);
console.log(upperRow[4]+upperRow[3]+midRow[0]+upperRow[7]+lowRow[5]+upperRow[2]+upperRow[3]);
