// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Tether from "tether"
// import $ from "jquery"
// window.jQuery = $
// window.Tether = Tether
// require('bootstrap')

import section_footer from './components/section_footer'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component("section_footer", section_footer)

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
setTimeout(() => {
  store.commit("setLoading",false)
}, 1500);

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

var worksRef = firebase.database().ref('works');
worksRef.on('value', function (snapshot) {

  store.commit("setWorks", snapshot.val())
  // snapshot.forEach(function (childSnapshot) {
    
  //   var childKey = childSnapshot.key;
  //   var childData = childSnapshot.val();
  //   store.commit("setWorks", childData)
  //   // console.log(childData);
  //   // ...
  // });
});