
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
  showData();
}

function showData() {
  //Vorhandenes div-Element wird divMain zugewiesen   
  let divMain = document.getElementById('divMain');
  //Ein "table"-Element wird erzeugt ist aber noch keinem Parent zugeordnet
  let newTable = document.createElement('table');
  //Dem neuen table-Element wird noch eine id zugewiesen
  newTable.id = 'idTable';
  //Das neue table-Element wird an das Elternelement divMain im DOM angehängt
  divMain.appendChild(newTable);

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

  document.getElementById('idTable').parentNode.innerHTML += `
     <div id="final-Text" class="final-Text">
       <h5>Type defenses</h5>
       <picture>The effectiveness of each type on Charmander.</picture>
     </div>
     `


}

