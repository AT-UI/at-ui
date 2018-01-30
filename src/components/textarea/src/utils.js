/**
 * https://github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
 */
let hiddenTextarea

const HIDDEN_STYLE = [
  'position: absolute !important;',
  'top: 0 !important;',
  'right: 0 !important;',
  'height: 0 !important;',
  'visibility: hidden !important;',
  'overflow: hidden !important;',
  'z-index: -1000 !important;'
]

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
]

function calculateNodeStyling (node) {
  const style = window.getComputedStyle(node)
  const boxSizing = style.getPropertyValue('box-sizing')
  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  )
  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  )
  const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';')

  return { boxSizing, paddingSize, borderSize, contextStyle }
}

export function calcTextareaHeight (targetNode, minRows = 1, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    document.body.appendChild(hiddenTextarea)
  }

  const { boxSizing, paddingSize, borderSize, contextStyle } = calculateNodeStyling(targetNode)

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE.join('')}`)
  hiddenTextarea.value = targetNode.value || targetNode.placeholder || ''

  const result = {}
  let height = hiddenTextarea.scrollHeight

  if (boxSizing === 'border-box') {
    height += borderSize
  } else if (boxSizing === 'content-box') {
    height -= paddingSize
  }

  hiddenTextarea.value = ''

  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize

  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize
    }
    height = Math.max(minHeight, height)
    result.minHeight = `${minHeight}px`
  }

  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize
    }
    height = Math.min(maxHeight, height)
  }

  result.height = `${height}px`
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea)
  hiddenTextarea = null

  return result
}
