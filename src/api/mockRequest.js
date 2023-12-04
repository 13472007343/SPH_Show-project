//asios二次封装
import axios from "axios";
// 引入进度条
// start进度条开始动，done进度条停止
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"





//利用axios对象方法,创建axios实例
const requests = axios.create({
    //配置对象
    //基础路径
    baseURL: "/mock",
    //请求超时
    timeout: 5000,
})

//请求拦截器，再发送请求之前，做一些事情
requests.interceptors.request.use((config) => {
    //config是配置对象
    //进度条开启
    nProgress.start();
    return config;
})
//相应拦截器
requests.interceptors.response.use(
    (res) => {
        //进度条关闭
        nProgress.done();
        return res.data;
    },
    (err) => {
       alert('服务器相应失败')
    }
)
//对外暴露

export default requests;