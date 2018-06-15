var td = document.querySelectorAll('td');
var player = true;
var turnPlayer = document.querySelector("strong");
var winner = document.getElementById("winner");
var newGame = document.getElementById("newGame");
var visible = document.getElementById("visible");
var turn = document.getElementById("turn");
const winCondition = [[td[0], td[1], td[2]],
[td[3], td[4], td[5]],
[td[6], td[7], td[8]],
[td[0], td[3], td[6]],
[td[1], td[4], td[7]],
[td[2], td[5], td[8]],
[td[0], td[4], td[8]],
[td[2], td[4], td[6]]];

newGame.addEventListener("click", function(){
  for (var i = 0; i < td.length; i++) {
    td[i].textContent = "";
    td[i].style.backgroundColor = "rgb(230, 213, 199)";
  }
  turnPlayer.textContent = "First";
  player = true;
  winner.textContent = "";
  visible.classList.add("visible");
  turn.classList.remove("visible");
  game();
});

function theGame() {
  if (this.textContent === "" && player) {
    this.textContent = 'x';
  } else if (this.textContent === "" && !player) {
    this.textContent = 'o';
  } else {
    alert("There is already a "+ '"' + this.textContent +
    '"' + " there")
    player = !player;
  }
  player = !player;
  winningTheGame()
  if (player) {
    turnPlayer.textContent = "First";
  } else {
    turnPlayer.textContent = "Second"
  }
}

function game() {
  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", theGame)}
};

function winningTheGame() {
  for (var i = 0; i < winCondition.length; i++) {
    if (winCondition[i][0].textContent !== "") {
      if (winCondition[i][0].textContent ===
      winCondition[i][1].textContent &&
      winCondition[i][0].textContent ===
      winCondition[i][2].textContent) {
        for (var j = 0; j < winCondition[i].length; j++) {
          winCondition[i][j].style.backgroundColor = "yellow";
        }
        winner.textContent = turnPlayer.textContent;
        visible.classList.remove("visible");
        turn.classList.add("visible");
        for (var i = 0; i < td.length; i++) {
          td[i].removeEventListener("click", theGame)
        }
      }
    }
  }
}

game();