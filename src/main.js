// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "slick-carousel/slick/slick.css"

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
setTimeout(() => {
  var worksRef = firebase.database().ref('works');
  worksRef.on('value', function (snapshot) {
    store.commit("setWorks", snapshot.val())
    console.log("Test")
    // snapshot.forEach(function (childSnapshot) {

    //   var childKey = childSnapshot.key;
    //   var childData = childSnapshot.val();
    //   store.commit("setWorks", childData)
    //   // console.log(childData);
    //   // ...
    // });
  });
}, 100);