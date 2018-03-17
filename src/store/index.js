import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    works: [],
    about: {},
    products: {},
    mobile: window.innerWidth < 800,
    loading: true,
    filter: "",
    filter_cata:
      `品牌,影片 / 平面動態,視覺設計,介面 / 使用者體驗`.split(","),
    filter_style:
      `插畫,優雅 / 平靜,大膽,豐富`.split(","),
    scrollTop: 0
  },
  mutations: {
    setWorks(state, value){
      state.works = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setProducts(state,value){
      state.products = value
    },
    setLoading(state,value){
      state.loading=value
    },
    setFilter(state, value) {
      state.filter = value
    },
    setScrollTop(state,value){
      state.scrollTop=value
    },
    setMobile(state, value) {
      state.mobile = value
    },

  },
  getters: {
    available_works(state){
      return Object.keys(state.works)
             .map(o => ({ id: o, work: state.works[o] }))
             .filter(o => o.work.show)
    }
  }
})
