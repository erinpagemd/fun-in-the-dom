/* browser: true */

'use strict';

//make the h1 red by adding a class
document.querySelector('h1').classList.add('red');


//make the h2s blue by looping over them and adding a class
var h2s = document.querySelectorAll('h2');
for (var i=0; i < h2s.length; i++) {
  h2s[i].classList.add('blue');
}

// h3s toUpperCase(); 'hello'.toUpperCase() => 'HELLO'
var h3s = document.querySelectorAll('h3');
// for (i=0; i < h3s.length; i++) {
//   h3s[i].textContent = h3s[i].textContent.toUpperCase();
// }

// [] = Array.prototype
// make the h3s all upper case
[].forEach.call(h3s, function(el){
  el.textContent = el.textContent.toUpperCase();
})

//target is the class of our empty div at the end of the page
var target = document.querySelector('.target');
//string of html with a link
var elementString = '<h2>OMG <a href="http://google.com">GOOG</a></h2>'


//the button with id add-element has an event listener for click
document.querySelector('#add-element').addEventListener('click', function(){
  //when the click happens, the empty div gets the html string after the end of the element
  target.insertAdjacentHTML('afterend', elementString);
  //calling a function we make below
  target.appendChild(createSuperLimeDiv('OMG OMG OMG'));
});


//the button with id of add-image is waiting for a click
document.querySelector('#add-image').addEventListener('click', function(event){
  // this = event.target
  // var url = 'http://i.imgur.com/nPEDZd1.png';
  //grab the value in the previous element and assign it to the url variable
  var url = this.previousElementSibling.value;
  //clear the element after
  this.previousElementSibling.value = '';
  //assign the content to the image element
  target.appendChild(createImageElement(url));
});

//document fragments are dom nodes
function createSuperLimeDiv(text){
  var docFragment = document.createDocumentFragment();

  //create a div and assign it to variable supergreen
  var supergreen = document.createElement('div');
  //give the div a class attribute of supergreen
  supergreen.setAttribute("class", "supergreen");
  //append the new element to the end of the document
  docFragment.appendChild(supergreen);

  //create a new div and assign it to variable superyellow
  var superyellow = document.createElement('div');
  //give the div a class of superyellow
  superyellow.setAttribute("class", "superyellow");
  //append to the end of the document
  supergreen.appendChild(superyellow);
  //assign some text to the variable
  var superyellow_text = document.createTextNode(text);
  //append to the end of the document
  superyellow.appendChild(superyellow_text);

  return docFragment;
}

function createImageElement(url){
  var docFragment = document.createDocumentFragment();

  var img = document.createElement('img');
  //set the src attribute of the image to the url
  img.setAttribute("src", url);
  //add to the end of the document
  docFragment.appendChild(img);

  return docFragment;
}

setInterval(function () {
  setRandomColor(document.querySelector('h1'))
}, 1000)

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function setRandomColor(element){
  element.style.backgroundColor = randomColor();
}


function randomColor() {
  var red = getRandomColor();
  var green = getRandomColor();
  var blue = getRandomColor();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

