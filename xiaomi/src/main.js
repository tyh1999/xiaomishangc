import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import axios from 'vue-axios'
import VueAxios from 'vue-axios'
//import env from './env'

//根据前段跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api'
//超时
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use()(function(response){
  let res = response.data;
  //成功
  if(res.status==0){
    return res.data;
  }
  //未登录,返回登录页面
  else if(res.status == 10){
    window.location.href = '/#/login';
  }
  //报错，弹出错误
  else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
