<template>
  <h1 v-if="!pokemon">Waiting ...</h1>
  <div v-else>
    <h1>Quien es este Pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr"/>
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
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      const randInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[randInt]
      console.log(this.pokemon) 
    }
  },
  mounted() {
    this.mixPokemonArray()
}
}
</script>