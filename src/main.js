import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './css/base.css'
import './css/index.css'
import TodoHeader from './components/todo-header.vue'
import TodoMain from './components/todo-main.vue'
import TodoFooter from './components/todo-footer.vue'

Vue.config.productionTip = false

Vue.component('todo-header', TodoHeader)
Vue.component('todo-main', TodoMain)
Vue.component('todo-footer', TodoFooter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
