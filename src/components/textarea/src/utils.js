/**
 * https://github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
 */
let hiddenTextarea

const HIDDEN_STYLE = `
  height: 0 !important;
  visibility: hidden !important;
  overflow: hidden !important;
  position: absolute !important;
  z-index: -999 !important;
  top: 0 !important;
  left: 0 !important;
`

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

export function calcTextareaHeight (targetNode, minRows = null, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea')
    document.body.appendChild(hiddenTextarea)
  }

  const { boxSizing, paddingSize, borderSize, contextStyle } = calculateNodeStyling(targetNode)

  hiddenTextarea.setAttribute('style', `${contextStyle}:${HIDDEN_STYLE}`)
  hiddenTextarea.value = targetNode.value || targetNode.placeholder || ''

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
    height = Math.min(minHeight, height)
  }

  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize
    }
    height = Math.min(maxHeight, height)
  }

  return {
    height: `${height}px`
  }
}
