var td = document.querySelectorAll('td');
var player = true;
var turnPlayer = document.querySelector("strong");
var winner = document.getElementById("winner");
var newGame = document.getElementById("newGame");
var winCondition = [[td[0], td[1], td[2]],
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
  }
  turnPlayer.textContent = "First";
  player = true;
  winner.textContent = "";
});

function game() {
  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      if (this.textContent === "" && player) {
        this.textContent = 'x';
        turnPlayer.textContent = "Second"
      } else if (this.textContent === "" && !player) {
        this.textContent = 'o';
        turnPlayer.textContent = "First"
      } else {
        alert("There is already a "+ '"' + this.textContent +
        '"' + " there")
        player = !player;
      }
      player = !player;
      winningTheGame()
  })}
};

function winningTheGame() {
  for (var i = 0; i < winCondition.length; i++) {
    if (winCondition[i][0].textContent !== "") {
      if (winCondition[i][0].textContent ===
          winCondition[i][1].textContent &&
          winCondition[i][0].textContent ===
          winCondition[i][2].textContent) {
        winner.textContent = turnPlayer.textContent;
      }
    }
  }
}

game();