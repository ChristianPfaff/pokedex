
let currentPokemon;

async function loadPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/charmander";
  let response = await fetch(url);
  currentPokemon = await response.json();
  renderPokemonInfo();
}

function renderPokemonInfo() {
  document.getElementById("pokemonName").innerHTML = currentPokemon["name"];
  document.getElementById("pokemonPicture").src = currentPokemon["sprites"]["front_default"];
  //let urlImgCharmander = currentPokemon["sprites"]["front_default"];
  //console.log(currentPokemon["sprites"]["front_default"]);
  //let urlImgCharmander = " C:\Users\Franz\Documents\Lergang Webprogrammierer\Module\Modul_6_Javascript Einführung\Übungen\3-Bild ändern\Berghaupten.jpg";
  //document.getElementById("pokemonPicture").backgroundImage = "url('imgPokemont')";
  //document.getElementsByClassName('pokemonPicture').style.backgroundImage = "url(currentPokemon["sprites"]["front_default"])";
}
