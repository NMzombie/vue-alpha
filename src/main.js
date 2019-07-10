// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import { Header,Tabbar,TabItem,Badge } from 'mint-ui';
Vue.config.productionTip = false
Vue.use(router)


Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Badge.name, Badge);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
