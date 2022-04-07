<template>
  <div>
    <h1>Quien es este Pokemon?</h1>

    <PokemonPicture :pokemonId="7" :showPokemon="true"/>
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
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted() {
    this.mixPokemonArray()
}
}
</script>