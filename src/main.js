// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'normalize.css'

//导入全局重置css样式
import 'font-awesome/css/font-awesome.css'
//导入图标字体库

import axios from 'axios'

//2. 定义一个接口的基础地址
axios.defaults.baseURL = 'http://jx-tongan.com/vueapi/'

Vue.prototype.$http=axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
