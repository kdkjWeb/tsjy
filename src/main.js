// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//清除默认样式
import '@/assets/css/reset.css'



//注册get、post方法
import Server from './server/server'
Vue.prototype.$get = Server.get;
Vue.prototype.$post = Server.post;

//vuex引用
import store from './store/store'

//引用ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
