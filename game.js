const cell1 = document.getElementById("1");
const cell2 = document.getElementById("2");
const cell3 = document.getElementById("3");
const cell4 = document.getElementById("4");
const cell5 = document.getElementById("5");
const cell6 = document.getElementById("6");
const cell7 = document.getElementById("7");
const cell8 = document.getElementById("8");
const cell9 = document.getElementById("9");

// function random(min, max) {
//     let math = Math.floor(Math.random() * max) + min;

//     return math;
// }
/***** código para randomizar ****/
// for (let i = 0; i < board.length; ++i) {
//     cell1.innerText = board[random(0, 5)];
// }
// console.log(random(0, 5));

let math = Math.floor(Math.random() * 9) + 1;

const iconPlayer1 = "X";
const iconPlayer2 = "O";
let isPlayer1 = true;


cell1.onclick = function() {
  if (cell1.innerText !== "") {
    return;
  }
  if (isPlayer1) {
      cell1.innerText = iconPlayer1;
      isPlayer1 = false;
    } else {
      cell1.innerText = iconPlayer2;
      isPlayer1 = true;
  }
}

cell2.onclick = function() {
  if (cell2.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell2.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell2.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell3.onclick = function() {
  if (cell3.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell3.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell3.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell4.onclick = function() {
  if (cell4.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell4.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell4.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell5.onclick = function() {
  if (cell5.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell5.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell5.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell6.onclick = function() {
  if (cell6.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell6.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell6.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell7.onclick = function() {
  if (cell7.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell7.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell7.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell8.onclick = function() {
  if (cell8.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell8.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell8.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}

cell9.onclick = function() {
  if (cell9.innerText !== "") {
    return;
  }
  if (isPlayer1) {
    cell9.innerText = iconPlayer1;
    isPlayer1 = false; 
  } else {
    cell9.innerText = iconPlayer2;  
    isPlayer1 = true;
  }
}
