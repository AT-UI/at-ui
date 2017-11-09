
# Card

---

## Basic

A basic card containing a title, content and an extra corner content.

:::demo
```html
<at-card style="width: 300px;">
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</at-card>
```
:::

## No border

A borderless card.

:::demo
```html
<at-card style="width: 300px;" :bordered="false">
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</at-card>
```
:::

## Disable hover shadow

Disable mouse hover shadow.

:::demo
```html
<at-card style="width: 300px;" :no-hover="true">
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</at-card>
```
:::

## Simple card

A simple card only containing a content area.

:::demo
```html
<at-card style="width: 300px;" :body-style="{ padding: 0 }">
  <div>
    <img style="width: 100%" src="https://misc.aotu.io/koppthe/at-ui/cover.jpg">
    <div style="padding: 14px;">
      <p>AT-UI</p>
    </div>
  </div>
</at-card>
```
:::

## Loading card (defalut)

Shows a loading indicator while the contents of the card is being fetched.

:::demo
```html
<at-card :loading="loading" :style="{ width: '300px' }">
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div>
    Card Content
  </div>
</at-card>
```
:::

## Loading card (custom)

Custom loading content.

:::demo
```html
<at-card :loading="loading" style="width: 300px">
  <h4 slot="title">Card Title</h4>
  <div slot="extra"><a>Extra</a></div>
  <div slot="loading">Loading...</div>
  <div>
    Card Content
  </div>
</at-card>
```
:::

## Card Props

| Property  | Description   | Type      | Accepted Values                  | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| bordered | toggles rendering of the border around the card | Boolean | - | true |
| noHover | whether to be disable hovering when mouse over | Boolean | - | false |
| bodyStyle | inline style to apply to the card content | Object | - | {} |
| loading | shows a loading indicator while the contents of the card are being fetched | Boolean | - | false |

## Card slot

| Name      | Description |
|----------|-------- |
| title | custoimzed card title |
| extra | extra contents |
| loading | custoimzed card loading |
| - | card content |

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
