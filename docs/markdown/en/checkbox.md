
# Checkbox

----

## Basic

Need to bind `model` separately for standalone use.

:::demo
```html
<at-checkbox v-model="checkboxValue1" label="Shenzhen">Shenzhen</at-checkbox>
<p class="demo-desc">{{ checkboxValue1 }}</p>
```
:::

## Disabled

To make a checkbox as disabled, add `disabled` property to the `Checkbox`.

:::demo
```html
<at-checkbox v-model="checkboxValue2" label="Shenzhen" disabled>Shenzhen</at-checkbox>
<at-checkbox v-model="checkboxValue3" label="O2Team" disabled checked>O2Team</at-checkbox>
```
:::

## Checkbox Group

Use `CheckboxGroup` combined with array to generate a combination.

:::demo
```html
<at-checkbox-group v-model="checkboxValue4">
  <at-checkbox label="Shenzhen">Shenzhen</at-checkbox>
  <at-checkbox label="Beijing">Beijing</at-checkbox>
  <at-checkbox label="Shanghai">Shanghai</at-checkbox>
  <at-checkbox label="Guangzhou" disabled>Guangzhou</at-checkbox>
  <at-checkbox label="O2Team" disabled>O2Team</at-checkbox>
</at-checkbox-group>
<p class="demo-desc">{{ checkboxValue4 }}</p>
```
:::

## Checkbox Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | value of selection | String | - | - |
| disabled | disable selection or not | Boolean | - | false |
| checked | whether the checkbox is selected | Boolean | - | false |

## Checkbox Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-change | Emitted when the state of selection is changed | the `lavel` value of selected button |

## Checkbox Group Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-change | Emitted when the state of selection is changed | the `lavel` value of selected button |

<script>
export default {
  data() {
    return {
      checkboxValue1: true,
      checkboxValue2: false,
      checkboxValue3: false,
      checkboxValue4: ['Shenzhen', 'O2Team']
    }
  }
}
</script>
