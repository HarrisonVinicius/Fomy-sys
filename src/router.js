import Vue from 'vue'
import Router from 'vue-router'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Delivery from './components/Delivery.vue'
import Menu from './components/Menu.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
import Schedule from './components/Schedule.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/', component: Home},
    {path:'/about', component: About},
    {path:'/login', component: Login},
    {path:'/register', component: Register},
    {path:'/menu', component: Menu},
    {path:'/delivery', component: Delivery},
    {path:'/schedule', component: Schedule},
  ]

})
