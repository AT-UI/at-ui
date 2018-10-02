<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="http://storage.360buyimg.com/mtd/home/logo-at1502718221686.svg">
  </a>
</p>

# AT UI

[![NPM][npm-version-image]][npm-version-url] [![david-dm][david-dm-image]][david-dm-url] [![travis][travis-image]][travis-url]

AT-UI es un marco de interfaz de usuario de front-end modular para desarrollar interfaces web rápidas y potentes basadas en Vue.js.

[README en-US](README.md) | [中文 README](README.zh-CN.md) | [LEEME es-ES](README.es-ES.md)

## Caracteristicas

- Basado en `Vue`
- Un flujo de trabajo de desarrollo front-end de npm + webpack + babel
- Soporte ES2015
- Independiente del estilo CSS, haga interfaces de usuario consistentes (vea: [AT-UI-Style](https://github.com/at-ui/at-ui-style))
- API amigable

## Ambiente de Soporte

- Los navegadores modernos e Internet Explorer 9+
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## Links

- [Pagina de Inicio](https://at-ui.github.io/at-ui/)
- [Vue](https://vuejs.org/)
- [Webpack](https://webpack.js.org/)
- [AT-UI para Angular](https://github.com/icepoint0/at-angular) (Desarrollado por [@icepoint0](https://github.com/icepoint0), Gracias por la contribución)

## Instalar

- Uso recomendado `npm`

```bash
npm install at-ui
```
- O uso de `yarn`
```bash
yarn add at-ui
```

- O usando la etiqueta `<script>` para uso global

```html
<script type="text/javascript" src="at.min.js"></script>
```

## Uso
Porque el estilo de `AT-UI` es independiente. Es un proyecto separado. Así que deberíamos instalar `AT-UI-Style` en necesidad antes de usar `AT-UI`. Use npm, yarn o etiqueta de script de acuerdo a su preferencia.

```bash
npm install at-ui-style
```

O

```bash
yarn add at-ui-style
```

O

```html
<link rel="stylesheet" href="at.min.css" />
```

## Contribución
Encontrar errores, enviar solicitudes de extracción o mejorar nuestros documentos - cualquier contribución es bienvenida y muy apreciada. Para empezar, dirígete a nuestro [pautas de contribucion](https://github.com/at-ui/at-ui/blob/master/.github/CONTRIBUTING.md). Gracias!

## Licencia

MIT


[npm-version-image]: https://img.shields.io/npm/v/at-ui.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/at-ui
[david-dm-image]: https://david-dm.org/AT-UI/at-ui.svg?style=flat-square
[david-dm-url]: https://david-dm.org/AT-UI/at-ui
[travis-image]: https://img.shields.io/travis/AT-UI/at-ui/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AT-UI/at-ui
