<template>
  <div>
    <h1>Quien es este Pokemon?</h1>

    <PokemonPicture :pokemonId="7" :showPokemon="true"/>
    <PokemonOptions/>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

PokemonPicture
export default {
  components: {
    PokemonPicture,
    PokemonOptions
}
}
</script>