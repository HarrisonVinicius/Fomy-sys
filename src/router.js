import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Delivery from './components/Delivery.vue'
import Menu from './components/Menu.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/', component: Menu},
    {path:'/about', component: About},
    {path:'/login', component: Login},
    {path:'/menu', component: Menu},
    {path:'/delivery', component: Delivery},
  ]

})