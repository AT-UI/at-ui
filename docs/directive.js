import Vue from 'vue'

let fakeElem = null

/**
 * Create a fake element and set it's value from 'text' property
 */
function selectFake (text) {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

  removeFake()

  fakeElem = document.createElement('textarea')
  // Prevent zooming on IOS
  fakeElem.style.fontSize = '12px'
  // Reset box model
  fakeElem.style.border = '0'
  fakeElem.style.padding = '0'
  fakeElem.style.margin = '0'
  // Move element out of screen horizontally
  fakeElem.style.position = 'fixed'
  fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'
  // Move element to the same position vertically
  fakeElem.style.top = `${window.pageYOffset || document.documentElement.scrollTop}px`
  fakeElem.setAttribute('readonly', '')
  fakeElem.value = text

  document.body.appendChild(fakeElem)

  // let selectedText = selectText(fakeElem)

  // Executes the copy operation based on the current selection.
  let succeeded = false

  try {
    succeeded = document.execCommand('copy')
  } catch (err) {
    succeeded = false
  }

  if (succeeded) {
    console.log('Success')
  } else {
    console.log('Failed')
  }
}

/**
 * Only remove the fake element after another click event
 */
function removeFake () {
  if (fakeElem) {
    document.body.removeChild(fakeElem)
    fakeElem = null
  }
}

// function selectText (element) {
//   let selectedText = ''

//   if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
//     element.focus()
//     element.setSelectionRange(0, element.value.length)
//     selectedText = element.value
//   } else {
//     if (element.hasAttribute('contenteditable')) {
//       element.focus()
//     }

//     let selection = window.getSelection()
//     let range = document.createRange()

//     range.selectNodeContents(element)
//     selection.removeAllRanges()
//     selection.addRange(range)

//     selectedText = selection.toString()
//   }

//   return selectedText
// }

Vue.directive('clipboard', {
  bind (el, binding, vnode) {
    el.addEventListener('click', handleClick)

    function handleClick () {
      selectFake(binding.value)
    }
  },
  unbind (el) {
    removeFake()
  },
  update (value) {
    console.log(value)
  }
})
