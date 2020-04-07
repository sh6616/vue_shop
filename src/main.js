import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' //加载mockserver即可
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
     loading: require('../static/lazyload/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
     error: require('../static/lazyload/error.jpg')  //加载失败图片
});

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
