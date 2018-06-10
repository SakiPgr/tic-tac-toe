var td = document.querySelectorAll('td');
var player = true;
var turnPlayer = document.querySelector("strong");
var winner = document.getElementById("winner");
var newGame = document.getElementById("newGame");

newGame.addEventListener("click", function(){
  for (var i = 0; i < td.length; i++) {
    td[i].textContent = "";
  }
});

function game() {
  for (var i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      if (this.textContent === "" && player) {
        this.textContent = 'x';
        turnPlayer.textContent = "Second"
        winningTheGame()
        player = !player;
      } else if (this.textContent === "" && !player) {
        this.textContent = 'o';
        turnPlayer.textContent = "First"
        player = !player;
      } else {
        alert("There is already a "+ '"' + this.textContent +
        '"' + " there")
      }
  })}
};

// this needs some more testing to find the right way
function winningTheGame() {
  if (td[0].textContent === "x" &&
      td[1].textContent === "x" &&
      td[2].textContent === "x") {
    alert("You won!")
  }
}


game();