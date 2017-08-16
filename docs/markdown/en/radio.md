# Radio

----

## Basic

Each button required a single `model` binding.

:::demo
```html
<at-radio v-model="radio" label="1">Option One</at-radio>
<at-radio v-model="radio" label="2">Option Two</at-radio>
```
:::

## Disabled

To make a radio button as disabled, add `disabled` property to the `Radio`.

:::demo
```html
<at-radio v-model="radio2" label="3" disabled>Disabled and not selected</at-radio>
<at-radio v-model="radio2" label="4" disabled>Disabled and selected</at-radio>
```
:::

## Radio Group

A group of radio components. Combined `AtRadioGroup` with `AtRadio`

::: demo
```html
<at-radio-group v-model="radio3">
  <at-radio label="1">Option One</at-radio>
  <at-radio label="2">Option Two</at-radio>
  <at-radio label="3">Option Three</at-radio>
</at-radio-group>
```
:::


## Radio Button Group

Button style of Radio Group. Combined `AtRadioGroup` with `AtRadioButton`

:::demo
```html
<at-radio-group v-model="radio4">
  <at-radio-button label="Beijing">Beijing</at-radio-button>
  <at-radio-button label="Shanghai" disabled>Shanghai</at-radio-button>
  <at-radio-button label="Shenzhen">Shenzhen</at-radio-button>
  <at-radio-button label="O2Team">O2Team</at-radio-button>
</at-radio-group>
```
:::

## Customize

Use `fill` property to change the background color of button. Use `text-color` property to change the text color of button.

:::demo
```html
<p class="demo-desc">Customize Background Color</p>
<div class="row">
  <at-radio-group v-model="radio5" fill="#FF6464">
    <at-radio-button label="Beijing">Beijing</at-radio-button>
    <at-radio-button label="Shanghai" disabled>Shanghai</at-radio-button>
    <at-radio-button label="Shenzhen">Shenzhen</at-radio-button>
    <at-radio-button label="O2Team">O2Team</at-radio-button>
  </at-radio-group>
</div>
<p class="demo-desc">Customize Text Color</p>
<div class="row">
  <at-radio-group v-model="radio5" text-color="#4C5D73">
    <at-radio-button label="Beijing">Beijing</at-radio-button>
    <at-radio-button label="Shanghai" disabled>Shanghai</at-radio-button>
    <at-radio-button label="Shenzhen">Shenzhen</at-radio-button>
    <at-radio-button label="O2Team">O2Team</at-radio-button>
  </at-radio-group>
</div>
```
:::

## Size

There are three sizes of a radio grouop: `large`，`normal`，`small`.

:::demo
```html
<div class="row">
  <at-radio-group v-model="radio6" size="large">
    <at-radio-button label="Beijing">Beijing</at-radio-button>
    <at-radio-button label="Shanghai" disabled>Shanghai</at-radio-button>
    <at-radio-button label="Shenzhen">Shenzhen</at-radio-button>
    <at-radio-button label="O2Team">O2Team</at-radio-button>
  </at-radio-group>
</div>
<div class="row">
  <at-radio-group v-model="radio6" size="normal">
    <at-radio-button label="Beijing">Beijing</at-radio-button>
    <at-radio-button label="Shanghai" disabled>Shanghai</at-radio-button>
    <at-radio-button label="Shenzhen">Shenzhen</at-radio-button>
    <at-radio-button label="O2Team">O2Team</at-radio-button>
  </at-radio-group>
</div>
<div class="row">
  <at-radio-group v-model="radio6" size="small">
    <at-radio-button label="Beijing">Beijing</at-radio-button>
    <at-radio-button label="Shanghai" disabled>Shanghai</at-radio-button>
    <at-radio-button label="Shenzhen">Shenzhen</at-radio-button>
    <at-radio-button label="O2Team">O2Team</at-radio-button>
  </at-radio-group>
</div>
```
:::

## Radio Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| label | value of Radio | String / Number | - | - |
| value | compare with label to determine whether it is selected (only valid when use alone) | String / Number | - | - |
| disabled | whether Radio is disabled |Boolean | - | false |

## Radio Button Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| label | value of Radio Button | String / Number | - | - |
| disabled | whether Radio Button is disabled | Boolean | - | false |

## Radio Group Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | size of Radio Group | String | `small`, `normal`, `large` | normal |
| value | value of Radio Button, binding with `v-model` | String / Number | - | - |
| fill | background color of selected button | String (Hex) | - | - |
| textColor | text color of selected button | String (Hex) | - | - |

## Radio Group Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| radio-group-change | Emitted when the value of Radio is changed | the value of radio |

<style lang="scss" scoped>
  .row + .row {
    margin-top: 8px;
  }
</style>

<script>
  export default {
    data() {
      return {
        radio: '2',
        radio2: '4',
        radio3: '1',
        radio4: 'Shenzhen',
        radio5: 'Shenzhen',
        radio6: 'Shenzhen'
      }
    }
  }
</script>
