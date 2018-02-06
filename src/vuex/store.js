/*
* @Author: 12231
* @Date:   2018-02-02 18:06:47
* @Last Modified by:   shixian111
* @Last Modified time: 2018-02-05 21:06:16
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  setNewsID:'',//设置新闻的id
  currentdata: {
    get UserId() {
      return window.sessionStorage.getItem('userid')
    },
    get Role(){
      return window.sessionStorage.getItem('flagRole')
   },
   
  }
}
const mutations = {
  setuserid (state, data) {//记录登录的id
    window.sessionStorage.setItem('userid', data)
    
  },
  setRole(state, data){//设置登录角色
       window.sessionStorage.setItem('flagRole', data)
   },
  
  clearUser () {
    window.sessionStorage.removeItem('username')
    
  },
  
}
export default new Vuex.Store({
  state,
  mutations
})
