export default {
  name: 'Cell',
  functional: true,
  props: {
    item: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render: (h, ctx) => {
    const params = {
      item: ctx.props.item,
      index: ctx.props.index
    }
    if (ctx.props.column) {
      params.column = ctx.props.column
    }
    return ctx.props.render(h, params)
  }
}
