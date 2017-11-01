/**
 * Simplified version
 * https://github.com/ElemeFE/element/blob/dev/src/locale/index.js
 */
import Vue from 'vue'
import defaultLang from './lang/en-US'

const i18nHandler = function (...args) {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t

  if (typeof vuei18n === 'function') {
    return vuei18n.apply(this, args)
  }
}

export function t (...args) {
  const array = args[0].split('.')
  let value = i18nHandler.apply(this, args)
  let current = defaultLang

  if (value !== null && typeof value !== 'undefined') {
    return value
  }

  for (let i = 0, len = array.length; i < len; i++) {
    const property = array[i]
    value = current[property]

    if (i === len - 1) {
      return value
    } else if (!value) {
      return ''
    }

    current = value
  }

  return ''
}
