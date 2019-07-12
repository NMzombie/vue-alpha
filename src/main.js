// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './util/request'
import 'mint-ui/lib/style.css'
import { Header,Tabbar,TabItem,Badge,Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios'
import qs from 'qs'
Vue.config.productionTip = false
Vue.use(router)
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs
Vue.prototype.GLOBAL = global

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Badge.name, Badge);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
