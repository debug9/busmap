import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import FindBus from '@/components/FindBus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/findBus/',
      name: 'FindBus',
      component: FindBus
    },
  ]
})
