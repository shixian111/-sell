/*
* @Author: 12231
* @Date:   2018-02-02 18:06:47
* @Last Modified by:   shixian111
* @Last Modified time: 2018-02-02 18:20:26
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  
  currentdata: {
    get UserName () {
      return window.sessionStorage.getItem('username')
    },
    

  }
}
const mutations = {
  setUser (state, data) {
    window.sessionStorage.setItem('username', data.username)
    
  },
  
  clearUser () {
    window.sessionStorage.removeItem('username')
    
  },
  
}
export default new Vuex.Store({
  state,
  mutations
})
