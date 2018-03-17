// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "slick-carousel/slick/slick.css"
import axios from 'axios'
window.axios = axios
window.axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' }
window.axios.defaults.baseURL = "https://us-central1-deerlight-studio.cloudfunctions.net/"


import Tether from "tether"
import $ from "jquery"
window.jQuery = $
window.Tether = Tether
require('bootstrap')


Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */

Vue.mixin({
  methods: {
    cssbg(url) {
      let use_url = (url && url != '') ? url : '/img/default.jpg'
      let result = {
        'background-image': `url("${use_url} ")`
      }
      // console.log(result)
      return result
    }, setFilterToPage(tag) {
      if (this.$route.path != "/project") {
        this.$router.push("/project")
      }
      store.commit("setFilter",tag)
    }
  }
})


import section_footer from './components/section_footer'
import navbar from './components/navbar'
Vue.component("section_footer", section_footer)
Vue.component("navbar", navbar)

var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

if (process.env.NODE_ENV == "development") {
  setTimeout(() => {
    store.commit("setLoading", false)
  }, 0);
}
if (process.env.NODE_ENV=="production"){
  setTimeout(() => {
    store.commit("setLoading", false)
  }, 3000);
}



//soft scroll
import soft_scroll from 'monoame-softscroll'
soft_scroll.init()

import preloader from 'monoame-preloader'
var preloadList = [
  "/static/首頁/slider-1.png",
  "/static/首頁/slider-2.png",
  "/static/首頁/slider-3.png",
  "/static/首頁/slider-4.png",
  "/static/聯絡/banner.png",
  "/static/common/footer-logo.svg"
]
preloader.load(preloadList).then(() => {
  console.log("all preloaded!")
}).catch(() => {
  console.warn("some images can't be loaded")
})

var config = {
    apiKey: "AIzaSyB3qv5BN-vBlxaWe6QcubTYZFwfwJfKzb4",
    authDomain: "deerlight-studio.firebaseapp.com",
    databaseURL: "https://deerlight-studio.firebaseio.com",
    projectId: "deerlight-studio",
    storageBucket: "deerlight-studio.appspot.com",
    messagingSenderId: "271818346070"
  };
window.firebase = firebase
firebase.initializeApp(config);
console.log(firebase)
var ui = new firebaseui.auth.AuthUI(firebase.auth());
window.ui=ui

window.addEventListener("scroll",function (evt) {
  // console.log(this.window.scrollY)
  store.commit("setScrollTop", window.scrollY)
})

window.addEventListener("resize", function (evt) {
  // console.log(this.window.scrollY)
  store.commit("setMobile", window.innerWidth<800)
})



setTimeout(() => { 
  var worksRef = firebase.database().ref('works');
  worksRef.on('value', function (snapshot) {
    preloader.load(Object.values(snapshot.val()).map(o=>o.cover))
    store.commit("setWorks", snapshot.val())

  });


  var aboutRef = firebase.database().ref('about');
  aboutRef.on('value', function (snapshot) {
    store.commit("setAbout", snapshot.val())
  });

  var productRef = firebase.database().ref('products');
  productRef.on('value', function (snapshot) {
    store.commit("setProducts", snapshot.val())
  });

}, 100);