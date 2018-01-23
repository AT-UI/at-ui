# Installation

----

## NPM

Recommended use `npm` to development, enjoy the ecosystem of `node` and the chain tool of `webpack`, which brings convenience of development. With the package modules installed by `NPM`, we can easily refer to it in `import` or `require`.

```bash
npm install at-ui

npm install at-ui-style
```

## CDN

Can use traditional `<script>` and `<link>` tag for global use.

Get the latest version of `AT-UI` from [jsDelivr](https://www.jsdelivr.com/package/npm/at-ui).

```html
<!-- import Vue -->
<script src="//cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<!-- import CSS -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/at-ui-style/css/at.min.css">
<!-- import JavaScript -->
<script src="//cdn.jsdelivr.net/npm/at-ui/dist/at.min.js"></script>
```

#### DEMO：

By using the script tag to import resources, we can quickly write a demo page with `AT-UI`. You can copy the following code or view [Online Demo](https://jsbin.com/dezafos/edit?html,output) directly.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>AT-UI Example</title>
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/at-ui-style/css/at.min.css">
  <script src="//cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/at-ui/dist/at.min.js"></script>
  <style>
    #app {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>
<body>
  <div id="app">
    <at-button @click="showMessage">Show message</at-button>
  </div>

  <script>
    new Vue({
      el: '#app',
      methods: {
        showMessage: function () {
          this.$Message('Thanks for using AT-UI')
        }
      }
    })
  </script>
</body>
</html>
```
