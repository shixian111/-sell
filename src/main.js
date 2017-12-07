// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import originJSONP from 'jsonp'
import VueResource from 'vue-resource'
import $ from 'jquery'
Vue.use(VueResource)

// request.headers.set('Authorization', localStorage.getItem('Authorization'))

Vue.http.interceptors.push((request, next) => {
        // ...
        // 请求发送前的处理逻辑
        // ...
        request.headers.set('Authorization', localStorage.getItem('Authorization'))
    next((response) => {
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
