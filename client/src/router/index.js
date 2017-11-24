import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import '@/assets/style.css'
// import '@/assets/script.js'
// import '@/assets/audiojs/audiojs/audio.min.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
