<template>
  <div class="pokemon-container">
    <div class="card-pokemon">
     <img
        v-if="!showPokemon"
        class="hidden-pokemon"
        :src="imgSrc"
        alt="Pokemon">

     <img
        v-else
        class="fade-in"
        :src="imgSrc"
        alt="Pokemon">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
    min-height: 300px;
    width: 100%;

}
.card-pokemon{
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
}
img {
    display: block; 
    height: 270px;
    left:19%;
    margin: auto;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>