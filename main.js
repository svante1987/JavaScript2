/* använder querySelector för att ta saker ifrån DOM */
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

/* klickar man på knappen körs fetch */
button.addEventListener('click',function(name){
/* här är min fetch i länken så ber jag fetch hämta användar input (+input.value+) */
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6f8be410a1a8662918de11d14f4f922e')
/* här är min promises, eller responses */
.then(response => response.json())
/* data är en funktion med variabler som vi kan få tag i */
.then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
/* inner HTML här för att javascript ska kunna visa informationen */

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp - "+tempValue;
  desc.innerHTML = "Desc - "+descValue;
  input.value="";
})


.catch(err => alert("Aj, aj den staden känner ingen till..."))
})