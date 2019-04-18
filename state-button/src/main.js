import Vue from 'vue'
import App from './App.vue'
import StateButton from './lib/index.js'
Vue.use(StateButton)
new Vue({
  el: '#app',
  render: h => h(App)
})
