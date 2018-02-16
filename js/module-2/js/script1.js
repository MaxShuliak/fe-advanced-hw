const message = prompt("Введіть номер курорту \n1.taba,\n2.sharm,\n3.hurgada,");
const number = parseInt(message);
const str = message.length;


 if (str > 0){
    if (number === 1){
      console.log("Ви вибрали taba!");
    } else if (number === 2){
      console.log("Ви вибрали sharm!")
    } else if (number === 3){
      console.log("Ви вибрали hurgada!");
    } else {
      console.log("Ви ввели число, варіанту курорту для якого не було");
    }
  } else {
     alert("Дане поле має бути заповнене!!!");
  }
