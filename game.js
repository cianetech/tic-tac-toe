const cell1 = document.getElementById("1");
const cell2 = document.getElementById("2");

function random() {
    const min = 0; 
    const max = 5;
    let math = Math.floor(Math.random() * max) + min;

    return math;
}

const board = ["O", "X", "O", "X", "O", "X"];


cell1.onclick = function() {
  for (let i = 0; i < board.length; ++i) {
      cell1.innerText = board[random()];
  }
  console.log(random());
  
}

cell2.onclick = function() {
  cell2.innerText = "X";  
}

