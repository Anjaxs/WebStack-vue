import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './views/index.vue'
import About from './views/about.vue'

import './assets/css/fonts/linecons/css/linecons.css'
import './assets/css/fonts/fontawesome/css/font-awesome.min.css'
import './assets/css/bootstrap.css'
import './assets/css/xenon-core.css'
import './assets/css/xenon-components.css'
import './assets/css/xenon-skins.css'
import './assets/css/nav.css'
import { loadJs } from './assets/js/app.js' 

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.afterEach((to, from, next) => {
  console.log("to => ", to, "from => ", from, "next => ",  next);
  if (to.path == '/' && to.hash == '') {
    loadJs();
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
