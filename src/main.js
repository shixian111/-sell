// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import originJSONP from 'jsonp'
import VueResource from 'vue-resource'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入轮播组件
import './assets/css/style.css'//引入一个自定义的css样式
import IP from './Global_ip'
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
// request.headers.set('Authorization', localStorage.getItem('Authorization'))



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
