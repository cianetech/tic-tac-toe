const iconPlayer1 = "🌻";
const iconPlayer2 = "💣";
let isPlayer1 = true;

let board = [];

  for (let i = 0; i < 9; i++) {
      board[i] = document.getElementById(`${i}`);

      board[i].onclick = function() {
        if (board[i].innerText !== "") {
          return false;
        }
        board[i].innerText = isPlayer1 ? iconPlayer1 : iconPlayer2;
        isPlayer1 = !isPlayer1;
      }
  }