import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
import main from './assets/sass/main.scss'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
