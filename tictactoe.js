var td = document.querySelectorAll('td');

for (var i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function() {
    console.log(self.innerHTML);
    // self.style.backgroundColor = "pink";
})};