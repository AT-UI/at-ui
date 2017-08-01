# Icon 图标

----

语义化的矢量图形，`AT-UI` 使用开源的 [Feather](https://feathericons.com/) 作为图标库，并制作成了 `icon font`。`Feather` 使用的是 `24x24` 的尺寸，拥有一致的圆角，一致的笔画宽度，确保整个图标系统保持视觉上的统一性。

## 如何使用

使用 `class="icon"` 来声明图标，具体图标的名称请 `copy` 相应的标签

:::demo
```html
<i class="icon icon-zoom-in"></i>
<i class="icon icon-zoom-out"></i>
<i class="icon icon-check"></i>
<i class="icon icon-x"></i>
```
:::

## 图标示例

### 主要

<icon-list type="core"></icon-list>

### 媒体控制

<icon-list type="media"></icon-list>

### 通信

<icon-list type="communication"></icon-list>

### 照片

<icon-list type="photo"></icon-list>

### 地理位置

<icon-list type="location"></icon-list>

### 天气

<icon-list type="weather"></icon-list>

### 箭头

<icon-list type="arrows"></icon-list>

### LOGO

<icon-list type="logos"></icon-list>


<style lang="scss" scoped>
.icon {
  font-size: 20px;
  margin-right: 10px;
}
</style>
