var td = document.querySelectorAll('td');
var player = true;
var turnPlayer = document.querySelector("strong");

for (var i = 0; i <= td.length; i++) {
  td[i].addEventListener("click" , function() {
    if (this.textContent === "" && player) {
      this.textContent = 'x';
      turnPlayer.textContent = "Second"
      player = !player;
    } else if (this.textContent === "" && !player) {
      this.textContent = 'o';
      turnPlayer.textContent = "First"
      player = !player;
    } else {
      console.log(this.textContent)
    }
})
};