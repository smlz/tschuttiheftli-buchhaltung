import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/components/Init'
import DashBoard from '@/components/DashBoard'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/init',
      name: 'Init',
      component: Init
    },
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})
