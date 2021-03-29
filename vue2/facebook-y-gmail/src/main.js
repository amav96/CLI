import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import {auth } from '@/firebase'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.use(Vuetify)

auth.onAuthStateChanged((user) => {
  if (user) {

    store.dispatch('setUsuario', user)

  } 
  
  Vue.config.productionTip = false

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

});

 

