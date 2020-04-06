import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' //加载mockserver即可
Vue.config.productionTip = false
//注册全局组件标签
Vue.component(Button.name,Button)//<mt-btton></mt-btton>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
