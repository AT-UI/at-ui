import Card from './src/card'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

export default Card
