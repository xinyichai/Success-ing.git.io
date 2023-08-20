"use strict";

// Define a class responsible for fetching Pokémon data
class PokemonService {

    constructor() {
        this.pokedex = new Pokedex.Pokedex();
    }

    async getPokemonsList(offset = 0, limit = 20) {
        try {
            var promises = []

            this.pokedex.getPokemonsList({offset,limit}).then(function(response){
                response.results.forEach(element => {
                    var promises = this.pokede.getPokemonByName(element.name)
                    promises.push(promise)
                 }); 
                 
                 console.log(promise)
            })
        } catch (error) {
            throw new Error("Error fetching Pokémon data");
        }
    }
}

// Define a class responsible for displaying Pokémon cards
class HtmlBuilder {

    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }
  
    generateBgColorByTypes(types) {
         
    }

    createCard(pokemon) {
         
    }
  
    displayPokemonCards(pokemons) {
         this.createCard()
    }
}
  
  // Function to initiate the app and fetch/display Pokémon cards
async function startApp() {
    const pokemonService = new PokemonService();
    const htmlBuilder = new HtmlBuilder("content");

    try {
        // Fetch the list of Pokémon from the PokeAPI
        const pokemons = await pokemonService.getPokemonsList();

        // Display the Pokémon cards
        htmlBuilder.displayPokemonCards(pokemons);
    } catch (error) {
        console.error(error.message);
    }
}
  
// Start the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", startApp);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/path/to/your/service-worker.js');
    });
  }
  
  