document.querySelector('h1').classList.add('red');



var h2s = document.querySelectorAll('h2');
for (i=0; i <h2s.length; i++) {
  h2s[i].classList.add('blue');
}

var h3s = document.querySelectorAll('h3');
for (i=0; i < h3s.length; i++) {
  h3s[i].textContent= h3s[i].textContent.toUpperCase();
}

// [].forEach.call(h3s, function(h3)){
//  h3.textContent = h3.textContent.toUpperCase();
// }
