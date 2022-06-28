import PokemonPage from "@/pages/PokemonPage"
import { shallowMount, mount } from "@vue/test-utils"
import { wrap } from "module";
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

  test('Pruebas con checkAnswer', async () => {
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

    await wrapper.vm.checkAnswer(1)

    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBe(true)
    expect(wrapper.find('h2').text()).toBe(`Siii!, es ${pokemons[0].name}`)

    await wrapper.vm.checkAnswer(10)

    // expect(wrapper.find('h2').text()).toBe(`Fallaste, era ${pokemons[0].name}`)
    expect(wrapper.vm.message).toBe(`Fallaste, era ${pokemons[0].name}`)


  })



})
