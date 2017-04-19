import Vue from 'vue'
import Router from 'vue-router'
import NavConfig from './nav.config.yml'

Vue.use(Router)

function regeisterRoute (navConfig) {
  const routes = []

  Object.keys(NavConfig).forEach((lang, idx) => {
    const navs = NavConfig[lang]

    navs.forEach(nav => {
      const parentName = nav.name
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.children.forEach(item => {
            addRoute(parentName, item)
          })
        })
      } else if (nav.children) {
        nav.children.forEach(item => {
          addRoute(parentName, item)
        })
      }
    })
  })

  function addRoute (parentName, item) {
    routes.push({
      path: parentName + item.path,
      name: item.name,
      component: require(`../markdown${item.path}.md`)
    })
  }

  return routes
}

const routes = regeisterRoute(NavConfig)

// routes.push({
//   path: '*',
//   redirect: '/'
// })

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  root: process.env.serverConfig.portalPrefix,
  routes
})

export default router
