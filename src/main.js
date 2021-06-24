// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import sellers from './components/sellers/sellers';
import VueRouter from 'vue-router';

import './common/stylus/index.styl';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(VueRouter)

// 1. 定义路由
const routes = [
  {path:'/goods', component: goods},
  {path:'/ratings', component: ratings},
  {path:'/sellers', component: sellers}
]

// 2. 创建router实例，然后传 routes 配置
const routers = new VueRouter({
  routes,
  linkActiveClass:'router-link-active'
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router: routers,
  components: { App },
  template: '<App/>'
}).$mount('#app');