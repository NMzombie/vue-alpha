import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      name: 'search',
      component: SearchContainer
    }
  ]
})
