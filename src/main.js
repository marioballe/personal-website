// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import hero from './components/hero/hero'

import home from './containers/home'
import skills from './containers/skills'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <home />
        <skills />
      </div>
    </section>-
  </div>
  `,
  router,
  components: {
    hero,
    home,
    skills
  }
}).$mount('#app')