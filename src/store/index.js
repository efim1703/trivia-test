import Vue from 'vue'
import Vuex from 'vuex'
import companyModule from './company'
import usersModule from './users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users: usersModule,
    company: companyModule
  }
})
