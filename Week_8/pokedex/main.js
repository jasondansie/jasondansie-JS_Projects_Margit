
const cards = document.querySelector(".cards");
const search = document.querySelector("#search");
const buttons = document.querySelectorAll("button");

let pokemanData = [];
let singlePokeman;

const getPokeDex = async (pokeApiUrl) => {
    pokemanData = [];
    await fetch(pokeApiUrl).then((response) => response.json())
    .then((data) => {
        if (pokeApiUrl.includes("generation")) {
            getPokemonData(data.pokemon_species);
        } else {
            getPokemonData(data.results);
        }      
    });
}

getPokemonData = (data) => {
    let url = "";

    data.forEach(pokemon => { 
    
        if (pokemon.url.includes("species")) {        

            const paragraph = pokemon.url;          
            const regex = /[0-9]/g;
            const idArray = pokemon.url.match(regex);        
            const id = idArray[1] + idArray[2] + idArray[3];
            
            url = "https://pokeapi.co/api/v2/pokemon/" + id
        } else {
            url = pokemon.url
        }        
        
        fetch(url).then(response => response.json()).then((pokeData) => {
            pokemanData.push(pokeData);          
            displayPokeCards(pokemanData);
        });     
    }); 
}

getGeneration = (index) => {
    let url = "https://pokeapi.co/api/v2/generation/" + index;
    
    getPokeDex(url)
}

searchPokedex = (e) => {
    e.preventDefault();

    pokeman = pokemanData.filter(pok => pok.name.includes(search.value));

    if (search.value == "") {
        displayPokeCards(pokemanData);
    }
    else{
        displayPokeCards(pokeman);    
    }
}

const displayPokeCards = (pokemans) => {
   
    const card = pokemans.sort((a, b) => a.name > b.name).map((pokeman) => {

        if (pokeman.abilities.length > 1 && pokeman.types.length > 1) {
            return `<div class="container">
        <div class="pokemons-card"> 
            <h3 id="pokemon-name">${pokeman.name}</h3>
            <img src= ${pokeman.sprites.other["official-artwork"].front_default} alt="${pokeman.name}" width="100px">
            <div class="abilities"> 
                <p class="abilities-names">Abilities</p>
                <ul>
                
                    <li>${pokeman.abilities[0].ability.name}</li>
                    <li>${pokeman.abilities[1].ability.name}</li>
                </ul>    
            </div>
            <div class="types"> 
                <p class="types-names">Types</p>
                <ul>
                    <li>${pokeman.types[0].type.name}</li>
                    <li>${pokeman.types[1].type.name}</li>
                </ul>    
            </div>
        </div>
        </div>`
            
        } else {
            return `<div class="container">
        <div class="pokemons-card"> 
            <h3 id="pokemon-name">${pokeman.name}</h3>
            <img src= ${pokeman.sprites.other["official-artwork"].front_default} alt="${pokeman.name}" width="100px">
            <div class="abilities"> 
                <p class="abilities-names">Abilities</p>
                <ul>              
                    <li>${pokeman.abilities[0].ability.name}</li>
                </ul>    
            </div>
            <div class="types"> 
                <p class="types-names">Types</p>
                <ul>
                    <li>${pokeman.types[0].type.name}</li>
                </ul>    
            </div>
        </div>
        </div>`
            
        }
        
    }).join('');
    
    cards.innerHTML = card;
}

buttons.forEach((button, i)=>{
    button.addEventListener("click", () => getGeneration(i + 1));
})

search.addEventListener("keyup", searchPokedex);

getPokeDex("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");

