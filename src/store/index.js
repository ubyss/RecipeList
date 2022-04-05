import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'Ovo-cozido',
        title: 'Ovo cozido',
        description: 'Delicioso ovo cozido e fácil de fazer',
        ingredients: [
          '1 ovo',
          '1 colher de sal',
        ],
        method: [
          'Coloque o ovo em uma panela',
          'Adicione agua até cobrir totalmente o ovo',
          'Espere uns 15 minutos a agua ferver',
          'Tire o ovo da agua e espere esfriar',
          'Aproveite !'
        ]
      },
      {
        slug: 'miojo',
        title: 'miojo',
        description: 'Delicioso macarrão com salada e carne',
        ingredients: [
          '1 miojo',
          '1 cebola',
          '2 legumes',
          '1 carne',
        ],
        method: [
          'Esquente a agua em uma panela, no minimo 200ml',
          'Adicione o mijo quando fervido',
          'Adicione os legumes e a cebola enquanto o mocarrão se desprende',
          'Adicione a carne e aproveite !',
        ]
      }
    ]
  },
  mutations: {
    ADD_RECIPE (state, recipe) {
      state.recipes.unshift(recipe)
    }
  },
})
