/*region: VÄDER*/
/*  mina variabler, använder querySelector för att ta saker ifrån DOM */
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

/* klickar man på knappen körs fetch */
button.addEventListener('click',function(name){
/* här är min fetch i länken så ber jag fetch hämta användar input 
(+input.value+) för att se celsius la jag till (&units=metric) i slutet utav min key */
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6f8be410a1a8662918de11d14f4f922e&appid&units=metric')
/* här är min promises, eller responses */
.then(response => response.json())
/* data är en funktion med variabler som vi kan få tag i */
.then(data => {
  var nameValue = data['name'];
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0]['description'];
/* inner HTML här för att javascript ska kunna visa informationen på webbplatsen */

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp - "+tempValue;
  desc.innerHTML = "Desc - "+descValue;
  input.value="";
})


.catch(err => alert("Aj, aj den staden känner ingen till..."))
})
/*end region*/

/*REGION: Venues*/
/*variabler*/

/*url med api key och api secret*/
/*fetch('https://api.foursquare.com/v2/venues/search?ll='+input.value+
'&client_id=ICQLB0Y105CEOG5MEUK0ESCCSFVVJVR5W3YZU01PWWNLN33Y&client_secret=WOPRSG1BSB0FWGZCRJCDZL2YRPKJTK53BH5TAZGZWNCS0MJS')*/



