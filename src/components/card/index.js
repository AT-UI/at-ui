import Card from './src/card.vue'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

export default Card
