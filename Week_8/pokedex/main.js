
const cards = document.querySelector(".cards");
let pokedex = [];
let pokemans = [];


const getPokeDex =  () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10").then((response) => response.json())
    .then((data) => {
        pokedex = data.results;
        pokeCard();
    });
}

const getPokemanData = () => {
    const card = pokedex.map((pokeman) => {
        fetch(pokeman.url).then((response) => response.json())
    .then((data) => {
         pokemans.push(data);
        });             
    })   
    pokeCard();
}

const pokeCard = () => {
    
    const card = pokedex.map((pokeman) => {
        return `<div class = "card">
        <img src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png" alt="random image">
        <div class="infoArea">
            <h1>${pokeman.name}</h1>
            <i class="fa-brands fa-css3"></i>
        </div>  
        </div>`
    }).join('');
    
    cards.innerHTML = card;

}

getPokeDex();
