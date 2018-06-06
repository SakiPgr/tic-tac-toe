var td = document.querySelectorAll('td');

for (var i = 0; i <= td.length; i++) {
  td[i].addEventListener("click" , function() {
    this.style.visibility = 'hidden';
})
};