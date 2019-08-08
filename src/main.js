//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

// 按需导入vant
import { Button,NavBar } from 'vant';
Vue.use(Button);
Vue.use(NavBar);


// 按需导入mintui
// import { Button } from 'mint-ui'
// // 使用Vue.component(名称,)注册按钮主件
// Vue.component(Button.name, Button)

import app from './app.vue'

var vm = new Vue({
    el: "#app",
    render: CreateElement => CreateElement(app), //render会吧原有的数据 给覆盖
})