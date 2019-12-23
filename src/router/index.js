import Vue from 'vue'
import Router from 'vue-router'
import EchartsMap from '@/components/EchartsMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: EchartsMap
    }
  ]
})
