import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';

import Hjem from './views/Hjem';
import MineProSub from  './views/MineProSub';
import LærOmMig from  './views/LærOmMig';
import Kontakt from  './views/Kontakt';
import NotFound from  './views/NotFound';
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)
Vue.use(VueRouter)



import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Hjem },
    { path: '/mineprosub', component: MineProSub },
    { path: '/lærommig', component: LærOmMig },
    { path: '/kontakt', component: Kontakt },
    { path: '*', component: NotFound },
  ]
})

new Vue({
  router,
  vuetify,
  
  render: h => h(App)
}).$mount('#app')
