import PokemonPage from "@/pages/PokemonPage"
import { shallowMount, mount } from "@vue/test-utils"
import { pokemons } from "../mocks/pokemons.mock";


describe('PokemonPage Component Test', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  });

  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.html()).z
  })

  test('debe llamar mixPokemonArray al montar', () => {
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')

    const wrapper = shallowMount(PokemonPage)

    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })

  test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[3],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    const pokemonPicture = wrapper.find('pokemon-picture-stub')
    const pokemonOptions = wrapper.find('pokemon-options-stub')

    expect(pokemonPicture.exists()).toBeTruthy()
    expect(pokemonOptions.exists()).toBeTruthy()
    expect(pokemonPicture.attributes('pokemonid')).toBe('4')
    expect(pokemonOptions.attributes('pokemons')).toBeTruthy()
  })
})
