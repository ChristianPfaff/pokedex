
let currentPokemon;

async function loadPokemon() {
  let url = "https://pokeapi.co/api/v2/pokemon/charmander";
  let response = await fetch(url);
  currentPokemon = await response.json();
  renderPokemonInfo();
}

function renderPokemonInfo() {
  document.getElementById("pokemonName").innerHTML = currentPokemon["name"];

  let imgPokemont = currentPokemon["sprites"]["front_default"];
  console.log(imgPokemont);

  //document.getElementById("pokemonPicture").backgroundImage = "url('imgPokemont')";
  document.getElementsByClassName('pokemonPicture').style.backgroundImage = 'url(imgPokemont)';
}
