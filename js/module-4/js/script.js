//Task1

const keyboard = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

  function addKeyboardLayout( alphabet ){
    const upperRow =keyboard.slice(0,12).split(" ");
    const midRow =keyboard.slice(12,23).split(" ");
    const lowRow =keyboard.slice(23,33).split(" ");

    alphabet = [upperRow,midRow,lowRow];
    console.log(alphabet);
  }

addKeyboardLayout( keyboard );

//Task2

// const msg = +prompt("введіть число 1-3");
//
//
// function getRandCharInRow(row){
//   row = "";
//   const upRow = "qwertyuiop[]";
//   const midRow = "asdfghjkl;'";
//   const lowRow = "zxcvbnm,./";
//
//
//     if (msg === 1){
//       row = upRow.charAt(Math.floor(Math.random()*upRow.length));
//     } else if (msg === 2){
//       row = midRow.charAt(Math.floor(Math.random()*midRow.length));
//     } else if (msg === 3){
//       row = lowRow.charAt(Math.floor(Math.random()*lowRow.length));
//     } else {
//       console.log("error");
//     }
//
//   return row;
// }
// console.log(getRandCharInRow());
//Task3
/*

function getRandCharInAlph() {
	let s;
  const keyboard = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
  s = keyboard.charAt(Math.floor(Math.random()*keyboard.length));

  return s;

}

console.log(getRandCharInAlph());
*/
