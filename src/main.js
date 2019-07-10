// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import { Header,Tabbar,TabItem } from 'mint-ui';
Vue.config.productionTip = false


Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
