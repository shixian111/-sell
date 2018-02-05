/*
* @Author: 12231
* @Date:   2018-02-02 18:06:47
* @Last Modified by:   shixian111
* @Last Modified time: 2018-02-04 20:09:59
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  
  currentdata: {
    get UserName () {
      return window.sessionStorage.getItem('username')
    },
    get Role(){
      return window.sessionStorage.getItem('flagRole')
   }

  }
}
const mutations = {
  setUser (state, data) {
    window.sessionStorage.setItem('username', data)
    
  },
  setRole(state, data){
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
