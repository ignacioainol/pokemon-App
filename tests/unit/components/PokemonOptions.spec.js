import PokemonOptions from "@/components/PokemonOptions";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mock";

describe("Pokemon Options Components", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar las 4 opciones correctamente', () => {

    const liTags = wrapper.findAll('li')
    expect(liTags.length).toBe(4)
    expect(liTags[0].text()).toBe('Bulbasaur')

  })

  test('debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll('li')

    li1.trigger('click')

    console.log(wrapper.emitted('selectionPokemon'))

    // expect(wrapper.emitted('selectionPokemon'))
  })
});
