/*region: VÄDER*/
/*  mina variabler, använder querySelector för att ta saker ifrån DOM */
let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');

/* klickar man på knappen körs fetch */
button.addEventListener('click',function(name){
/* här är min fetch i länken så ber jag fetch hämta användar input 
(+input.value+) för att se celsius la jag till (&units=metric) i slutet utav min key */
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6f8be410a1a8662918de11d14f4f922e&appid&units=metric')
/* här är min promises, eller responses */
.then(response => response.json())
/* data är en funktion med variabler som vi kan få tag i */
.then(data => {
  let nameValue = data['name'];
  let tempValue = data['main']['temp'];
  let descValue = data['weather'][0]['description'];
/* inner HTML här för att javascript ska kunna visa informationen på webbplatsen */

  main.innerHTML = nameValue;
  temp.innerHTML = "Temp - "+tempValue;
  desc.innerHTML = "Desc - "+descValue;
  input.value="";
})


.catch(err => alert("Aj, aj den staden känner ingen till..."))
})
/*end region*/

/*REGION: FOURSQUARE*/
/*variabler*/
const clientId = "ICQLB0Y105CEOG5MEUK0ESCCSFVVJVR5W3YZU01PWWNLN33Y";
const clientSecret = "WOPRSG1BSB0FWGZCRJCDZL2YRPKJTK53BH5TAZGZWNCS0MJS";

// datum för 'v' search parametern
const todaysDate = new Date();


// url för att hitta ställen
const venueUrl = new URL("https://api.foursquare.com/v2/venues/explore");
venueUrl.searchParams.append("client_id", clientId);
venueUrl.searchParams.append("client_secret", clientSecret);
venueUrl.searchParams.append("near", '.input_text');
venueUrl.searchParams.append("v", todaysDate);

// be om att få info om ställen
const venueRequest = new XMLHttpRequest();
venueRequest.open("GET", venueUrl);
venueRequest.responseType = "json";

venueRequest.onload = function () {
  // nu har vi ställen att kolla in
  const venues = venueRequest.response.response.groups[0].items;

  // välj ett ställe
  const venuePick = venues[2].venue;

// bygg en url för att få tag på bilder på stället
const imageUrl = new URL(
  `https://api.foursquare.com/v2/venues/${venuePick.id}/photos`
);
imageUrl.searchParams.append("client_id", clientId);
imageUrl.searchParams.append("client_secret", clientSecret);
imageUrl.searchParams.append("v", todaysDate);


  // be om att få bild info för stället
  const imageRequest = new XMLHttpRequest();
  imageRequest.open("GET", imageUrl);
  imageRequest.responseType = "json";

  imageRequest.onload = function () {
    // nu har vi bild info
    const imageInfo = imageRequest.response.response.photos.items[0];
    // bygg ihop en länk till bilden
    const imageLink = imageInfo.prefix + "300x200" + imageInfo.suffix;

    // hämta en <img>
    const img = document.querySelector("img");
    img.src = imageLink;

    // hämta subtiteln
    const caption = document.querySelector("p");
    // sätt den till något informativt
    caption.innerHTML = `${venuePick.name} <br> ${venuePick.location.formattedAddress[0]}`;
  };

  imageRequest.send();
};

venueRequest.send();



