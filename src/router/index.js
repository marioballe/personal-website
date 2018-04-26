import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../containers/Home'

// application routes
const routes = [
  { path: '/', component: home }
]


// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
