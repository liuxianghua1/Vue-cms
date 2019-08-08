//入口文件
import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
// 2.手动安装 vuerouter
Vue.use(VueRouter)

// 按需导入vant
import { Button, NavBar, Tabbar, TabbarItem } from 'vant';
Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem);


import app from './app.vue'

var vm = new Vue({
    el: "#app",
    render: CreateElement => CreateElement(app), //render会吧原有的数据 给覆盖
})