//Globale Variable
let currentPokemon;

async function loadPokemon(name) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + name;
  let response = await fetch(url);
  currentPokemon = await response.json();
  renderPokemonInfo();
}

function renderPokemonInfo() {
  document.getElementById("pokemonName").innerHTML = currentPokemon["name"];
  document.getElementById("pokemonPicture").src = currentPokemon["sprites"]["front_default"];
  showMenuBaseStats();
  showMenuAbout();
}

//Menü BaseStats
function showMenuBaseStats() {

  for (let i = 0; i < currentPokemon["stats"].length; i++) {
    let item = currentPokemon["stats"][i]["stat"]["name"];
    document.getElementById('idTable').innerHTML += `
      <tr>
         <td width="160" class="styleDateSet-1">${item}</td>
          <td class="d-flex align-items-center styleDateSet-2">
            25 %
            <div class="mx-3 progress">
              <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </td>    
      </tr>
      `
  }

  document.getElementById('idFinalText').innerHTML += `
       <h5>Type defenses</h5>
       <p>The effectiveness of each type on Charmander.</p>
  `
}

//Menü About
function showMenuAbout() {

  let item1 = currentPokemon["species"]["name"];
  let item2 = currentPokemon["height"];
  let item3 = currentPokemon["weight"];
  let item4 = currentPokemon["abilities"][0]["ability"]["name"];

  document.getElementById('idTableAbout').innerHTML = `
        <tr>
          <td width="160">Species</td>
          <td width="160"><b>${item1}</td>
        </tr>
        <tr>
          <td width="160">Height</td>
          <td width="160"><b>${item2}</td>
        </tr>
        <tr>
          <td width="160">Weight</td>
          <td width="160"><b>${item3}</td>
        </tr>
        <tr>
          <td width="160">Abilities</td>
          <td width="160"><b>${item4}</td>
        </tr>
  `
}

function btnChar() {

  delRowTable();
  document.getElementById('pokedex').classList.remove('d-none');
  document.getElementById('pokedex').classList.add('pokedexCharmander');
  document.getElementById('divMain').classList.remove('d-none');
  document.getElementById('pokemonName').classList.remove('d-none');
  document.getElementById('btnChar').disabled = true;
  document.getElementById('btnBul').disabled = false;
  document.getElementById('idFinalText').innerHTML = "";
  loadPokemon('charmander');

}

function btnBul() {

  delRowTable();
  document.getElementById('pokedex').classList.remove('d-none');
  document.getElementById('pokedex').classList.add('pokedexCharmander');
  document.getElementById('divMain').classList.remove('d-none');
  document.getElementById('pokemonName').classList.remove('d-none');
  document.getElementById('btnBul').disabled = true;
  document.getElementById('btnChar').disabled = false;
  document.getElementById('idFinalText').classList.add('d-none');
  document.getElementById('idFinalText').innerHTML = "";
  loadPokemon('bulbasaur');
}

//Steuerung der Anzeige für Menü BaseStats
function baseStats() {
  document.getElementById('idbaseStas').classList.add('disabled');
  document.getElementById('idTable').classList.remove('d-none');
  document.getElementById('idFinalText').classList.remove('d-none');
  document.getElementById('idAbout').classList.remove('disabled');
  document.getElementById('idTableAbout').classList.add('d-none');

}

//Steuerung der Anzeige für Menü About
function about() {
  document.getElementById('idAbout').classList.add('disabled');
  document.getElementById('idbaseStas').classList.remove('disabled');
  document.getElementById('idTable').classList.add('d-none');
  document.getElementById('idFinalText').classList.add('d-none');
  document.getElementById('idTableAbout').classList.remove('d-none');

}

function delRowTable() {
  let table1 = document.getElementById('idTable');
  table1.innerHTML = "";
  let table2 = document.getElementById('idTableAbout');
  table2.innerHTML = "";
}

