const upperRow = "qwertyuiop[]";
const middleRow = "asdfghjkl;''";
const lowRow = "zxcvbnm,./";
const lengthUp = upperRow.length;
const lengthMid = middleRow.length;
const lengthLow = lowRow.length;
const symbFirstUp = upperRow.charAt(0);
const symbLastUp = upperRow.charAt(11);
const symbFirstMid = middleRow.charAt(0);
const symbLastMid = middleRow.charAt(11);
const symbFirstLow= lowRow.charAt(0);
const symbLastLow = lowRow.charAt(9);
const symbPositionFirst = upperRow.indexOf('[');
const symbPositionSecond = upperRow.indexOf(']');
const message = `Верхній ряд "${upperRow}",
                \nсередній ряд "${middleRow}",
                \nнижній ряд "${lowRow}",
                \nдовжина верхнього ряду "${lengthUp}",
                \nдовжина середнього ряду "${lengthMid}",
                \nдовжина нижнього ряду "${lengthLow}"
                \nПерші і останні символи:
                \nверхній ряд "${symbFirstUp}","${symbLastUp}",
                \nсередній ряд "${symbFirstMid}","${symbLastMid}",
                \nнижній ряд "${symbFirstLow}","${symbLastLow}",
                \nПошук позиції для символів:
                \n"[" - "${symbPositionFirst}",
                \n "]" - "${symbPositionSecond}"`;
console.log(message);
