<template>
  <h1 v-if="!pokemon">Waiting ...</h1>
  <div v-else>
    <h1>Quien es este Pokemon?</h1>

    <PokemonPicture 
        :pokemonId="pokemon.id" 
        :showPokemon="showPokemon"/>
    <PokemonOptions 
        :pokemons="pokemonArr"
        @selection="checkAswer"
        />

        <div>
          <h2>{{ message }}</h2> 
  
          <button>
            New Game
          </button>
        </div>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

PokemonPicture
export default {

  components: {
    PokemonPicture,  
    PokemonOptions
  },
  data() {
    return{
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const randInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randInt]
      console.log(this.pokemon) 
    },
    checkAswer( pokemonId){
      this.showPokemon = true

      if(pokemonId === this.pokemon.id){
        this.message = `Siii!, es ${this.pokemon.name}`
      }else{
        this.message = `Fallaste, era ${this.pokemon.name}`
      }
       
      const allLi = document.querySelectorAll('li')

      allLi.forEach((li,i) => {
        li.classList.add('blocked-li')
        console.log(li)
      })
    }
  },
  mounted() {
    this.mixPokemonArray()
}
}
</script>