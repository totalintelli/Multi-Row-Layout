import Vue from 'vue'
import Router from 'vue-router'
import SettleListPage from '@/components/settleListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SettleListPage',
      component: SettleListPage
    }
  ]
})
