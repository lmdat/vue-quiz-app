import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_name: ''
  },
  getters:{
    getUserName: state => {
        return state.user_name;
    }
  },
  mutations: {
    setUserName: (state, name) => {
        state.user_name = name;
    }
  },
  actions: {

  }
})
