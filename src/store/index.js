import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    works: [],
    loading: true
  },
  mutations: {
    setWorks(state, value){
      state.works = value
    },
    setLoading(state,value){
      state.loading=value
    }
  },
  getters: {
    available_works(state){
      return Object.keys(state.works)
             .map(o => ({ id: o, work: state.works[o] }))
             .filter(o => o.work.show)
    }
  }
})
