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
})
