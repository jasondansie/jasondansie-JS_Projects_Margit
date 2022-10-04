
const cards = document.querySelector(".cards");
const search = document.querySelector("#search");
const gen1 = document.querySelector("#gen1");

let pokemanData = [];
let singlePokeman;

const getPokeDex = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then((response) => response.json())
    .then((data) => {
        data.results.forEach(pokemon => {               
            let url = pokemon.url 
            fetch(url).then(response => response.json()).then((pokeData) => {
                console.log("pokedata", pokeData.length);
                pokemanData.push(pokeData);          
                displayPokeCards(pokemanData);
            });     
        }); 
    });
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

searchPokedex = (e) => {
    e.preventDefault();

    pokeman = pokemanData.filter(pok => pok.name.includes(search.value));

    console.log(search.value);
    if (search.value == "") {
        displayPokeCards(pokemanData);
    }
    else{
        displayPokeCards(pokeman);
        singlePokeman = pokeman;
        
    }

}

getGeneration = () => {

    console.log("sp: ", pokeman);

    let gen = fetch(`https://pokeapi.co/api/v2/generation/1/`).then((response) => response.json())
    .then((data) => {
        console.log("gen: " ,data);
    })
}

search.addEventListener("keyup", searchPokedex);
gen1.addEventListener("click", getGeneration);
getPokeDex();
