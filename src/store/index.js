import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import moduleCart from './cart'
import moduleProduct from './product'

Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules:{
      cart: moduleCart,
      product: moduleProduct,
  }
   
})
export default store;