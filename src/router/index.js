import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',    
    component: () => import('../views/Sobre.vue')
  },  
  {
    path: '/cursos',
    name: 'Cursos',    
    component: () => import('../views/Cursos.vue')
  },  
]

const router = new VueRouter({
  routes
})

export default router
