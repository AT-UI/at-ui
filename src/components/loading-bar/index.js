import LoadingBar from './src/loading-bar'

let loadingBarInstance
let width = 2
let timer

function getLoadingBarInstance () {
  loadingBarInstance = loadingBarInstance || LoadingBar.newInstance({
    width
  })

  return loadingBarInstance
}

function update (options) {
  const instance = getLoadingBarInstance()

  instance.update(options)
}

function hide () {
  setTimeout(() => {
    update({
      show: false
    })
    setTimeout(() => {
      update({
        percent: 0
      })
    }, 200)
  }, 800)
}

function clearTimer () {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

export default {
  start () {
    if (timer) return

    let percent = 0

    update({
      percent,
      status: 'success',
      show: true
    })

    timer = setInterval(() => {
      percent += Math.floor((Math.random() * 3) + 5)
      if (percent > 95) {
        clearTimer()
      }
      update({
        percent,
        status: 'success',
        show: true
      })
    }, 200)
  },
  update (percent) {
    clearTimer()
    update({
      percent,
      status: 'success',
      show: true
    })
  },
  finish () {
    clearTimer()
    update({
      percent: 100,
      status: 'success',
      show: true
    })
  },
  error () {
    clearTimer()
    update({
      percent: 100,
      status: 'error',
      show: true
    })
    hide()
  },
  config (options) {
    if (options.width) {
      width = options.width
    }
  },
  destroy () {
    const instance = getLoadingBarInstance()
    clearTimer()
    loadingBarInstance = null
    instance.destroy()
  }
}
