// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

// 弹窗提示
import { success, info, warning, error } from '@/utils/alertUtils';


// 请求
import {
  deleteRequest,
  postRequest,
  putRequest,
  getRequest,
  uploadRequest
} from '@/http/HttpRequest'

// 注册请求全局属性
Vue.prototype.$put = putRequest
Vue.prototype.$post = postRequest
Vue.prototype.$get = getRequest
Vue.prototype.$remove = deleteRequest
Vue.prototype.$filePost = uploadRequest

//注册提示全局属性
Vue.prototype.$error = error
Vue.prototype.$success = success
Vue.prototype.$info = info
Vue.prototype.$warning = warning


var globCofig = {
  server: 'http://127.0.0.1/',
  imgServer: 'http://127.0.0.1/',
}
Vue.prototype.$glob = globCofig

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
