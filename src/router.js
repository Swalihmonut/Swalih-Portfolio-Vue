import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import Contact from './views/contact'
import Legal from './views/legal'
import About from './views/about'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
    {
      name: 'Legal',
      path: '/legal',
      component: Legal,
    },
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
