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
          group.items.forEach(item => {
            addRoute(parentName, item)
          })
        })
      } else if (nav.items) {
        nav.items.forEach(item => {
          addRoute(parentName, item)
        })
      }
    })
  })

  function addRoute (parentName, item) {
    routes.push({
      path: `${parentName}/${item.name.toLowerCase()}`,
      name: item.name,
      component: require(`../markdown/${item.name.toLowerCase()}.md`)
    })
  }

  return routes
}

const routes = regeisterRoute(NavConfig)

routes.push({
  path: '*',
  redirect: { name: 'Introduction' }
})

const router = new Router({
  routes,
  mode: 'history',
  root: process.env.serverConfig.portalPrefix,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

    return { x: 0, y: 0 }
  }
})

export default router
