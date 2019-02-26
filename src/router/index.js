import Vue from 'vue'
import Router from 'vue-router'

import layoutHeaderAside from '@/layout/header-aside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: layoutHeaderAside,
      children: [
        {
          path: 'demo1',
          name: 'demo1',
          component: () => import('@/views/demo1')
        }
      ]
    }
  ]
})
