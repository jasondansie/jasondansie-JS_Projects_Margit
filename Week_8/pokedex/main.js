
const cards = document.querySelector(".cards");
let pokemanData = [];

const getPokeDex = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then((response) => response.json())
    .then((data) => {
        data.results.forEach(pokemon => {               
            let url = pokemon.url 
            fetch(url).then(response => response.json()).then((pokeData) => {
                pokemanData.push(pokeData);          
                displayPokeCards();          
            });          
        }); 
    });
}

const displayPokeCards = () => {
   
    const card = pokemanData.sort((a, b) => a.name > b.name).map((pokeman) => {
        return `<div class = "card">
        <img src= ${pokeman.sprites["front_default"]} alt="random image">
        <div class="infoArea">
            <h1>${pokeman.name}</h1>
            <i class="fa-brands fa-css3"></i>
        </div>  
        </div>`
    }).join('');
    cards.innerHTML = card;
}

getPokeDex();

