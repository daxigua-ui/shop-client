import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import search from './modules/search'

Vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({

  mutations,
  actions,
  getters,
  modules: {
    home,
    search
  }
})