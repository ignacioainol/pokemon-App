import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('Test in getPokemonOptions Helpers', () => {
  test('Debe regresar un arreglo de numeros', () => {
    const pokemons = getPokemons()
    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)
    expect(pokemons[500]).toBe(501)
    expect(pokemons[649]).toBe(650)
  })

  test('should return an array of 4 elements with pokemon\'s names', async () => {
    const mixedPokemons = getPokemons()
      .sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))
    expect(pokemons.length).toBe(4)
    expect(typeof pokemons[0].name).toBe('string')
    expect(typeof pokemons[1].name).toBe('string')
    expect(typeof pokemons[2].name).toBe('string')
    expect(typeof pokemons[3].name).toBe('string')
  })

  test('getPokemonOptions should return an mixed array', async () => {

  })
})

