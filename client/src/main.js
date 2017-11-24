// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FBSignInButton from 'vue-facebook-signin-button'
// var SocialSharing = require('vue-social-sharing');
import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing);
Vue.use(FBSignInButton)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
