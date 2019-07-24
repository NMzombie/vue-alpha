// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global from './util/request'
import moment from 'moment'
import 'mint-ui/lib/style.css'
import { Header,Tabbar,TabItem,Badge,Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios'
import qs from 'qs'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.use(router);
Vue.prototype.$axios = axios;// 全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs;
Vue.prototype.GLOBAL = global.baseURL;
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Badge.name, Badge);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.filter('dataFormat',function (dataStr,pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
});

const store = new Vuex.Store({
  state: {
    count: 0,
    sb:'我啦啦啦啦'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
});
