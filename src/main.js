import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false;
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
//引入路由router
import router from '@/router'
//引入仓库
import store from './store'
//引入mock数据
import '@/mock/mockServe';

new Vue({
  render: h => h(App),
  router,
  //注册仓库：组件实例身上会多出$store属性
  store
}).$mount('#app')
