var td = document.querySelectorAll('td');
var player = true;

for (var i = 0; i <= td.length; i++) {
  td[i].addEventListener("click" , function() {
    if (this.textContent === "" && player) {
      this.textContent = 'x';
      player = !player;
    } else if (this.textContent === "" && !player) {
      this.textContent = 'o';
      player = !player;
    } else {
      console.log(this.textContent)
    }
})
};