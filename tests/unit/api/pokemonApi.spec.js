import pokemonApi from "@/api/pokemonApi"

describe('Pokemon API', () => {
  test('axios should be configurated with api of pokemon', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  })
})