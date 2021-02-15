/* använder querySelector för att ta saker ifrån DOM */
var button = document.querySelector('.button');
var button = document.querySelector('.inputValue');
var inputValue = document.querySelector('.name');
var inputValue = document.querySelector('.desc');
var inputValue = document.querySelector('.temp');

/* här är min fetch i länken så ber jag fetch hämta användar input (+input.value+) */
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6f8be410a1a8662918de11d14f4f922e')
/* här är min promises, eller responses */
.then(response => response.json())
.then(data => console.log(data))

