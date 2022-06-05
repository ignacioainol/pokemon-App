<template>
  <div class="pokemon-container">
    <div class="card-pokemon">
      <img class="hidden-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="Pokemon">
      <img class="fade-in" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt="Pokemon">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
    width: 100%;

}
.card-pokemon{
    position: relative;
    width: 300px;
    height: 200px;
    margin: 0 auto;
}
img {
    width: 200px;
    margin: auto;
    display: block;
    position: absolute;
    left:19%;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>