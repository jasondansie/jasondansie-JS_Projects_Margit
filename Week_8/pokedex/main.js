
const cards = document.querySelector(".cards");
let pokedex = [];


const getPokeDex =  () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=").then((response) => response.json())
    .then((data) => {
        pokedex = data.results;
        pokeCard();
    });
}

getPokeDex();

const pokeCard = () => {
    const card = pokedex.map((pokeman) => {
        return `<div class = "card">
        <img src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png" alt="random image">
        <div class="infoArea">
            <h1>${pokeman.name}</h1>
            <i class="fa-brands fa-css3"></i>
        </div>  
        </div>               `
    }).join('');
    cards.innerHTML = card;
}
