
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
                pokemanData.push(pokeData);          
                displayPokeCards(pokemanData);
            });     
        }); 
    });
}

const displayPokeCards = (pokemans) => {
   
    const card = pokemans.sort((a, b) => a.name > b.name).map((pokeman) => {
        return `<div class = "card">
        <img src= ${pokeman.sprites["front_default"]} alt="random image">
        <div class="infoArea">
            <h1>${pokeman.name}</h1>
            <div id="abilities">
               <label for="ability">Abilities</label> 
               <ul id="ability">
                <li>ability 1</li>
                <li>ability 2</li>
               </ul>    
            </div>
            <div id="types">                      
                <label for="type">Type</label> 
                <ul id="ability">
                    <li>type 1</li>
                    <li>type 2</li>
                </ul>   
            </div>
        </div>            
    </div>`
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
