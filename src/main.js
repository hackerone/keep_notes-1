import Vue from 'vue'
import App from './App.vue'
import store from './store';
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   store,
//   components: { App },
//   template: '<App/>'
// })