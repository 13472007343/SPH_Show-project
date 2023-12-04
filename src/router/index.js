//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

let originPuch = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPuch.call(this, location, resolve, reject);
    } else {
        originPuch.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

//配置路由
export default new VueRouter({
    //添加路由
    //meta(路由元信息)
    routes: [
        {
            //首页路由
            path: '/home',
            component: Home,
            meta: { iSFooterShow: true }
        },
        //登录路由
        {
            path: '/login',
            component: Login,
            meta: { iSFooterShow: false }
        },
        //注册路由
        {
            path: '/register',
            component: Register,
            meta: { iSFooterShow: false }
        },
        //搜索路由
        {
            path: '/search/:keyWord?',
            component: Search,
            meta: { iSFooterShow: true },
            name: 'search',
            
        },
        //重定向（访问项目定位到首页）
        {
            path: '*',
            redirect: '/home'
        }

    ]
})