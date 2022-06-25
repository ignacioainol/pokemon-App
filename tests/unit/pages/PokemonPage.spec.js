import PokemonPage from "@/pages/PokemonPage"
import { shallowMount, mount } from "@vue/test-utils"


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
})
